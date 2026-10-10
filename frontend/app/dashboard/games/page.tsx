"use client";

import { useEffect, useState } from "react";
import { games as initialGames, teams as initialTeams } from "@/lib/mock-data";
import { del, get, post, put, useLive } from "@/lib/api";
import type { Game, GameResult, Team } from "@/types";

export default function GamesPage() {
  const liveGames = useLive<Game[]>("/api/games", initialGames);
  const teams = useLive<Team[]>("/api/teams", initialTeams);
  const [gameList, setGameList] = useState<Game[]>(initialGames);
  useEffect(() => setGameList(liveGames), [liveGames]);
  const [showForm, setShowForm] = useState(false);
  const [editingGame, setEditingGame] = useState<Game | null>(null);

  const handleDelete = async (id: number) => {
    await del(`/api/games/${id}`);
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
              onSubmit={async (e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const num = (k: string) => {
                  const v = fd.get(k);
                  return v === null || v === "" ? undefined : Number(v);
                };
                const str = (k: string) => {
                  const v = String(fd.get(k) || "");
                  return v === "" ? undefined : v;
                };
                const body = {
                  opponent: String(fd.get("opponent") || ""),
                  gameDate: String(fd.get("gameDate") || ""),
                  venue: str("venue"),
                  scoreFor: num("scoreFor"),
                  scoreAgainst: num("scoreAgainst"),
                  result: str("result"),
                  season: str("season"),
                  status: str("status"),
                  quarter: str("quarter"),
                  clock: str("clock"),
                  q1: num("q1"),
                  q2: num("q2"),
                  q3: num("q3"),
                  q4: num("q4"),
                  fouls: num("fouls"),
                  timeouts: num("timeouts"),
                  fgPct: num("fgPct"),
                  threePct: num("threePct"),
                  ftPct: num("ftPct"),
                  turnovers: num("turnovers"),
                  streamUrl: str("streamUrl"),
                  isLive: fd.get("isLive") === "on",
                  TeamId: Number(fd.get("TeamId") || 0) || undefined,
                };
                if (editingGame) {
                  await put(`/api/games/${editingGame.id}`, body);
                } else {
                  await post("/api/games", body);
                }
                const fresh = await get<Game[]>("/api/games");
                if (fresh) setGameList(fresh);
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
                  name="opponent"
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
                    name="gameDate"
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
                    name="venue"
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
                    name="scoreFor"
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
                    name="scoreAgainst"
                    defaultValue={editingGame?.scoreAgainst || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-stats"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Result
                  </label>
                  <select
                    name="result"
                    defaultValue={editingGame?.result || "WIN"}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  >
                    <option value="WIN">WIN</option>
                    <option value="LOSS">LOSS</option>
                    <option value="DRAW">DRAW</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Season
                  </label>
                  <input
                    type="text"
                    name="season"
                    defaultValue={editingGame?.season || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    defaultValue={editingGame?.status || "upcoming"}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="live">Live</option>
                    <option value="finished">Finished</option>
                  </select>
                </div>
                <div className="flex items-end gap-2 pb-2">
                  <input type="checkbox" name="isLive" defaultChecked={editingGame?.isLive || false} className="w-4 h-4" />
                  <label className="font-headline text-xs text-on-surface-variant">Is Live</label>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Quarter
                  </label>
                  <input
                    type="text"
                    name="quarter"
                    defaultValue={editingGame?.quarter || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Clock
                  </label>
                  <input
                    type="text"
                    name="clock"
                    defaultValue={editingGame?.clock || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-stats"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Fouls
                  </label>
                  <input
                    type="number"
                    name="fouls"
                    defaultValue={editingGame?.fouls || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-stats"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Timeouts
                  </label>
                  <input
                    type="number"
                    name="timeouts"
                    defaultValue={editingGame?.timeouts || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-stats"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {(["q1", "q2", "q3", "q4"] as const).map((f) => (
                  <div key={f}>
                    <label className="font-headline text-xs text-on-surface-variant block mb-1 uppercase">
                      {f}
                    </label>
                    <input
                      type="number"
                      name={f}
                      defaultValue={editingGame?.[f] || ""}
                      className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-stats"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {(["fgPct", "threePct", "ftPct", "turnovers"] as const).map((f) => (
                  <div key={f}>
                    <label className="font-headline text-xs text-on-surface-variant block mb-1">
                      {f}
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name={f}
                      defaultValue={editingGame?.[f] || ""}
                      className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-stats"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="font-headline text-xs text-on-surface-variant block mb-1">
                  Stream URL
                </label>
                <input
                  type="text"
                  name="streamUrl"
                  defaultValue={editingGame?.streamUrl || ""}
                  className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                />
              </div>
              <div>
                <label className="font-headline text-xs text-on-surface-variant block mb-1">
                  Team
                </label>
                <select
                  name="TeamId"
                  defaultValue={(editingGame as Game & { TeamId?: number })?.TeamId || teams[0]?.id || ""}
                  className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                >
                  {teams.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
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
