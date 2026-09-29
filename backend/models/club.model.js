import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

// ponytail: one file for all small frontend-driven models — same define() pattern as existing models, no new deps.
export const GamePlay = sequelize.define("GamePlay", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  time: { type: DataTypes.STRING },
  play: { type: DataTypes.STRING, allowNull: false },
  score: { type: DataTypes.STRING },
  type: { type: DataTypes.ENUM("score", "rebound", "assist", "steal", "block", "other"), defaultValue: "other" },
});

export const TicketTier = sequelize.define("TicketTier", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.ENUM("Standard", "Premium", "SeasonPass"), allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  capacity: { type: DataTypes.INTEGER },
});

export const TicketOrder = sequelize.define("TicketOrder", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  buyerName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  qty: { type: DataTypes.INTEGER, defaultValue: 1 },
  status: { type: DataTypes.ENUM("pending", "paid", "cancelled"), defaultValue: "pending" },
});

export const NewsArticle = sequelize.define("NewsArticle", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  tag: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING, allowNull: false },
  excerpt: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  publishedAt: { type: DataTypes.DATE },
});

export const Subscriber = sequelize.define("Subscriber", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});

export const Booking = sequelize.define("Booking", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  time: { type: DataTypes.STRING },
  capacity: { type: DataTypes.INTEGER },
  status: { type: DataTypes.ENUM("Available", "Full"), defaultValue: "Available" },
});

export const DraftProspect = sequelize.define("DraftProspect", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING },
  notes: { type: DataTypes.TEXT },
});

export const Broadcast = sequelize.define("Broadcast", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  audience: { type: DataTypes.STRING, defaultValue: "all" },
  channel: { type: DataTypes.ENUM("SMS", "Push", "Email"), defaultValue: "Push" },
  message: { type: DataTypes.TEXT, allowNull: false },
});

export const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  image: { type: DataTypes.STRING },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
});

export const Inquiry = sequelize.define("Inquiry", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  type: { type: DataTypes.ENUM("Contact", "Sponsorship", "Clinic", "Waitlist"), defaultValue: "Contact" },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  message: { type: DataTypes.TEXT },
});
