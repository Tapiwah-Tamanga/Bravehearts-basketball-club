# Bravehearts API — Endpoint Reference

Base URL: `http://localhost:3000`. All bodies and responses are JSON.
Your README covers setup; this file is the contract — method, path, auth,
body, and exact response shape per endpoint.

## Conventions

| Case | Status | Body |
|---|---|---|
| Create OK | `201` | `{ "success": true, "message": "<Label> created successfully", "data": {…} }` |
| Read / update OK | `200` | `{ "success": true, "data": {…} }` or `{ "success": true, "count": N, "data": […] }` |
| Delete OK | `200` | `{ "success": true, "message": "<Label> deleted successfully" }` |
| Unknown id | `404` | `{ "success": false, "message": "<Label> not found" }` |
| Bad input | `400` | `{ "success": false, "message": "…" }` or `{ "status": false, "message": "…", "data": [] }` (users routes) |
| No token | `401` | `{ "status": false, "message": "Unauthorized - No token provided", "data": [] }` |
| Bad token | `403` | `{ "error": "Invalid token" }` |
| Server error | `500` | `{ "success": false, "message": "…" }` |

Auth header (only where marked 🔒): `Authorization: Bearer <token>`.

## Auth — `/api/users`

No auth needed except `GET /profile` 🔒.

- `POST /api/users/register` — body `{ "name", "email", "password", "role?" }`
  (`role`: `Admin|Master Coach|Coach|Fan`, default `Coach`).
  → `201 { status, message, data: user }`. Duplicate email → `400`.
  Welcome mail is best-effort; signup succeeds without SMTP.
- `POST /api/users/login` — body `{ "email", "password" }`
  → `200 { status: true, data: { user: { id, name, email }, token } }`.
  Unknown email → `404`, wrong password → `400`, missing `JWT_SECRET` → `500`.
- `GET /api/users/profile` 🔒 → `200 { status: true, data: { id, email, name } }`
  (decoded token payload).
- `POST /api/users/forgot` — body `{ "email" }` → sends Gmail reset link.
  Unknown email → `404`.
- `POST /api/users/reset` — body `{ "token", "newPassword" }`.
  Bad/expired token → `400`.

## Teams — `/api/teams`

- `POST /api/teams` — body e.g. `{ "name": "Bravehearts Men", "category": "Men", "coach": "Coach K. Phiri", "description": "…", "icon": "sports_basketball", "color": "#a30019", "groupPhoto": "/teams/mens/group photo.jpg", "badge": "Elite Division" }`
  (`name!` unique, `category!`: `Men|Boys|Ladies|Girls|Youth`). → `201`.
- `GET /api/teams` → `200 { success, count, data: [teams] }`.
- `GET /api/teams/:id` → `200 { success, data: team }` or `404 "Team not found"`.
- `PUT /api/teams/:id` — partial body allowed → `200` with updated team.
- `DELETE /api/teams/:id` → `200` message (players/games keep `TeamId`, FK is `SET NULL`).

## Players — `/api/players`

- `POST /api/players` — body e.g. `{ "fullName": "Uchizi", "jerseyNumber": 10, "position": "PG", "team": "Men", "age": 28, "height": 183, "photo": "/teams/mens/uchizi-mwale.jpg", "marketValue": 25000, "points": 520, "assists": 198, "rebounds": 82, "steals": 64, "blocks": 18, "year": "Senior", "status": "Starter", "threePointPct": 36.8, "freeThrowPct": 85.2, "gamesPlayed": 20, "TeamId": 2 }`
  (only `fullName` + `team` required; `team`: `Ladies|Men|Girls|Boys|Youth`;
  pass `TeamId` to link the FK — plain `team` string alone leaves it null). → `201`.
- `GET /api/players` → `200 { success, count, data: [players incl. Team{id,name,category}] }`.
- `GET /api/players/team/:category` (e.g. `/team/Men`, players ordered by jersey)
  → `200 { success, category, totalPlayers, totalPoints, totalAssists, totalRebounds, totalSteals, totalBlocks, players }`.
- `GET /api/players/:id` → `200` with `Team` included, or `404 "Player not found"`.
- `PUT /api/players/:id` → `200` updated. `DELETE /api/players/:id` → `200`.

## Games — `/api/games`

- `POST /api/games` — body e.g. `{ "opponent": "Tigers BC", "gameDate": "2026-07-20T18:00:00", "venue": "Lilongwe Community Centre", "scoreFor": 84, "scoreAgainst": 79, "result": "WIN", "season": "2026", "status": "upcoming", "TeamId": 2 }`
  (required: `opponent`, `gameDate`; `result`: `WIN|LOSS|DRAW`;
  `status`: `upcoming|live|finished`; live fields: `quarter`, `clock`,
  `q1–q4`, `fouls`, `timeouts`, `fgPct`, `threePct`, `ftPct`, `turnovers`,
  `streamUrl`, `isLive`). → `201`.
- `GET /api/games` → `200 { success, count, data }`, newest first, each with `Team`.
- `GET /api/games/:id` → `200`, includes `Team` + `GamePlays` + `TicketTiers`.
  `404 "Game not found"`.
- `PUT /api/games/:id` (e.g. live score update `{ "scoreFor": 86, "quarter": "Q4" }`)
  → `200`. `DELETE /api/games/:id` → `200`.

## Events — `/api/events`

- `POST /api/events` — body `{ "title"!, "description", "location", "eventDate", "poster" }` → `201`.
- `GET /api/events` → `200 { success, count, data }`, soonest first.
- `GET /api/events/:id` → `200` or `404 "Event not found"`.
- `PUT /api/events/:id` → `200`. `DELETE /api/events/:id` → `200`.

## Dashboard & stats (read-only)

- `GET /api/dashboard` → `200 { success, data: { totalTeams, totalPlayers, totalGames, totalEvents, wins, losses } }`.
- `GET /api/stats/win-loss` → `{ wins, losses, draws }`.
- `GET /api/stats/club` → `{ totalPlayers, totalTeams, totalGames }`.
- `GET /api/stats/games-per-team` → `{ "<team name>": N }` (every game needs a `TeamId`, else it crashes — see README debt).
- `GET /api/stats/top-players` → top 5 by `points`, each with `Team`.

## Club resources — `/api/club/*`

One REST shape each (generic controller): `POST /` → `201`,
`GET /` → `200 { success, count, data }`, `GET /:id` → `200` / `404`,
`PUT /:id` → `200`, `DELETE /:id` → `200`.

| Mount | Required body | Example |
|---|---|---|
| `/plays` | `play!` (+`GameId`) | `{ "time": "4:12", "play": "K. Mwale 3PT Shot", "score": "78-72", "type": "score", "GameId": 1 }` (`type`: `score\|rebound\|assist\|steal\|block\|other`) |
| `/ticket-tiers` | `name!`, `price!` (+`GameId`) | `{ "name": "Standard", "description": "General seating", "price": 5000, "capacity": 500, "GameId": 1 }` (`name`: `Standard\|Premium\|SeasonPass`) |
| `/ticket-orders` | — | `{ "buyerName": "…", "email": "…", "qty": 2, "status": "pending", "GameId": 1, "TicketTierId": 1 }` (`status`: `pending\|paid\|cancelled`) |
| `/news` | `title!` | `{ "tag": "MATCH REPORT", "title": "…", "excerpt": "…", "image": "…", "publishedAt": "…" }` |
| `/subscribers` | `email!` unique | `{ "email": "fan@example.mw" }` |
| `/bookings` | `title!` | `{ "title": "Morning Drill", "time": "8:00 AM - 10:00 AM", "capacity": 20, "status": "Available" }` (`status`: `Available\|Full`) |
| `/prospects` | `name!` | `{ "name": "…", "position": "PG", "notes": "…", "TeamId": 1 }` |
| `/broadcasts` | `message!` | `{ "audience": "all", "channel": "Push", "message": "…" }` (`channel`: `SMS\|Push\|Email`) |
| `/products` | `name!`, `price!` | `{ "name": "Flame of Malawi Jersey", "price": 25000, "image": "…", "stock": 100 }` |
| `/inquiries` | — | `{ "type": "Sponsorship", "name": "…", "email": "…", "message": "…" }` (`type`: `Contact\|Sponsorship\|Clinic\|Waitlist`) |

## Worked example (curl)

```bash
TOKEN=$(curl -s -X POST localhost:3000/api/users/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"coach2@test.mw","password":"pass123"}' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>console.log(JSON.parse(s).data.token))")

curl localhost:3000/api/players/team/Men
curl -H "Authorization: Bearer $TOKEN" localhost:3000/api/users/profile
curl -X POST localhost:3000/api/club/ticket-orders \
  -H 'Content-Type: application/json' \
  -d '{"buyerName":"Ada","email":"ada@example.mw","qty":2,"GameId":1,"TicketTierId":1}'
```
