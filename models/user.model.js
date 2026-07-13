import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.TEXT, allowNull: false },
  email: { type: DataTypes.STRING,allowNull:false, unique: true },
  password: { type:DataTypes.STRING, allowNull: false},
  role: {
    type: DataTypes.ENUM("Admin", "Coach"),
    defaultValue: "Coach",
  },
  resetToken: DataTypes.STRING,
  resetTokenExpires: DataTypes.DATE
}, { timestamps: true });

export default User;