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
      <header className="flex justify-between items-end mb-xl">
        <div>
          <p className="font-headline text-label-caps text-secondary uppercase tracking-widest mb-xs">
            Player Management
          </p>
          <h2 className="font-headline text-headline-lg text-on-surface">
            Squad Roster
          </h2>
        </div>
        <button
          onClick={() => {
            setEditingPlayer(null);
            setShowForm(true);
          }}
          className="bg-primary text-on-primary px-lg py-sm font-headline text-label-caps hover:bg-opacity-90 transition-all shadow-md flex items-center gap-sm"
        >
          <span className="material-symbols-outlined text-sm">person_add</span>
          ADD PLAYER
        </button>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-md mb-lg">
        <div className="flex border border-outline-variant flex-grow">
          <input
            className="bg-surface text-on-surface px-md py-sm focus:ring-2 focus:ring-primary-container border-none w-full text-sm font-body"
            placeholder="Search Players..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-primary-container p-xs flex items-center justify-center w-10">
            <span className="material-symbols-outlined text-on-primary-container">
              search
            </span>
          </button>
        </div>
        <select
          className="bg-surface-container-lowest border border-outline-variant px-md py-sm text-sm font-body text-on-surface focus:ring-2 focus:ring-primary-container"
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
              <tr className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant font-headline text-label-caps">
                <th className="p-md">Player</th>
                <th className="p-md">Jersey</th>
                <th className="p-md">Position</th>
                <th className="p-md">Team</th>
                <th className="p-md">PPG</th>
                <th className="p-md">RPG</th>
                <th className="p-md">APG</th>
                <th className="p-md text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map((player) => (
                <tr
                  key={player.id}
                  className="hover:bg-primary/5 transition-colors group"
                >
                  <td className="p-md flex items-center gap-md">
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
                  <td className="p-md font-stats text-on-surface">
                    {String(player.jerseyNumber).padStart(2, "0")}
                  </td>
                  <td className="p-md font-body text-on-surface">
                    {player.position}
                  </td>
                  <td className="p-md">
                    <span className="bg-secondary/10 text-secondary px-sm py-xs text-[10px] uppercase font-black border border-secondary/20">
                      {player.team}
                    </span>
                  </td>
                  <td className="p-md font-stats text-on-surface">
                    {(player.points / 20).toFixed(1)}
                  </td>
                  <td className="p-md font-stats text-on-surface">
                    {(player.rebounds / 20).toFixed(1)}
                  </td>
                  <td className="p-md font-stats text-on-surface">
                    {(player.assists / 20).toFixed(1)}
                  </td>
                  <td className="p-md text-right">
                    <button
                      onClick={() => handleEdit(player)}
                      className="text-primary hover:scale-110 transition-transform"
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(player.id)}
                      className="text-error ml-md hover:scale-110 transition-transform"
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
          <div className="bg-surface-container-lowest border border-outline-variant p-xl w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center mb-lg">
              <h3 className="font-headline text-headline-md text-on-surface">
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
              className="space-y-md"
            >
              <div>
                <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={editingPlayer?.fullName || ""}
                  className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                />
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Jersey Number
                  </label>
                  <input
                    type="number"
                    defaultValue={editingPlayer?.jerseyNumber || ""}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Position
                  </label>
                  <select
                    defaultValue={editingPlayer?.position || "PG"}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  >
                    <option value="PG">Point Guard</option>
                    <option value="SG">Shooting Guard</option>
                    <option value="SF">Small Forward</option>
                    <option value="PF">Power Forward</option>
                    <option value="C">Center</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Team
                  </label>
                  <select
                    defaultValue={editingPlayer?.team || "Ladies"}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  >
                    <option value="Ladies">Ladies</option>
                    <option value="Men">Men</option>
                    <option value="Girls">Girls</option>
                    <option value="Boys">Boys</option>
                    <option value="Youth">Youth</option>
                  </select>
                </div>
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    defaultValue={editingPlayer?.height || ""}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
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
