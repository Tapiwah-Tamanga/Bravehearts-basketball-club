export type TeamCategory = "Ladies" | "Men" | "Girls" | "Boys" | "Youth";

export type GameResult = "WIN" | "LOSS" | "DRAW";

export type Position = "PG" | "SG" | "SF" | "PF" | "C";

export type PlayerStatus = "Starter" | "Bench" | "Reserve";

export type PlayerYear = "Freshman" | "Sophomore" | "Junior" | "Senior";

export interface Player {
  id: number;
  fullName: string;
  jerseyNumber: number;
  position: Position;
  team: TeamCategory;
  age: number;
  height: number;
  photo: string;
  marketValue: number;
  points: number;
  assists: number;
  rebounds: number;
  steals: number;
  blocks: number;
  year?: PlayerYear;
  status?: PlayerStatus;
  threePointPct?: number;
  freeThrowPct?: number;
  gamesPlayed?: number; // ponytail: replaces hardcoded /20 divisor
}

export interface Game {
  id: number;
  opponent: string;
  gameDate: string;
  venue: string;
  scoreFor: number;
  scoreAgainst: number;
  result: GameResult;
  // ponytail: mirrors backend live/ticketing fields; all optional until live
  season?: string;
  status?: "upcoming" | "live" | "finished";
  quarter?: string;
  clock?: string;
  q1?: number;
  q2?: number;
  q3?: number;
  q4?: number;
  fouls?: number;
  timeouts?: number;
  fgPct?: number;
  threePct?: number;
  ftPct?: number;
  turnovers?: number;
  streamUrl?: string;
  isLive?: boolean;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;
  poster: string;
}

export interface Team {
  id: number;
  name: string;
  category: TeamCategory;
  coach: string;
  description: string;
  icon?: string;
  color?: string;
  groupPhoto?: string;
  badge?: string;
  status?: "Active" | "Inactive";
}

export interface PlayerStats {
  ppg: number;
  rpg: number;
  apg: number;
  spg: number;
  bpg: number;
}
