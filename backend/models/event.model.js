import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const Event = sequelize.define("Event", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  location: {
    type: DataTypes.STRING,
  },
  eventDate: {
    type: DataTypes.DATE,
  },
  poster: {
    type: DataTypes.STRING,
  },
});

export default Event;