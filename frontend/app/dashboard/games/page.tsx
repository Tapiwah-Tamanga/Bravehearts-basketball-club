"use client";

import { useState } from "react";
import { games as initialGames } from "@/lib/mock-data";
import type { Game, GameResult } from "@/types";

export default function GamesPage() {
  const [gameList, setGameList] = useState<Game[]>(initialGames);
  const [showForm, setShowForm] = useState(false);
  const [editingGame, setEditingGame] = useState<Game | null>(null);

  const handleDelete = (id: number) => {
    setGameList(gameList.filter((g) => g.id !== id));
  };

  const handleEdit = (game: Game) => {
    setEditingGame(game);
    setShowForm(true);
  };

  const getResultColor = (result: GameResult) => {
    switch (result) {
      case "WIN":
        return "bg-secondary-container text-on-secondary-container";
      case "LOSS":
        return "bg-error-container text-on-error-container";
      case "DRAW":
        return "bg-surface-container-highest text-on-surface-variant";
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-end mb-12">
        <div>
          <p className="font-headline text-xs text-secondary uppercase tracking-widest mb-1">
            Game Management
          </p>
          <h2 className="font-headline text-4xl text-on-surface">
            Score Updates
          </h2>
        </div>
        <button
          onClick={() => {
            setEditingGame(null);
            setShowForm(true);
          }}
          className="bg-primary text-on-primary px-6 py-2 font-headline text-xs hover:bg-opacity-90 transition-all shadow-md flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">
            sports_basketball
          </span>
          ADD GAME
        </button>
      </header>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameList.map((game, i) => (
          <div
            key={game.id}
            className="bg-surface-container-lowest border border-outline-variant p-6 shadow-sm group hover:border-primary transition-all animate-stagger-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-headline text-2xl font-black uppercase text-on-surface">
                  vs. {game.opponent}
                </h3>
                <p className="font-body text-sm text-on-surface-variant mt-1">
                  {new Date(game.gameDate).toLocaleDateString("en-MW", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <span
                className={`px-2 py-1 text-[10px] font-bold uppercase ${getResultColor(game.result)}`}
              >
                {game.result}
              </span>
            </div>

            {/* Score Display */}
            <div className="flex items-center justify-between mb-6 bg-surface-container p-6 border border-surface-container-highest">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-black text-sm mb-1">
                  BH
                </div>
                <p className="font-stats text-2xl text-on-surface">
                  {game.scoreFor}
                </p>
              </div>
              <div className="font-headline text-xs text-on-surface-variant opacity-40">
                VS
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-surface-container-high text-on-surface flex items-center justify-center font-black text-sm mb-1">
                  {game.opponent
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p className="font-stats text-2xl text-on-surface">
                  {game.scoreAgainst}
                </p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
              <span className="material-symbols-outlined text-primary text-lg">
                location_on
              </span>
              <span className="font-body">{game.venue}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(game)}
                className="flex-1 border border-outline-variant py-2 font-headline text-xs text-on-surface hover:bg-surface-container-high transition-all"
              >
                EDIT SCORE
              </button>
              <button
                onClick={() => handleDelete(game.id)}
                className="border border-outline-variant px-4 py-2 text-error hover:bg-error/5 transition-all"
              >
                <span className="material-symbols-outlined text-sm">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-surface-container-lowest border border-outline-variant p-12 w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-2xl text-on-surface">
                {editingGame ? "Edit Game" : "Add New Game"}
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowForm(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="font-headline text-xs text-on-surface-variant block mb-1">
                  Opponent
                </label>
                <input
                  type="text"
                  defaultValue={editingGame?.opponent || ""}
                  className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Game Date
                  </label>
                  <input
                    type="datetime-local"
                    defaultValue={
                      editingGame
                        ? new Date(editingGame.gameDate)
                            .toISOString()
                            .slice(0, 16)
                        : ""
                    }
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Venue
                  </label>
                  <input
                    type="text"
                    defaultValue={editingGame?.venue || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Score (For)
                  </label>
                  <input
                    type="number"
                    defaultValue={editingGame?.scoreFor || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-stats"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Score (Against)
                  </label>
                  <input
                    type="number"
                    defaultValue={editingGame?.scoreAgainst || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-stats"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Result
                  </label>
                  <select
                    defaultValue={editingGame?.result || "WIN"}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  >
                    <option value="WIN">WIN</option>
                    <option value="LOSS">LOSS</option>
                    <option value="DRAW">DRAW</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border-2 border-outline-variant py-4 font-headline text-xs text-on-surface hover:bg-surface-container-high transition-all"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-on-primary py-4 font-headline text-xs hover:bg-opacity-90 transition-all shadow-md"
                >
                  {editingGame ? "UPDATE GAME" : "ADD GAME"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
