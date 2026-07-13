import express from "express";

import {
  getWinLossStats,
  getClubStats,
  getGamesPerTeam,
  getTopPlayers,
} from "../controllers/stats.controller.js";

const router = express.Router();

router.get("/win-loss", getWinLossStats);
router.get("/club", getClubStats);
router.get("/games-per-team", getGamesPerTeam);
router.get("/top-players", getTopPlayers);

export default router;