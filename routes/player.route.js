import express from "express";

import {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
  getPlayersByCategory,
} from "../controllers/player.controller.js";

const router = express.Router();

router.post("/", createPlayer);
router.get("/", getAllPlayers);
router.get("/:id", getPlayerById);
router.get("/team/:category", getPlayersByCategory);
router.put("/:id", updatePlayer);
router.delete("/:id", deletePlayer);

export default router;