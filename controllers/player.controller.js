import Player from "../models/player.model.js";
import Team from "../models/team.model.js";
export const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);

    res.status(201).json({
      success: true,
      message: "Player created successfully",
      data: player,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({
      include: [
        {
          model: Team,
          attributes: ["id", "name", "category"],
        },
      ],
    });

    res.status(200).json({
      success: true,
      count: players.length,
      data: players,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPlayersByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const players = await Player.findAll({
      include: [
        {
          model: Team,
          where: { category },
          attributes: ["id", "name", "category"],
        },
      ],
      order: [["jerseyNumber", "ASC"]],
    });

    const totalPlayers = players.length;

    const totalPoints = players.reduce(
      (sum, player) => sum + (player.points || 0),
      0
    );

    const totalAssists = players.reduce(
      (sum, player) => sum + (player.assists || 0),
      0
    );

    const totalRebounds = players.reduce(
      (sum, player) => sum + (player.rebounds || 0),
      0
    );

    const totalSteals = players.reduce(
      (sum, player) => sum + (player.steals || 0),
      0
    );

    const totalBlocks = players.reduce(
      (sum, player) => sum + (player.blocks || 0),
      0
    );

    res.status(200).json({
      success: true,
      category,
      totalPlayers,
      totalPoints,
      totalAssists,
      totalRebounds,
      totalSteals,
      totalBlocks,
      players,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id, {
      include: [
        {
          model: Team,
          attributes: ["id", "name", "category"],
        },
      ],
    });

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Player not found",
      });
    }

    res.status(200).json({
      success: true,
      data: player,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Player not found",
      });
    }

    await player.update(req.body);

    res.status(200).json({
      success: true,
      message: "Player updated successfully",
      data: player,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Player not found",
      });
    }

    await player.destroy();

    res.status(200).json({
      success: true,
      message: "Player deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

