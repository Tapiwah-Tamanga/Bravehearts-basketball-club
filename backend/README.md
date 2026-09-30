# Bravehearts Basketball Club — Backend API

Express 5 + Sequelize 6 + MySQL. Serves the Next.js frontend (`/frontend`):
roster, games, events, tickets, streaming, newsletter, bookings, admin dashboard.

## Quick start

```bash
npm install
# MySQL running locally, then:
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS bh;"
node seed.js        # idempotent — safe to re-run
npm run start       # nodemon app.js → http://localhost:3000
```

Frontend dev origin (`http://localhost:3000`) is allow-listed in `app.js` CORS.

## Environment (`.env`)

| Var | Required | Purpose |
|---|---|---|
| `DB_HOST / DB_NAME / DB_USER / DB_PASSWORD / DB_PORT` | yes | MySQL connection (`DB_DIALECT=mysql`) |
| `DB_LOGGING` | no | Set `true` to log SQL (default off) |
| `PORT` | no | Default `3000` |
| `JWT_SECRET` | yes for login | Signs auth tokens (1h expiry). Session-only override for testing: `$env:JWT_SECRET="dev-only-secret"; npm run start` |
| `MAILTRAP_USER / MAILTRAP_PASS / EMAIL_FROM` | no | Welcome emails; registration succeeds even when unset (mail is best-effort) |
| `EMAIL_PASS / CLIENT_URL` | no | Gmail password-reset flow (`forgot`/`reset`) |

## Data model (`models/`)

Core: `User | Team | Player | Game | Event` (+ `models/club.model.js` for the rest).

Relations (`models/index.js`): `Team 1—N Player`, `Team 1—N Game`,
`Game 1—N GamePlay`, `Game 1—N TicketTier`, `TicketTier 1—N TicketOrder`,
`Game 1—N TicketOrder`, `Team 1—N DraftProspect`. `Player.team` ENUM is kept
for compatibility — `TeamId` FK is the source of truth.

| Model | Key fields |
|---|---|
| `Team` | `name!`, `category[Men\|Boys\|Ladies\|Girls\|Youth]!`, `coach`, `description`, `icon`, `color`, `groupPhoto`, `badge`, `status[Active\|Inactive]` |
| `Player` | `fullName!`, `jerseyNumber`, `position`, `team!`, `age`, `height(cm)`, `photo`, `marketValue`, `points/assists/rebounds/steals/blocks`, `year`, `status[Starter\|Bench\|Reserve]`, `threePointPct`, `freeThrowPct`, `gamesPlayed` (default 20) |
| `Game` | `opponent!`, `gameDate!`, `venue`, `scoreFor/Against`, `result[WIN\|LOSS\|DRAW]`, `season`, `status[upcoming\|live\|finished]`, `quarter`, `clock`, `q1–q4`, `fouls`, `timeouts`, `fgPct/threePct/ftPct`, `turnovers`, `streamUrl`, `isLive` |
| `Event` | `title!`, `description`, `location`, `eventDate`, `poster` |
| `User` | `name!`, `email! unique`, `password` (bcrypt), `role[Admin\|Master Coach\|Coach\|Fan]` |
| `GamePlay` | `time`, `play!`, `score`, `type[score\|rebound\|assist\|steal\|block\|other]` |
| `TicketTier` | `name[Standard\|Premium\|SeasonPass]!`, `description`, `price!`, `capacity` |
| `TicketOrder` | `buyerName`, `email`, `qty`, `status[pending\|paid\|cancelled]` |
| `NewsArticle` | `tag`, `title!`, `excerpt`, `image`, `publishedAt` |
| `Subscriber` | `email! unique` |
| `Booking` | `title!`, `time`, `capacity`, `status[Available\|Full]` |
| `DraftProspect` | `name!`, `position`, `notes` |
| `Broadcast` | `audience`, `channel[SMS\|Push\|Email]`, `message!` |
| `Product` | `name!`, `price!`, `image`, `stock` |
| `Inquiry` | `type[Contact\|Sponsorship\|Clinic\|Waitlist]`, `name`, `email`, `message` |

Schema auto-syncs on boot (`sequelize.sync({ alter: true })`) — no migrations.

## Endpoints

Standard shape: `{ success, message?, data | count+data }`. Errors are JSON
(`404` unknown id, `400` validation, `401` no token, `403` bad token).

Auth: `POST /api/users/register {name,email,password,role?}` →
`POST /api/users/login {email,password}` → `{ data: { user, token } }`.
`GET /api/users/profile` needs `Authorization: Bearer <token>`
(`middleware/protected.js`). `POST /api/users/forgot|reset` for Gmail reset flow.

CRUD `POST / | GET / | GET /:id | PUT /:id | DELETE /:id` on:
` /api/teams | /api/players (+GET /team/:category) | /api/games (detail includes
Team + plays + tiers) | /api/events`.

Aggregates: `GET /api/dashboard` (counts + wins/losses),
`GET /api/stats/win-loss | /club | /games-per-team | /top-players`.

Small resources — same CRUD under one router (`routes/club.route.js`,
generic factory in `controllers/club.controller.js`):
`/api/club/plays | ticket-tiers | ticket-orders | news | subscribers |
bookings | prospects | broadcasts | products | inquiries`.

Uploads: `/uploads` serves `uploads/` (multer installed; wiring per-route TBD).

## Seed & tests

`node seed.js` loads 5 teams, 45 players, 6 games (game 1 = live Q3-04:12),
4 events, 12 tiers, 2 bookings, 1 product. Verified: full CRUD cycles on every
resource (201/200/404), duplicate-register 400, wrong-password 400,
profile 200/403/401, stats correct on seeded data (4W/1L/1D).

## Notes / debt

- `GET /test-email` still uses a hardcoded recipient + `"MyBuddy"` branding —
  leftover stub, replace or remove before production.
- `config/storage.config.js`, `services/email.service.js` are empty stubs.
- Request logger in `app.js` runs before `express.json()` (body logs empty).
- `stats.getGamesPerTeam` assumes every game has a team; un-teamed games crash it.
