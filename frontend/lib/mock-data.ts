import { Player, Game, Event, Team } from "@/types";

export const teams: Team[] = [
  {
    id: 1,
    name: "Bravehearts Ladies",
    category: "Ladies",
    coach: "Coach M. Banda",
    description:
      "Powered by raw athleticism and strategic brilliance. The Ladies division represents the pinnacle of professional basketball in Malawi.",
  },
  {
    id: 2,
    name: "Bravehearts Men",
    category: "Men",
    coach: "Coach K. Phiri",
    description:
      "The senior elite squad. Defending champions with a legacy of discipline and dominance in the national league.",
  },
  {
    id: 3,
    name: "Bravehearts Girls",
    category: "Girls",
    coach: "Coach A. Mkandawire",
    description:
      "Rising stars of Malawian basketball. The Girls division combines talent development with competitive excellence.",
  },
  {
    id: 4,
    name: "Bravehearts Boys",
    category: "Boys",
    coach: "Coach J. Chanza",
    description:
      "Forging the next generation of Malawian champions. Raw energy, elite discipline, and the heart of a lion.",
  },
  {
    id: 5,
    name: "Bravehearts Youth",
    category: "Youth",
    coach: "Coach Ziba",
    description:
      "The future of Malawi basketball. Our Youth program focuses on fundamental skill acquisition, team camaraderie, and the elite mindset.",
  },
];

export const players: Player[] = [
  // Ladies (using BH images)
  {
    id: 1,
    fullName: "Tiwonge",
    jerseyNumber: 7,
    position: "PG",
    team: "Ladies",
    age: 24,
    height: 173,
    photo: "/BH/BH Player-30.jpg",
    marketValue: 15000,
    points: 448,
    assists: 162,
    rebounds: 68,
    steals: 45,
    blocks: 12,
  },
  {
    id: 2,
    fullName: "Lumbani",
    jerseyNumber: 15,
    position: "C",
    team: "Ladies",
    age: 26,
    height: 191,
    photo: "/BH/BH Player-31.jpg",
    marketValue: 18000,
    points: 284,
    assists: 42,
    rebounds: 284,
    steals: 28,
    blocks: 70,
  },
  {
    id: 3,
    fullName: "Zuwena",
    jerseyNumber: 23,
    position: "SF",
    team: "Ladies",
    age: 22,
    height: 178,
    photo: "/BH/BH Player-32.jpg",
    marketValue: 12000,
    points: 396,
    assists: 78,
    rebounds: 156,
    steals: 52,
    blocks: 24,
  },
  // Men (using mens team images)
  {
    id: 4,
    fullName: "Uchizi",
    jerseyNumber: 10,
    position: "PG",
    team: "Men",
    age: 28,
    height: 183,
    photo: "/teams/mens/Uchizi.jpeg",
    marketValue: 25000,
    points: 520,
    assists: 198,
    rebounds: 82,
    steals: 64,
    blocks: 18,
  },
  {
    id: 5,
    fullName: "Mannelo",
    jerseyNumber: 23,
    position: "C",
    team: "Men",
    age: 30,
    height: 208,
    photo: "/teams/mens/mannelo.jpeg",
    marketValue: 30000,
    points: 380,
    assists: 54,
    rebounds: 412,
    steals: 32,
    blocks: 96,
  },
  {
    id: 6,
    fullName: "Fadd",
    jerseyNumber: 5,
    position: "SF",
    team: "Men",
    age: 25,
    height: 198,
    photo: "/teams/mens/Fadd.jpeg",
    marketValue: 20000,
    points: 412,
    assists: 88,
    rebounds: 196,
    steals: 56,
    blocks: 28,
  },
  // Girls
  {
    id: 7,
    fullName: "Winnie",
    jerseyNumber: 4,
    position: "PG",
    team: "Girls",
    age: 17,
    height: 173,
    photo: "/teams/girls/winnie.jpeg",
    marketValue: 5000,
    points: 368,
    assists: 124,
    rebounds: 52,
    steals: 68,
    blocks: 8,
    year: "Junior",
    status: "Starter",
    threePointPct: 36.8,
    freeThrowPct: 85.2,
  },
  {
    id: 8,
    fullName: "Clara",
    jerseyNumber: 11,
    position: "SF",
    team: "Girls",
    age: 18,
    height: 183,
    photo: "/teams/girls/clara.jpeg",
    marketValue: 6000,
    points: 274,
    assists: 62,
    rebounds: 188,
    steals: 42,
    blocks: 32,
    year: "Senior",
    status: "Starter",
    threePointPct: 31.5,
    freeThrowPct: 78.9,
  },
  // {
  //   id: 9,
  //   fullName: "Tionge",
  //   jerseyNumber: 22,
  //   position: "SG",
  //   team: "Girls",
  //   age: 16,
  //   height: 175,
  //   photo: "/BH/BH Player-40.jpg",
  //   marketValue: 4000,
  //   points: 236,
  //   assists: 84,
  //   rebounds: 62,
  //   steals: 58,
  //   blocks: 14,
  //   year: "Sophomore",
  //   status: "Bench",
  //   threePointPct: 33.2,
  //   freeThrowPct: 80.5,
  // },
  // {
  //   id: 18,
  //   fullName: "Nelia",
  //   jerseyNumber: 8,
  //   position: "C",
  //   team: "Girls",
  //   age: 18,
  //   height: 191,
  //   photo: "/BH/BH Player-41.jpg",
  //   marketValue: 7000,
  //   points: 258,
  //   assists: 36,
  //   rebounds: 296,
  //   steals: 24,
  //   blocks: 62,
  //   year: "Sophomore",
  //   status: "Starter",
  //   threePointPct: 24.0,
  //   freeThrowPct: 72.8,
  // },
  // Boys
  {
    id: 10,
    fullName: "Spencer",
    jerseyNumber: 23,
    position: "PG",
    team: "Boys",
    age: 16,
    height: 185,
    photo: "/teams/boys/spencer.jpeg",
    marketValue: 8000,
    points: 294,
    assists: 108,
    rebounds: 68,
    steals: 52,
    blocks: 14,
    year: "Sophomore",
    status: "Starter",
    threePointPct: 38.5,
    freeThrowPct: 82.1,
  },
  // {
  //   id: 11,
  //   fullName: "Chikondi",
  //   jerseyNumber: 5,
  //   position: "SF",
  //   team: "Boys",
  //   age: 17,
  //   height: 196,
  //   photo: "/BH/BH Player-33.jpg",
  //   marketValue: 7000,
  //   points: 212,
  //   assists: 54,
  //   rebounds: 134,
  //   steals: 38,
  //   blocks: 32,
  //   year: "Junior",
  //   status: "Starter",
  //   threePointPct: 34.2,
  //   freeThrowPct: 75.8,
  // },
  // {
  //   id: 12,
  //   fullName: "Tiyese",
  //   jerseyNumber: 11,
  //   position: "C",
  //   team: "Boys",
  //   age: 18,
  //   height: 208,
  //   photo: "/BH/BH Player-34.jpg",
  //   marketValue: 9000,
  //   points: 188,
  //   assists: 32,
  //   rebounds: 200,
  //   steals: 24,
  //   blocks: 54,
  //   year: "Senior",
  //   status: "Starter",
  //   threePointPct: 28.5,
  //   freeThrowPct: 68.2,
  // },
  // {
  //   id: 16,
  //   fullName: "Mwai",
  //   jerseyNumber: 45,
  //   position: "SG",
  //   team: "Boys",
  //   age: 17,
  //   height: 183,
  //   photo: "/BH/BH Player-35.jpg",
  //   marketValue: 8500,
  //   points: 324,
  //   assists: 84,
  //   rebounds: 92,
  //   steals: 48,
  //   blocks: 18,
  //   year: "Sophomore",
  //   status: "Starter",
  //   threePointPct: 42.1,
  //   freeThrowPct: 88.5,
  // },
  // {
  //   id: 17,
  //   fullName: "Kondwani",
  //   jerseyNumber: 2,
  //   position: "PF",
  //   team: "Boys",
  //   age: 16,
  //   height: 201,
  //   photo: "/BH/BH Player-36.jpg",
  //   marketValue: 6500,
  //   points: 156,
  //   assists: 28,
  //   rebounds: 142,
  //   steals: 22,
  //   blocks: 38,
  //   year: "Freshman",
  //   status: "Bench",
  //   threePointPct: 22.0,
  //   freeThrowPct: 71.5,
  // },
  // Youth
  {
    id: 13,
    fullName: "Luka",
    jerseyNumber: 8,
    position: "PG",
    team: "Youth",
    age: 13,
    height: 162,
    photo: "/BH/BH Player-37.jpg",
    marketValue: 2000,
    points: 142,
    assists: 68,
    rebounds: 58,
    steals: 42,
    blocks: 8,
  },
  {
    id: 14,
    fullName: "Chimwemwe",
    jerseyNumber: 23,
    position: "SG",
    team: "Youth",
    age: 12,
    height: 158,
    photo: "/BH/BH Player-38.jpg",
    marketValue: 1500,
    points: 185,
    assists: 42,
    rebounds: 32,
    steals: 56,
    blocks: 6,
  },
  {
    id: 15,
    fullName: "Blessings",
    jerseyNumber: 5,
    position: "C",
    team: "Youth",
    age: 14,
    height: 175,
    photo: "/BH/BH Player-39.jpg",
    marketValue: 2500,
    points: 98,
    assists: 28,
    rebounds: 114,
    steals: 32,
    blocks: 24,
  },
];

export const games: Game[] = [
  {
    id: 1,
    opponent: "Tigers BC",
    gameDate: "2026-07-20T18:00:00",
    venue: "Lilongwe Community Centre",
    scoreFor: 84,
    scoreAgainst: 79,
    result: "WIN",
  },
  {
    id: 2,
    opponent: "Giants BC",
    gameDate: "2026-07-15T19:00:00",
    venue: "Blantyre Sports Hall",
    scoreFor: 72,
    scoreAgainst: 78,
    result: "LOSS",
  },
  {
    id: 3,
    opponent: "Phoenix Basketball",
    gameDate: "2026-07-10T17:00:00",
    venue: "Lilongwe Community Centre",
    scoreFor: 91,
    scoreAgainst: 68,
    result: "WIN",
  },
  {
    id: 4,
    opponent: "Mighty Warriors",
    gameDate: "2026-07-05T18:30:00",
    venue: "Mzuzu Arena",
    scoreFor: 88,
    scoreAgainst: 82,
    result: "WIN",
  },
  {
    id: 5,
    opponent: "City Bulls",
    gameDate: "2026-06-28T19:00:00",
    venue: "Lilongwe Community Centre",
    scoreFor: 76,
    scoreAgainst: 76,
    result: "DRAW",
  },
  {
    id: 6,
    opponent: "Blantyre Giants",
    gameDate: "2026-06-20T18:00:00",
    venue: "Blantyre Sports Hall",
    scoreFor: 95,
    scoreAgainst: 81,
    result: "WIN",
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: "National Championship Finals",
    description:
      "Bravehearts defend their title against the best teams in Malawi. Come witness history in the making.",
    location: "Lilongwe Community Centre",
    eventDate: "2026-08-15T18:00:00",
    poster: "/BH/BH Player-24.jpg",
  },
  {
    id: 2,
    title: "Youth Development Camp",
    description:
      "Two-week intensive training camp for aspiring young basketball players aged 10-16.",
    location: "Area 18 Sports Complex",
    eventDate: "2026-08-01T09:00:00",
    poster: "/BH/BH Player-25.jpg",
  },
  {
    id: 3,
    title: "Community Basketball Clinic",
    description:
      "Free weekend basketball clinic for kids in Area 18. All skill levels welcome.",
    location: "Area 18 Open Court",
    eventDate: "2026-07-26T08:00:00",
    poster: "/BH/BH Player-26.jpg",
  },
  {
    id: 4,
    title: "Season Opening Gala",
    description:
      "Join us for the official 2026 season launch event. Meet the players, coaches, and staff.",
    location: "Continental Hotel Lilongwe",
    eventDate: "2026-09-01T19:00:00",
    poster: "/BH/BH Player-27.jpg",
  },
];

export function getPlayersByTeam(team: string): Player[] {
  return players.filter(
    (p) => p.team.toLowerCase() === team.toLowerCase()
  );
}

export function getPlayerById(id: number): Player | undefined {
  return players.find((p) => p.id === id);
}

export function getTeamByCategory(category: string): Team | undefined {
  return teams.find((t) => t.category.toLowerCase() === category.toLowerCase());
}

export function getUpcomingGames(): Game[] {
  const now = new Date();
  return games
    .filter((g) => new Date(g.gameDate) > now)
    .sort(
      (a, b) =>
        new Date(a.gameDate).getTime() - new Date(b.gameDate).getTime()
    );
}

export function getRecentGames(): Game[] {
  const now = new Date();
  return games
    .filter((g) => new Date(g.gameDate) <= now)
    .sort(
      (a, b) =>
        new Date(b.gameDate).getTime() - new Date(a.gameDate).getTime()
    );
}

export function getWinRate(): number {
  const total = games.length;
  const wins = games.filter((g) => g.result === "WIN").length;
  return Math.round((wins / total) * 100);
}

export function getTotalPlayers(): number {
  return players.length;
}

export function getPlayersByTeamCount(team: string): number {
  return players.filter(
    (p) => p.team.toLowerCase() === team.toLowerCase()
  ).length;
}

export function getTeamMetrics(team: string) {
  const teamPlayers = getPlayersByTeam(team);
  const totalPoints = teamPlayers.reduce((sum, p) => sum + p.points, 0);
  const totalRebounds = teamPlayers.reduce((sum, p) => sum + p.rebounds, 0);
  const totalAssists = teamPlayers.reduce((sum, p) => sum + p.assists, 0);
  const gamesPlayed = 20;

  return {
    pointsPerGame: (totalPoints / gamesPlayed).toFixed(1),
    teamRebounds: (totalRebounds / gamesPlayed).toFixed(1),
    avgAssistRate: (totalAssists / gamesPlayed).toFixed(1),
  };
}

export function getTrainingStats(team: string) {
  const stats: Record<string, { winRate: number; trainingHours: number; totalPoints: number; offensiveRating: number; defensiveRating: number }> = {
    ladies: { winRate: 88, trainingHours: 480, totalPoints: 1420, offensiveRating: 112.4, defensiveRating: 94.8 },
    men: { winRate: 85, trainingHours: 520, totalPoints: 1380, offensiveRating: 108.6, defensiveRating: 96.2 },
    girls: { winRate: 82, trainingHours: 360, totalPoints: 1180, offensiveRating: 102.3, defensiveRating: 98.5 },
    boys: { winRate: 80, trainingHours: 340, totalPoints: 1120, offensiveRating: 98.7, defensiveRating: 101.2 },
    youth: { winRate: 75, trainingHours: 280, totalPoints: 960, offensiveRating: 92.4, defensiveRating: 104.8 },
  };
  return stats[team.toLowerCase()] || stats.youth;
}
