import { sequelize } from "../config/db.config.js";
import User from "./user.model.js";
import Event from "./event.model.js";
import Game from "./game.model.js";
import Player from "./player.model.js";
import Team from "./team.model.js";

// Relationships
Team.hasMany(Player);
Player.belongsTo(Team);

Team.hasMany(Game);
Game.belongsTo(Team);

export { sequelize, User, Event, Game, Player, Team};
