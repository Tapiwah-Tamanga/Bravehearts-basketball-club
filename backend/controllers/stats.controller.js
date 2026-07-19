import { Game, Player, Team } from "../models/index.js";
import { Op } from "sequelize";

export const getWinLossStats = async (req, res) => {
  try {
    const wins = await Game.count({
      where: { result: "WIN" },
    });

    const losses = await Game.count({
      where: { result: "LOSS" },
    });

    const draws = await Game.count({
      where: { result: "DRAW" },
    });

    res.status(200).json({
      success: true,
      data: {
        wins,
        losses,
        draws,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getClubStats = async (req, res) => {
  try {
    const totalPlayers = await Player.count();
    const totalTeams = await Team.count();
    const totalGames = await Game.count();

    res.status(200).json({
      success: true,
      data: {
        totalPlayers,
        totalTeams,
        totalGames,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getGamesPerTeam = async (req, res) => {
  try {
    const games = await Game.findAll({
      attributes: ["TeamId"],
      include: [
        {
          model: Team,
          attributes: ["name"],
        },
      ],
    });

    const stats = {};

    games.forEach((game) => {
      const teamName = game.Team.name;

      if (!stats[teamName]) {
        stats[teamName] = 0;
      }

      stats[teamName]++;
    });

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTopPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({
      order: [["points", "DESC"]],
      limit: 5,
      include: [
        {
          model: Team,
          attributes: ["id","name","category"],
        },
      ],
    });

    res.status(200).json({
      success: true,
      data: players,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

