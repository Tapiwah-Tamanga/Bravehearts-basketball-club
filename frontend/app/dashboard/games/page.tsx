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
      <header className="flex justify-between items-end mb-xl">
        <div>
          <p className="font-headline text-label-caps text-secondary uppercase tracking-widest mb-xs">
            Game Management
          </p>
          <h2 className="font-headline text-headline-lg text-on-surface">
            Score Updates
          </h2>
        </div>
        <button
          onClick={() => {
            setEditingGame(null);
            setShowForm(true);
          }}
          className="bg-primary text-on-primary px-lg py-sm font-headline text-label-caps hover:bg-opacity-90 transition-all shadow-md flex items-center gap-sm"
        >
          <span className="material-symbols-outlined text-sm">
            sports_basketball
          </span>
          ADD GAME
        </button>
      </header>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {gameList.map((game, i) => (
          <div
            key={game.id}
            className="bg-surface-container-lowest border border-outline-variant p-lg shadow-sm group hover:border-primary transition-all animate-stagger-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-lg">
              <div>
                <h3 className="font-headline text-headline-md font-black uppercase text-on-surface">
                  vs. {game.opponent}
                </h3>
                <p className="font-body text-sm text-on-surface-variant mt-xs">
                  {new Date(game.gameDate).toLocaleDateString("en-MW", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <span
                className={`px-sm py-xs text-[10px] font-bold uppercase ${getResultColor(game.result)}`}
              >
                {game.result}
              </span>
            </div>

            {/* Score Display */}
            <div className="flex items-center justify-between mb-lg bg-surface-container p-lg border border-surface-container-highest">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-black text-sm mb-xs">
                  BH
                </div>
                <p className="font-stats text-headline-md text-on-surface">
                  {game.scoreFor}
                </p>
              </div>
              <div className="font-headline text-label-caps text-on-surface-variant opacity-40">
                VS
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-surface-container-high text-on-surface flex items-center justify-center font-black text-sm mb-xs">
                  {game.opponent
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p className="font-stats text-headline-md text-on-surface">
                  {game.scoreAgainst}
                </p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-center gap-sm text-on-surface-variant text-sm mb-md">
              <span className="material-symbols-outlined text-primary text-lg">
                location_on
              </span>
              <span className="font-body">{game.venue}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-sm">
              <button
                onClick={() => handleEdit(game)}
                className="flex-1 border border-outline-variant py-sm font-headline text-label-caps text-on-surface hover:bg-surface-container-high transition-all"
              >
                EDIT SCORE
              </button>
              <button
                onClick={() => handleDelete(game.id)}
                className="border border-outline-variant px-md py-sm text-error hover:bg-error/5 transition-all"
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
          <div className="bg-surface-container-lowest border border-outline-variant p-xl w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center mb-lg">
              <h3 className="font-headline text-headline-md text-on-surface">
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
              className="space-y-md"
            >
              <div>
                <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                  Opponent
                </label>
                <input
                  type="text"
                  defaultValue={editingGame?.opponent || ""}
                  className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                />
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
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
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Venue
                  </label>
                  <input
                    type="text"
                    defaultValue={editingGame?.venue || ""}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-md">
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Score (For)
                  </label>
                  <input
                    type="number"
                    defaultValue={editingGame?.scoreFor || ""}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-stats"
                  />
                </div>
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Score (Against)
                  </label>
                  <input
                    type="number"
                    defaultValue={editingGame?.scoreAgainst || ""}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-stats"
                  />
                </div>
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Result
                  </label>
                  <select
                    defaultValue={editingGame?.result || "WIN"}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  >
                    <option value="WIN">WIN</option>
                    <option value="LOSS">LOSS</option>
                    <option value="DRAW">DRAW</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-md pt-md">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border-2 border-outline-variant py-md font-headline text-label-caps text-on-surface hover:bg-surface-container-high transition-all"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-on-primary py-md font-headline text-label-caps hover:bg-opacity-90 transition-all shadow-md"
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
