"use client";

import { useEffect, useState } from "react";
import { teams as initialTeams } from "@/lib/mock-data";
import { del, get, post, put, useLive } from "@/lib/api";
import type { Team } from "@/types";

export default function TeamsPage() {
  const liveTeams = useLive<Team[]>("/api/teams", initialTeams);
  const [teamList, setTeamList] = useState<Team[]>(initialTeams);
  useEffect(() => setTeamList(liveTeams), [liveTeams]);
  const [showForm, setShowForm] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);

  const handleDelete = async (id: number) => {
    await del(`/api/teams/${id}`);
    setTeamList(teamList.filter((t) => t.id !== id));
  };

  const handleEdit = (team: Team) => {
    setEditingTeam(team);
    setShowForm(true);
  };

  return (
    <div>
      <header className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-12">
        <div>
          <p className="font-headline text-xs text-secondary uppercase tracking-widest mb-1">
            Team Management
          </p>
          <h2 className="font-headline text-4xl text-on-surface">
            Divisions
          </h2>
        </div>
        <button
          onClick={() => {
            setEditingTeam(null);
            setShowForm(true);
          }}
          className="bg-primary text-on-primary px-6 py-2 font-headline text-xs hover:bg-opacity-90 transition-all shadow-md flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">group_add</span>
          ADD TEAM
        </button>
      </header>

      <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant font-headline text-xs">
                <th className="p-4">Team</th>
                <th className="p-4">Category</th>
                <th className="p-4">Coach</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {teamList.map((team) => (
                <tr key={team.id} className="hover:bg-primary/5 transition-colors group">
                  <td className="p-4 font-body font-bold text-on-surface group-hover:text-primary">
                    {team.name}
                  </td>
                  <td className="p-4">
                    <span className="bg-secondary/10 text-secondary px-2 py-1 text-[10px] uppercase font-black border border-secondary/20">
                      {team.category}
                    </span>
                  </td>
                  <td className="p-4 font-body text-on-surface">{team.coach}</td>
                  <td className="p-4 font-body text-on-surface">{team.status || "Active"}</td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleEdit(team)} className="text-primary hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button onClick={() => handleDelete(team.id)} className="text-error ml-4 hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4 overflow-y-auto">
          <div className="bg-surface-container-lowest border border-outline-variant p-6 md:p-12 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto my-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-2xl text-on-surface">
                {editingTeam ? "Edit Team" : "Add New Team"}
              </h3>
              <button onClick={() => setShowForm(false)} className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const str = (k: string) => {
                  const v = String(fd.get(k) || "");
                  return v === "" ? undefined : v;
                };
                const body = {
                  name: String(fd.get("name") || ""),
                  category: String(fd.get("category") || "Men"),
                  coach: str("coach"),
                  description: str("description"),
                  icon: str("icon"),
                  color: str("color"),
                  groupPhoto: str("groupPhoto"),
                  badge: str("badge"),
                  status: str("status"),
                };
                if (editingTeam) {
                  await put(`/api/teams/${editingTeam.id}`, body);
                } else {
                  await post("/api/teams", body);
                }
                const fresh = await get<Team[]>("/api/teams");
                if (fresh) setTeamList(fresh);
                setShowForm(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="font-headline text-xs text-on-surface-variant block mb-1">Name</label>
                <input type="text" name="name" defaultValue={editingTeam?.name || ""} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">Category</label>
                  <select name="category" defaultValue={editingTeam?.category || "Men"} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body">
                    <option value="Ladies">Ladies</option>
                    <option value="Men">Men</option>
                    <option value="Girls">Girls</option>
                    <option value="Boys">Boys</option>
                    <option value="Youth">Youth</option>
                  </select>
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">Status</label>
                  <select name="status" defaultValue={editingTeam?.status || "Active"} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">Coach</label>
                  <input type="text" name="coach" defaultValue={editingTeam?.coach || ""} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body" />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">Badge</label>
                  <input type="text" name="badge" defaultValue={editingTeam?.badge || ""} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body" />
                </div>
              </div>
              <div>
                <label className="font-headline text-xs text-on-surface-variant block mb-1">Description</label>
                <textarea name="description" defaultValue={editingTeam?.description || ""} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body h-24 resize-none" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">Icon</label>
                  <input type="text" name="icon" defaultValue={editingTeam?.icon || ""} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body" />
                </div>
                <div>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1">Color</label>
                  <input type="text" name="color" defaultValue={editingTeam?.color || ""} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body" />
                </div>
              </div>
              <div>
                <label className="font-headline text-xs text-on-surface-variant block mb-1">Group Photo URL</label>
                <input type="text" name="groupPhoto" defaultValue={editingTeam?.groupPhoto || ""} className="w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body" />
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 border-2 border-outline-variant py-4 font-headline text-xs text-on-surface hover:bg-surface-container-high transition-all">
                  CANCEL
                </button>
                <button type="submit" className="flex-1 bg-primary text-on-primary py-4 font-headline text-xs hover:bg-opacity-90 transition-all shadow-md">
                  {editingTeam ? "UPDATE TEAM" : "ADD TEAM"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
