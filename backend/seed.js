// ponytail: one seed from frontend mock-data — idempotent via findOrCreate on unique fields, run: node seed.js
import { sequelize, Team, Player, Game, Event, TicketTier, Booking, Product } from "./models/index.js";

const teams = [
  { name: "Bravehearts Ladies", category: "Ladies", coach: "Coach M. Banda", icon: "groups", color: "#d4a017", groupPhoto: "/teams/ladies/group photo.jpg", badge: "Elite Division", description: "Powered by raw athleticism and strategic brilliance. The Ladies division represents the pinnacle of professional basketball in Malawi." },
  { name: "Bravehearts Men", category: "Men", coach: "Coach K. Phiri", icon: "sports_basketball", color: "#a30019", groupPhoto: "/teams/mens/group photo.jpg", badge: "Elite Division", description: "The senior elite squad. Defending champions with a legacy of discipline and dominance in the national league." },
  { name: "Bravehearts Girls", category: "Girls", coach: "Coach A. Mkandawire", icon: "female", color: "#0891b2", groupPhoto: "/teams/girls/group photo.jpg", badge: "Youth Academy", description: "Rising stars of Malawian basketball. The Girls division combines talent development with competitive excellence." },
  { name: "Bravehearts Boys", category: "Boys", coach: "Coach J. Chanza", icon: "boy", color: "#1d4ed8", groupPhoto: "/teams/boys/group photo.jpg", badge: "Youth Academy", description: "Forging the next generation of Malawian champions. Raw energy, elite discipline, and the heart of a lion." },
  { name: "Bravehearts Youth", category: "Youth", coach: "Coach Ziba", icon: "child_care", color: "#16a34a", groupPhoto: "/teams/girls/group photo.jpg", badge: "Youth Academy", description: "The future of Malawi basketball. Our Youth program focuses on fundamental skill acquisition, team camaraderie, and the elite mindset." },
];

const players = [
  { fullName: "Emma", jerseyNumber: 7, position: "PG", team: "Ladies", age: 24, height: 173, photo: "/teams/ladies/emma-sampuloo.jpg", marketValue: 15000, points: 448, assists: 162, rebounds: 68, steals: 45, blocks: 12 },
  { fullName: "Favour", jerseyNumber: 15, position: "C", team: "Ladies", age: 26, height: 191, photo: "/teams/ladies/favour-anari.jpg", marketValue: 18000, points: 284, assists: 42, rebounds: 284, steals: 28, blocks: 70 },
  { fullName: "Mwayi", jerseyNumber: 23, position: "SF", team: "Ladies", age: 22, height: 178, photo: "/teams/ladies/mwayi.jpg", marketValue: 12000, points: 396, assists: 78, rebounds: 156, steals: 52, blocks: 24 },
  { fullName: "Susana", jerseyNumber: 10, position: "SG", team: "Ladies", age: 23, height: 175, photo: "/teams/ladies/susana-sampuloo.jpg", marketValue: 14000, points: 412, assists: 98, rebounds: 72, steals: 51, blocks: 15 },
  { fullName: "Tamandani", jerseyNumber: 12, position: "PF", team: "Ladies", age: 25, height: 185, photo: "/teams/ladies/Tamandani-mazula.jpg", marketValue: 16000, points: 356, assists: 64, rebounds: 198, steals: 34, blocks: 42 },
  { fullName: "Tania", jerseyNumber: 14, position: "SF", team: "Ladies", age: 21, height: 177, photo: "/teams/ladies/tania sampulo.jpg", marketValue: 11000, points: 378, assists: 82, rebounds: 142, steals: 48, blocks: 18 },
  { fullName: "Wezi", jerseyNumber: 20, position: "PG", team: "Ladies", age: 22, height: 170, photo: "/teams/ladies/wezi-munthali.jpg", marketValue: 13000, points: 432, assists: 156, rebounds: 54, steals: 62, blocks: 8 },
  { fullName: "Oreen", jerseyNumber: 25, position: "C", team: "Ladies", age: 27, height: 193, photo: "/teams/ladies/oreen.jpg", marketValue: 19000, points: 298, assists: 48, rebounds: 312, steals: 26, blocks: 78 },
  { fullName: "Uchizi", jerseyNumber: 10, position: "PG", team: "Men", age: 28, height: 183, photo: "/teams/mens/uchizi-mwale.jpg", marketValue: 25000, points: 520, assists: 198, rebounds: 82, steals: 64, blocks: 18 },
  { fullName: "Mannelo", jerseyNumber: 23, position: "C", team: "Men", age: 30, height: 208, photo: "/teams/mens/manello muthali.jpg", marketValue: 30000, points: 380, assists: 54, rebounds: 412, steals: 32, blocks: 96 },
  { fullName: "Faddi", jerseyNumber: 5, position: "SF", team: "Men", age: 25, height: 198, photo: "/teams/mens/faddi billy.jpg", marketValue: 20000, points: 412, assists: 88, rebounds: 196, steals: 56, blocks: 28 },
  { fullName: "Lambart", jerseyNumber: 3, position: "SG", team: "Men", age: 27, height: 190, photo: "/teams/mens/lambart-ettiene.jpg", marketValue: 22000, points: 468, assists: 112, rebounds: 124, steals: 58, blocks: 22 },
  { fullName: "Henry", jerseyNumber: 8, position: "PF", team: "Men", age: 29, height: 202, photo: "/teams/mens/henrly.jpg", marketValue: 24000, points: 356, assists: 68, rebounds: 378, steals: 38, blocks: 84 },
  { fullName: "Masiyano", jerseyNumber: 15, position: "SF", team: "Men", age: 26, height: 195, photo: "/teams/mens/masiyano.jpg", marketValue: 21000, points: 398, assists: 92, rebounds: 168, steals: 52, blocks: 32 },
  { fullName: "Kadiwah", jerseyNumber: 22, position: "PG", team: "Men", age: 24, height: 182, photo: "/teams/mens/kadiwah.jpg", marketValue: 18000, points: 486, assists: 178, rebounds: 72, steals: 68, blocks: 14 },
  { fullName: "Vin", jerseyNumber: 33, position: "C", team: "Men", age: 31, height: 210, photo: "/teams/mens/vin masiyano.jpg", marketValue: 28000, points: 342, assists: 48, rebounds: 428, steals: 28, blocks: 102 },
  { fullName: "Annie", jerseyNumber: 4, position: "PG", team: "Girls", age: 17, height: 173, photo: "/teams/girls/anniemellie-sadick.jpg", marketValue: 5000, points: 368, assists: 124, rebounds: 52, steals: 68, blocks: 8, year: "Junior", status: "Starter", threePointPct: 36.8, freeThrowPct: 85.2 },
  { fullName: "Chanju", jerseyNumber: 11, position: "SF", team: "Girls", age: 18, height: 183, photo: "/teams/girls/chanju-thunyani.jpg", marketValue: 6000, points: 274, assists: 62, rebounds: 188, steals: 42, blocks: 32, year: "Senior", status: "Starter", threePointPct: 31.5, freeThrowPct: 78.9 },
  { fullName: "Clara", jerseyNumber: 22, position: "SG", team: "Girls", age: 16, height: 175, photo: "/teams/girls/clara-botoman.jpg", marketValue: 4000, points: 236, assists: 84, rebounds: 62, steals: 58, blocks: 14, year: "Sophomore", status: "Bench", threePointPct: 33.2, freeThrowPct: 80.5 },
  { fullName: "Winnie", jerseyNumber: 8, position: "C", team: "Girls", age: 18, height: 191, photo: "/teams/girls/winnie-manyozo.jpg", marketValue: 7000, points: 258, assists: 36, rebounds: 296, steals: 24, blocks: 62, year: "Sophomore", status: "Starter", threePointPct: 24.0, freeThrowPct: 72.8 },
  { fullName: "Chimwemwe", jerseyNumber: 14, position: "PF", team: "Girls", age: 17, height: 180, photo: "/teams/girls/chimwemwe ackim.jpg", marketValue: 5500, points: 298, assists: 72, rebounds: 178, steals: 44, blocks: 28, year: "Junior", status: "Starter", threePointPct: 28.5, freeThrowPct: 76.2 },
  { fullName: "Comfort", jerseyNumber: 16, position: "SG", team: "Girls", age: 16, height: 174, photo: "/teams/girls/comfort-kaisi.jpg", marketValue: 4200, points: 256, assists: 88, rebounds: 58, steals: 62, blocks: 10, year: "Sophomore", status: "Bench", threePointPct: 35.8, freeThrowPct: 82.4 },
  { fullName: "Desire", jerseyNumber: 18, position: "SF", team: "Girls", age: 17, height: 178, photo: "/teams/girls/desire-kaunda.jpg", marketValue: 5200, points: 284, assists: 68, rebounds: 142, steals: 48, blocks: 22, year: "Junior", status: "Bench", threePointPct: 30.2, freeThrowPct: 78.5 },
  { fullName: "Dorica", jerseyNumber: 20, position: "PG", team: "Girls", age: 15, height: 168, photo: "/teams/girls/dorica-katenje.jpg", marketValue: 3800, points: 312, assists: 142, rebounds: 48, steals: 72, blocks: 6, year: "Freshman", status: "Bench", threePointPct: 38.2, freeThrowPct: 86.8 },
  { fullName: "Faith", jerseyNumber: 24, position: "C", team: "Girls", age: 18, height: 188, photo: "/teams/girls/faith-zalanje.jpg", marketValue: 6200, points: 242, assists: 32, rebounds: 268, steals: 22, blocks: 58, year: "Senior", status: "Starter", threePointPct: 22.5, freeThrowPct: 70.2 },
  { fullName: "Rabecca", jerseyNumber: 26, position: "PF", team: "Girls", age: 17, height: 182, photo: "/teams/girls/rabecca-sinkonde.jpg", marketValue: 5800, points: 276, assists: 58, rebounds: 192, steals: 36, blocks: 38, year: "Junior", status: "Starter", threePointPct: 26.8, freeThrowPct: 74.5 },
  { fullName: "Spencer", jerseyNumber: 23, position: "PG", team: "Boys", age: 16, height: 185, photo: "/teams/boys/spencer.jpeg", marketValue: 8000, points: 294, assists: 108, rebounds: 68, steals: 52, blocks: 14, year: "Sophomore", status: "Starter", threePointPct: 38.5, freeThrowPct: 82.1 },
  { fullName: "Chikondi Jr", jerseyNumber: 5, position: "SF", team: "Boys", age: 17, height: 196, photo: "/teams/boys/BH Player-93.jpg", marketValue: 7000, points: 212, assists: 54, rebounds: 134, steals: 38, blocks: 32, year: "Junior", status: "Starter", threePointPct: 34.2, freeThrowPct: 75.8 },
  { fullName: "Tiyese Jr", jerseyNumber: 11, position: "C", team: "Boys", age: 18, height: 208, photo: "/teams/boys/BH Player-94.jpg", marketValue: 9000, points: 188, assists: 32, rebounds: 200, steals: 24, blocks: 54, year: "Senior", status: "Starter", threePointPct: 28.5, freeThrowPct: 68.2 },
  { fullName: "Kondwani Jr", jerseyNumber: 2, position: "PF", team: "Boys", age: 16, height: 201, photo: "/teams/boys/BH Player-95.jpg", marketValue: 6500, points: 156, assists: 28, rebounds: 142, steals: 22, blocks: 38, year: "Freshman", status: "Bench", threePointPct: 22.0, freeThrowPct: 71.5 },
  { fullName: "Dalitso", jerseyNumber: 3, position: "SG", team: "Boys", age: 15, height: 180, photo: "/teams/boys/BH Player-96.jpg", marketValue: 5500, points: 278, assists: 92, rebounds: 58, steals: 48, blocks: 10, year: "Freshman", status: "Bench", threePointPct: 36.8, freeThrowPct: 79.5 },
  { fullName: "Mphatso", jerseyNumber: 7, position: "PG", team: "Boys", age: 16, height: 182, photo: "/teams/boys/BH Player-97.jpg", marketValue: 6200, points: 312, assists: 124, rebounds: 52, steals: 56, blocks: 8, year: "Sophomore", status: "Bench", threePointPct: 35.2, freeThrowPct: 81.8 },
  { fullName: "Yamikani", jerseyNumber: 9, position: "SF", team: "Boys", age: 17, height: 192, photo: "/teams/boys/BH Player-98.jpg", marketValue: 7200, points: 246, assists: 68, rebounds: 148, steals: 42, blocks: 26, year: "Junior", status: "Bench", threePointPct: 32.5, freeThrowPct: 76.2 },
  { fullName: "Pemphero", jerseyNumber: 13, position: "C", team: "Boys", age: 18, height: 205, photo: "/teams/boys/BH Player-99.jpg", marketValue: 8500, points: 198, assists: 28, rebounds: 218, steals: 20, blocks: 48, year: "Senior", status: "Bench", threePointPct: 25.8, freeThrowPct: 65.5 },
  { fullName: "Tawonga", jerseyNumber: 15, position: "PF", team: "Boys", age: 17, height: 198, photo: "/teams/boys/BH Player-100.jpg", marketValue: 7800, points: 224, assists: 48, rebounds: 186, steals: 32, blocks: 42, year: "Junior", status: "Bench", threePointPct: 28.2, freeThrowPct: 72.8 },
  { fullName: "Clara (Youth)", jerseyNumber: 8, position: "PG", team: "Youth", age: 13, height: 162, photo: "/teams/girls/clara-botoman.jpg", marketValue: 2000, points: 142, assists: 68, rebounds: 58, steals: 42, blocks: 8 },
  { fullName: "Winnie (Youth)", jerseyNumber: 23, position: "SG", team: "Youth", age: 12, height: 158, photo: "/teams/girls/winnie-manyozo.jpg", marketValue: 1500, points: 185, assists: 42, rebounds: 32, steals: 56, blocks: 6 },
  { fullName: "Tadiwah", jerseyNumber: 5, position: "C", team: "Youth", age: 14, height: 175, photo: "/teams/girls/tadiwashe.jpg", marketValue: 2500, points: 98, assists: 28, rebounds: 114, steals: 32, blocks: 24 },
  { fullName: "Annie (Youth)", jerseyNumber: 10, position: "SF", team: "Youth", age: 13, height: 165, photo: "/teams/girls/anniemellie-sadick.jpg", marketValue: 1800, points: 168, assists: 54, rebounds: 72, steals: 48, blocks: 12 },
  { fullName: "Chanju (Youth)", jerseyNumber: 12, position: "PG", team: "Youth", age: 12, height: 155, photo: "/teams/girls/chanju-thunyani.jpg", marketValue: 1200, points: 198, assists: 78, rebounds: 28, steals: 62, blocks: 4 },
  { fullName: "Chimwemwe (Youth)", jerseyNumber: 14, position: "PF", team: "Youth", age: 14, height: 172, photo: "/teams/girls/chimwemwe ackim.jpg", marketValue: 2200, points: 156, assists: 36, rebounds: 128, steals: 28, blocks: 18 },
  { fullName: "Comfort (Youth)", jerseyNumber: 16, position: "SG", team: "Youth", age: 13, height: 160, photo: "/teams/girls/comfort-kaisi.jpg", marketValue: 1600, points: 178, assists: 62, rebounds: 42, steals: 52, blocks: 8 },
  { fullName: "Desire (Youth)", jerseyNumber: 18, position: "SF", team: "Youth", age: 14, height: 168, photo: "/teams/girls/desire-kaunda.jpg", marketValue: 2000, points: 162, assists: 48, rebounds: 88, steals: 42, blocks: 14 },
  { fullName: "Dorica (Youth)", jerseyNumber: 20, position: "PG", team: "Youth", age: 12, height: 152, photo: "/teams/girls/dorica-katenje.jpg", marketValue: 1100, points: 212, assists: 92, rebounds: 24, steals: 68, blocks: 2 },
  { fullName: "Faith (Youth)", jerseyNumber: 22, position: "C", team: "Youth", age: 14, height: 178, photo: "/teams/girls/faith-zalanje.jpg", marketValue: 2800, points: 134, assists: 22, rebounds: 148, steals: 18, blocks: 32 },
];

const games = [
  { opponent: "Tigers BC", gameDate: new Date("2026-07-20T18:00:00"), venue: "Lilongwe Community Centre", scoreFor: 84, scoreAgainst: 79, result: "WIN", status: "live", isLive: true, quarter: "Q3", clock: "04:12", q1: 22, q2: 28, q3: 18, fouls: 14, timeouts: 3, fgPct: 48.2, threePct: 36.7, ftPct: 82.1, turnovers: 8 },
  { opponent: "Giants BC", gameDate: new Date("2026-07-15T19:00:00"), venue: "Blantyre Sports Hall", scoreFor: 72, scoreAgainst: 78, result: "LOSS", status: "finished" },
  { opponent: "Phoenix Basketball", gameDate: new Date("2026-07-10T17:00:00"), venue: "Lilongwe Community Centre", scoreFor: 91, scoreAgainst: 68, result: "WIN", status: "finished" },
  { opponent: "Mighty Warriors", gameDate: new Date("2026-07-05T18:30:00"), venue: "Mzuzu Arena", scoreFor: 88, scoreAgainst: 82, result: "WIN", status: "finished" },
  { opponent: "City Bulls", gameDate: new Date("2026-06-28T19:00:00"), venue: "Lilongwe Community Centre", scoreFor: 76, scoreAgainst: 76, result: "DRAW", status: "finished" },
  { opponent: "Blantyre Giants", gameDate: new Date("2026-06-20T18:00:00"), venue: "Blantyre Sports Hall", scoreFor: 95, scoreAgainst: 81, result: "WIN", status: "finished" },
];

const events = [
  { title: "National Championship Finals", description: "Bravehearts defend their title against the best teams in Malawi. Come witness history in the making.", location: "Lilongwe Community Centre", eventDate: new Date("2026-08-15T18:00:00"), poster: "/teams/mens/group photo.jpg" },
  { title: "Youth Development Camp", description: "Two-week intensive training camp for aspiring young basketball players aged 10-16.", location: "Area 18 Sports Complex", eventDate: new Date("2026-08-01T09:00:00"), poster: "/teams/girls/group photo.jpg" },
  { title: "Community Basketball Clinic", description: "Free weekend basketball clinic for kids in Area 18. All skill levels welcome.", location: "Area 18 Open Court", eventDate: new Date("2026-07-26T08:00:00"), poster: "/teams/ladies/group photo.jpg" },
  { title: "Season Opening Gala", description: "Join us for the official 2026 season launch event. Meet the players, coaches, and staff.", location: "Continental Hotel Lilongwe", eventDate: new Date("2026-09-01T19:00:00"), poster: "/teams/ladies/group photo 2.jpg" },
];

const seed = async () => {
  await sequelize.sync({ alter: true });
  const teamIds = {};
  for (const t of teams) {
    const [row] = await Team.findOrCreate({ where: { name: t.name }, defaults: t });
    teamIds[t.category] = row.id;
  }
  for (const p of players) {
    await Player.findOrCreate({ where: { fullName: p.fullName, team: p.team }, defaults: { ...p, TeamId: teamIds[p.team] } });
  }
  const menId = teamIds["Men"];
  for (const g of games) {
    const [row] = await Game.findOrCreate({ where: { opponent: g.opponent, gameDate: g.gameDate }, defaults: { ...g, TeamId: menId } });
    await TicketTier.findOrCreate({ where: { name: "Standard", GameId: row.id }, defaults: { name: "Standard", description: "General seating", price: 5000, capacity: 500, GameId: row.id } });
    await TicketTier.findOrCreate({ where: { name: "Premium", GameId: row.id }, defaults: { name: "Premium", description: "Courtside access", price: 15000, capacity: 100, GameId: row.id } });
  }
  for (const e of events) {
    await Event.findOrCreate({ where: { title: e.title }, defaults: e });
  }
  await Booking.findOrCreate({ where: { title: "Morning Drill" }, defaults: { title: "Morning Drill", time: "8:00 AM - 10:00 AM", capacity: 20, status: "Available" } });
  await Booking.findOrCreate({ where: { title: "Scrimmage" }, defaults: { title: "Scrimmage", time: "4:00 PM - 6:00 PM", capacity: 20, status: "Full" } });
  await Product.findOrCreate({ where: { name: "Flame of Malawi Jersey" }, defaults: { name: "Flame of Malawi Jersey", price: 25000, image: "/teams/mens/group photo.jpg", stock: 100 } });
  const counts = { teams: await Team.count(), players: await Player.count(), games: await Game.count(), events: await Event.count(), tiers: await TicketTier.count(), bookings: await Booking.count(), products: await Product.count() };
  console.log("SEED_OK", JSON.stringify(counts));
  await sequelize.close();
};

seed().catch((e) => { console.error("SEED_FAIL", e.message); process.exit(1); });
