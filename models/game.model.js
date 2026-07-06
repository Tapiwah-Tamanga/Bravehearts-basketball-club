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
});

export default Game;