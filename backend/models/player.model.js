import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const Player = sequelize.define("Player", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  jerseyNumber: {
    type: DataTypes.INTEGER,
  },

  position: {
    type: DataTypes.STRING,
  },

  team: {
    type: DataTypes.ENUM(
      "Ladies",
      "Men",
      "Girls",
      "Boys",
      "Youth"
    ),
    allowNull: false,
  },

  age: {
    type: DataTypes.INTEGER,
  },

  height: {
    type: DataTypes.FLOAT,
  },

  photo: {
    type: DataTypes.STRING,
  },

  marketValue: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },

  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  assists: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  rebounds: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  steals: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  blocks: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  // ponytail: fields the roster/detail UI already reads; TeamId FK (via association) is truth, `team` ENUM kept for compat
  year: {
    type: DataTypes.ENUM("Freshman", "Sophomore", "Junior", "Senior"),
  },
  status: {
    type: DataTypes.ENUM("Starter", "Bench", "Reserve"),
    defaultValue: "Bench",
  },
  threePointPct: {
    type: DataTypes.FLOAT,
  },
  freeThrowPct: {
    type: DataTypes.FLOAT,
  },
  gamesPlayed: {
    type: DataTypes.INTEGER,
    defaultValue: 20,
  },
});

export default Player;