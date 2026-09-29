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
  // ponytail: display-only fields the nav/roster UI already renders
  icon: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  groupPhoto: {
    type: DataTypes.STRING,
  },
  badge: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM("Active", "Inactive"),
    defaultValue: "Active",
  },
});

export default Team;