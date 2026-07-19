# Bravehearts Basketball Club — Next.js Frontend Design

**Date:** 2026-07-19
**Status:** Approved
**Framework:** Next.js 16.2.10 + React 19 + Tailwind CSS v4

---

## 1. Overview

Convert 6 existing HTML pages into a production Next.js web application for the Bravehearts Basketball Club (Lilongwe, Malawi). The app serves as the public-facing website and admin dashboard for managing players, events, games, scores, and live streaming.

**Design Direction:** "Court-Side Authority" — Editorial/magazine aesthetic meets sports data visualization. Bold Montserrat typography, high-contrast red/green palette, sharp angular borders, and dramatic stat displays.

---

## 2. Architecture

### 2.1 Route Structure

```
/                          → Homepage (public, top navbar)
/roster/[team]             → Dynamic roster pages (public, top navbar)
/dashboard                 → Admin overview (sidebar)
/dashboard/players         → Player management CRUD (sidebar)
/dashboard/events          → Event management (sidebar)
/dashboard/games           → Game/score management (sidebar)
/streaming                 → Live stream embed + scoreboard (public, top navbar)
```

### 2.2 Layouts

| Layout | Used By | Structure |
|--------|---------|-----------|
| `PublicLayout` | Homepage, Roster, Streaming | TopNavBar + Footer |
| `DashboardLayout` | All dashboard pages | Sidebar + TopHeader + Footer |

### 2.3 Component Hierarchy

```
app/
├── layout.tsx                    → Root layout (fonts, metadata)
├── globals.css                   → Design tokens, Tailwind config
├── page.tsx                      → Homepage
├── roster/
│   └── [team]/
│       └── page.tsx              → Dynamic roster page
├── dashboard/
│   ├── layout.tsx                → DashboardLayout (sidebar)
│   ├── page.tsx                  → Overview
│   ├── players/
│   │   └── page.tsx              → Player CRUD
│   ├── events/
│   │   └── page.tsx              → Event management
│   └── games/
│       └── page.tsx              → Score updates
├── streaming/
│   └── page.tsx                  → Live stream page
└── components/
    ├── layout/
    │   ├── TopNavBar.tsx
    │   ├── Sidebar.tsx
    │   └── Footer.tsx
    ├── ui/
    │   ├── Button.tsx
    │   ├── PlayerCard.tsx
    │   ├── StatBlock.tsx
    │   └── Badge.tsx
    └── dashboard/
        ├── DashboardTable.tsx
        ├── PlayerForm.tsx
        ├── EventForm.tsx
        └── GameForm.tsx
```

---

## 3. Design System (Unified from home.html)

### 3.1 Colors

```css
--primary: #a30019;
--primary-container: #ce1126;
--secondary: #006e2d;
--secondary-container: #93f9a2;
--surface: #fcf9f8;
--surface-container: #f0edec;
--surface-container-low: #f6f3f2;
--surface-container-high: #ebe7e7;
--surface-container-highest: #e5e2e1;
--surface-container-lowest: #ffffff;
--background: #fcf9f8;
--on-surface: #1c1b1b;
--on-surface-variant: #5c3f3d;
--on-primary: #ffffff;
--on-secondary: #ffffff;
--outline: #916f6c;
--outline-variant: #e6bdba;
--error: #ba1a1a;
```

### 3.2 Typography

| Token | Font | Weight | Size | Line Height | Tracking |
|-------|------|--------|------|-------------|----------|
| display-lg | Montserrat | 900 | 72px | 80px | -0.04em |
| headline-xl | Montserrat | 900 | 48px | 52px | -0.02em |
| headline-lg | Montserrat | 800 | 32px | 38px | -0.01em |
| headline-md | Montserrat | 700 | 24px | 31px | — |
| body-lg | Montserrat | 400 | 18px | 29px | — |
| body-md | Montserrat | 400 | 16px | 24px | — |
| label-caps | Montserrat | 700 | 12px | 16px | 0.1em |
| label-sm | Montserrat | 600 | 12px | 14px | — |
| stats-number | JetBrains Mono | 700 | 32px | 32px | — |

### 3.3 Spacing

```
xs: 4px | sm: 8px | md: 16px | lg: 24px | xl: 48px | 2xl: 80px
gutter: 24px | margin-desktop: 40px | margin-mobile: 16px
```

### 3.4 Border Radius

```
DEFAULT: 0.125rem | lg: 0.25rem | xl: 0.5rem | full: 0.75rem
```

### 3.5 Visual Effects

- **Grayscale-to-color hover** on player photos (500ms transition)
- **Kinetic border animation** — tricolor gradient sliding across bottom of cards
- **Pulsing live indicator** — red/green opacity animation for live badges
- **Staggered entrance** — cards fade in with animation-delay on page load
- **Sharp angular borders** — minimal rounding, military/athletic aesthetic
- **Material Symbols Outlined** — all iconography

---

## 4. Data Models (Mock Data)

### 4.1 Player

```typescript
interface Player {
  id: number;
  fullName: string;
  jerseyNumber: number;
  position: string;        // PG, SG, SF, PF, C
  team: "Ladies" | "Men" | "Girls" | "Boys" | "Youth";
  age: number;
  height: number;          // in cm
  photo: string;           // URL
  marketValue: number;
  points: number;
  assists: number;
  rebounds: number;
  steals: number;
  blocks: number;
}
```

### 4.2 Game

```typescript
interface Game {
  id: number;
  opponent: string;
  gameDate: string;        // ISO date
  venue: string;
  scoreFor: number;
  scoreAgainst: number;
  result: "WIN" | "LOSS" | "DRAW";
}
```

### 4.3 Event

```typescript
interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;       // ISO date
  poster: string;          // URL
}
```

### 4.4 Team

```typescript
interface Team {
  id: number;
  name: string;
  category: "Men" | "Boys" | "Ladies" | "Girls" | "Youth";
  coach: string;
  description: string;
}
```

---

## 5. Page Specifications

### 5.1 Homepage (`/`)

- **Hero:** Full-width, 800px height, background image with gradient overlay
  - "LILONGWE'S ELITE" red badge (label-caps)
  - "BRAVEHEARTS BASKETBALL" in display-lg (72px)
  - Two CTAs: "JOIN THE ROSTER" (filled) + "WATCH LIVE" (outline)
  - Floating live scoreboard widget (bottom-right)
- **News Bento Grid:** 12-column asymmetric grid
  - Main story (7 cols, 500px) with image overlay
  - Legacy card (5 cols, primary bg, stats)
  - 3 small cards (4 cols each)
- **Newsletter CTA:** Full-width, email input + subscribe
- **Footer:** Brand, links, social icons

### 5.2 Roster Pages (`/roster/[team]`)

- **Hero:** 400px, team badge, team name (display-lg), description
- **Stats Overview:** 4-col bento (Win Rate, Active Players, Next Match, Metric)
- **Player Grid:** Responsive 1→4 cols
  - PlayerCard: 3:4 photo, jersey number, name, position, stats bar
  - Grayscale → color on hover
- **Optional Roster Table:** Full squad depth (boys, ladies)

### 5.3 Dashboard Overview (`/dashboard`)

- **Header:** Title + Season selector + Export button
- **Bento Grid (12-col):**
  - Player Enrollment (8 cols, bar chart)
  - Next Game Logistics (4 cols, status list)
  - Squad Management (12 cols, table)
  - Quick Controls (4 cols each): Booking, Finance, Broadcast

### 5.4 Dashboard Players (`/dashboard/players`)

- **Table:** Photo, Name, Jersey, Position, Team, Stats, Actions
- **Search + Filter** by team
- **Add/Edit Player Form:** All Player model fields
- **Delete Confirmation** modal

### 5.5 Dashboard Events (`/dashboard/events`)

- **Event Cards Grid:** Poster, title, date, location
- **Add/Edit Event Form:** All Event model fields

### 5.6 Dashboard Games (`/dashboard/games`)

- **Game Cards:** Opponent, date, venue, score, result badge
- **Quick Score Update:** Inline score inputs
- **Add/Edit Game Form:** All Game model fields

### 5.7 Streaming Page (`/streaming`)

- **Full-width embed area:** 16:9 YouTube/Twitch iframe
- **Live scoreboard widget** below stream
- **Side panel:** Team lineups, game stats
- **"LIVE" pulsing indicator**

---

## 6. Mock Data Strategy

All data is mocked in `lib/mock-data.ts` with realistic Bravehearts-specific content:
- Player names from Malawian context
- Venue: Lilongwe, Malawi
- Teams: Ladies, Men, Girls, Boys, Youth
- Stats realistic for Malawian basketball league
- Photos: Use placeholder URLs from existing HTML pages

API functions in `lib/api.ts` simulate async fetch calls with realistic delay (200-500ms).

---

## 7. Technical Constraints

- **Next.js 16.2.10** with App Router
- **React 19.2.4**
- **Tailwind CSS v4** with PostCSS
- **TypeScript** throughout
- No additional UI libraries (pure Tailwind + custom components)
- No state management library (React hooks + Context where needed)
- Responsive design (mobile-first)
- Google Fonts: Montserrat + JetBrains Mono via `next/font`

---

## 8. File Structure

```
frontend/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── roster/
│   │   └── [team]/
│   │       └── page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── players/
│   │   │   └── page.tsx
│   │   ├── events/
│   │   │   └── page.tsx
│   │   └── games/
│   │       └── page.tsx
│   └── streaming/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── TopNavBar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── PlayerCard.tsx
│   │   ├── StatBlock.tsx
│   │   └── Badge.tsx
│   └── dashboard/
│       ├── DashboardTable.tsx
│       ├── PlayerForm.tsx
│       ├── EventForm.tsx
│       └── GameForm.tsx
├── lib/
│   ├── mock-data.ts
│   └── api.ts
├── types/
│   └── index.ts
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## 9. Success Criteria

1. All 6 HTML pages converted to Next.js with unified design system
2. Dashboard CRUD pages functional with mock data
3. Responsive across mobile and desktop
4. All animations and micro-interactions working
5. Consistent typography, colors, and spacing throughout
6. No runtime errors, clean build
7. Streaming page ready for YouTube/Twitch embed
