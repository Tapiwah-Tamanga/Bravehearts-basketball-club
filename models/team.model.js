import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const Team = sequelize.define("Team", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  category: {
    type: DataTypes.ENUM(
      "Men",
      "Boys",
      "Ladies",
      "Girls",
      "Youth"
    ),
    allowNull: false,
  },
  coach: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export default Team;