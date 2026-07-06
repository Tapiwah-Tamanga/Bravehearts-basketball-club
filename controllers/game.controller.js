import Game from "../models/game.model.js";

export const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);

    res.status(201).json({
      success: true,
      message: "Game created successfully",
      data: game,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll({
      include: [
        {
          model: Team,
          attributes: ["id", "name", "category"],
        },
      ],
      order: [["gameDate", "DESC"]],
    });

    res.status(200).json({
      success: true,
      count: games.length,
      data: games,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getGameById = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Team,
          attributes: ["id", "name", "category"],
        },
      ],
    });

    if (!game) {
      return res.status(404).json({
        success: false,
        message: "Game not found",
      });
    }

    res.status(200).json({
      success: true,
      data: game,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateGame = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);

    if (!game) {
      return res.status(404).json({
        success: false,
        message: "Game not found",
      });
    }

    await game.update(req.body);

    res.status(200).json({
      success: true,
      message: "Game updated successfully",
      data: game,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);

    if (!game) {
      return res.status(404).json({
        success: false,
        message: "Game not found",
      });
    }

    await game.destroy();

    res.status(200).json({
      success: true,
      message: "Game deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

