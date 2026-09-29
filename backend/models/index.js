import { sequelize } from "../config/db.config.js";
import User from "./user.model.js";
import Event from "./event.model.js";
import Game from "./game.model.js";
import Player from "./player.model.js";
import Team from "./team.model.js";
import {
  GamePlay,
  TicketTier,
  TicketOrder,
  NewsArticle,
  Subscriber,
  Booking,
  DraftProspect,
  Broadcast,
  Product,
  Inquiry,
} from "./club.model.js";

// Relationships
Team.hasMany(Player);
Player.belongsTo(Team);

Team.hasMany(Game);
Game.belongsTo(Team);

Game.hasMany(GamePlay);
GamePlay.belongsTo(Game);

Game.hasMany(TicketTier);
TicketTier.belongsTo(Game);

TicketTier.hasMany(TicketOrder);
TicketOrder.belongsTo(TicketTier);
Game.hasMany(TicketOrder);
TicketOrder.belongsTo(Game);

Team.hasMany(DraftProspect);
DraftProspect.belongsTo(Team);

export { sequelize, User, Event, Game, Player, Team, GamePlay, TicketTier, TicketOrder, NewsArticle, Subscriber, Booking, DraftProspect, Broadcast, Product, Inquiry };
