import { Team, Player, Game, Event } from "../models/index.js";

export const getDashboard = async (req, res) => {
  try {
    const totalTeams = await Team.count();
    const totalPlayers = await Player.count();
    const totalGames = await Game.count();
    const totalEvents = await Event.count();

    const wins = await Game.count({
      where: { result: "WIN" },
    });

    const losses = await Game.count({
      where: { result: "LOSS" },
    });

    res.status(200).json({
      success: true,
      data: {
        totalTeams,
        totalPlayers,
        totalGames,
        totalEvents,
        wins,
        losses,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

