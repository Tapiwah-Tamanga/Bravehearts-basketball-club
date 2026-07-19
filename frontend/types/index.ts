export type TeamCategory = "Ladies" | "Men" | "Girls" | "Boys" | "Youth";

export type GameResult = "WIN" | "LOSS" | "DRAW";

export type Position = "PG" | "SG" | "SF" | "PF" | "C";

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
}

export interface Game {
  id: number;
  opponent: string;
  gameDate: string;
  venue: string;
  scoreFor: number;
  scoreAgainst: number;
  result: GameResult;
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
}

export interface PlayerStats {
  ppg: number;
  rpg: number;
  apg: number;
  spg: number;
  bpg: number;
}
