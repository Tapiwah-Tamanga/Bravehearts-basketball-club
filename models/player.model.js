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

});

export default Player;