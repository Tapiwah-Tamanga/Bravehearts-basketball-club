import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const Game = sequelize.define("Game", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  opponent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gameDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  venue: {
    type: DataTypes.STRING,
  },
  scoreFor: {
    type: DataTypes.INTEGER,
  },
  scoreAgainst: {
    type: DataTypes.INTEGER,
  },
  result: {
    type: DataTypes.ENUM("WIN", "LOSS", "DRAW"),
  },
  // ponytail: live/ticketing UI fields; null until game goes live
  season: {
    type: DataTypes.STRING,
    defaultValue: "2026",
  },
  status: {
    type: DataTypes.ENUM("upcoming", "live", "finished"),
    defaultValue: "upcoming",
  },
  quarter: {
    type: DataTypes.STRING,
  },
  clock: {
    type: DataTypes.STRING,
  },
  q1: { type: DataTypes.INTEGER },
  q2: { type: DataTypes.INTEGER },
  q3: { type: DataTypes.INTEGER },
  q4: { type: DataTypes.INTEGER },
  fouls: { type: DataTypes.INTEGER },
  timeouts: { type: DataTypes.INTEGER },
  fgPct: { type: DataTypes.FLOAT },
  threePct: { type: DataTypes.FLOAT },
  ftPct: { type: DataTypes.FLOAT },
  turnovers: { type: DataTypes.INTEGER },
  streamUrl: { type: DataTypes.STRING },
  isLive: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Game;