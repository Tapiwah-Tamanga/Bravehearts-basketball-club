"use client";

import { useState } from "react";
import { players as initialPlayers } from "@/lib/mock-data";
import type { Player } from "@/types";

export default function PlayersPage() {
  const [playerList, setPlayerList] = useState<Player[]>(initialPlayers);
  const [search, setSearch] = useState("");
  const [filterTeam, setFilterTeam] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);

  const filtered = playerList.filter((p) => {
    const matchesSearch = p.fullName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTeam = filterTeam === "All" || p.team === filterTeam;
    return matchesSearch && matchesTeam;
  });

  const handleDelete = (id: number) => {
    setPlayerList(playerList.filter((p) => p.id !== id));
  };

  const handleEdit = (player: Player) => {
    setEditingPlayer(player);
    setShowForm(true);
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-end mb-12">
        <div>
          <p className="font-headline text-xs text-secondary uppercase tracking-widest mb-1">
            Player Management
          </p>
          <h2 className="font-headline text-4xl text-on-surface">
            Squad Roster
          </h2>
        </div>
        <button
          onClick={() => {
            setEditingPlayer(null);
            setShowForm(true);
          }}
          className="bg-primary text-on-primary px-6 py-2 font-headline text-xs hover:bg-opacity-90 transition-all shadow-md flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">person_add</span>
          ADD PLAYER
        </button>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex border border-outline-variant flex-grow">
          <input
            className="bg-surface text-on-surface px-4 py-2 focus:ring-2 focus:ring-primary-container border-none w-full text-sm font-body"
            placeholder="Search Players..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-primary-container p-1 flex items-center justify-center w-10">
            <span className="material-symbols-outlined text-on-primary-container">
              search
            </span>
          </button>
        </div>
        <select
          className="bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm font-body text-on-surface focus:ring-2 focus:ring-primary-container"
          value={filterTeam}
          onChange={(e) => setFilterTeam(e.target.value)}
        >
          <option value="All">All Teams</option>
          <option value="Ladies">Ladies</option>
          <option value="Men">Men</option>
          <option value="Girls">Girls</option>
          <option value="Boys">Boys</option>
          <option value="Youth">Youth</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant font-headline text-xs">
                <th className="p-4">Player</th>
                <th className="p-4">Jersey</th>
                <th className="p-4">Position</th>
                <th className="p-4">Team</th>
                <th className="p-4">PPG</th>
                <th className="p-4">RPG</th>
                <th className="p-4">APG</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map((player) => (
                <tr
                  key={player.id}
                  className="hover:bg-primary/5 transition-colors group"
                >
                  <td className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-surface-container-high rounded-full overflow-hidden">
                      <img
                        src={player.photo}
                        alt={player.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-body font-bold text-on-surface group-hover:text-primary">
                      {player.fullName}
                    </span>
                  </td>
                  <td className="p-4 font-stats text-on-surface">
                    {String(player.jerseyNumber).padStart(2, "0")}
                  </td>
                  <td className="p-4 font-body text-on-surface">
                    {player.position}
                  </td>
                  <td className="p-4">
                    <span className="bg-secondary/10 text-secondary px-2 py-1 text-[10px] uppercase font-black border border-secondary/20">
                      {player.team}
                    </span>
                  </td>
                  <td className="p-4 font-stats text-on-surface">
                    {(player.points / 20).toFixed(1)}
                  </td>
                  <td className="p-4 font-stats text-on-surface">
                    {(player.rebounds / 20).toFixed(1)}
                  </td>
                  <td className="p-4 font-stats text-on-surface">
                    {(player.assists / 20).toFixed(1)}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleEdit(player)}
                      className="text-primary hover:scale-110 transition-transform"
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(player.id)}
                      className="text-error ml-4 hover:scale-110 transition-transform"
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-surface-container-lowest border border-outline-variant p-12 w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-2xl text-on-surface">
                {editingPlayer ? "Edit Player" : "Add New Player"}
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
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={editingPlayer?.fullName || ""}
                  className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Jersey Number
                  </label>
                  <input
                    type="number"
                    defaultValue={editingPlayer?.jerseyNumber || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Position
                  </label>
                  <select
                    defaultValue={editingPlayer?.position || "PG"}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  >
                    <option value="PG">Point Guard</option>
                    <option value="SG">Shooting Guard</option>
                    <option value="SF">Small Forward</option>
                    <option value="PF">Power Forward</option>
                    <option value="C">Center</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Team
                  </label>
                  <select
                    defaultValue={editingPlayer?.team || "Ladies"}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  >
                    <option value="Ladies">Ladies</option>
                    <option value="Men">Men</option>
                    <option value="Girls">Girls</option>
                    <option value="Boys">Boys</option>
                    <option value="Youth">Youth</option>
                  </select>
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    defaultValue={editingPlayer?.height || ""}
                    className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
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
                  {editingPlayer ? "UPDATE PLAYER" : "ADD PLAYER"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
