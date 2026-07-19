"use client";

import { players, games, teams, getWinRate } from "@/lib/mock-data";

export default function DashboardPage() {
  const winRate = getWinRate();
  const totalPlayers = players.length;
  const recentGames = games.slice(0, 3);

  return (
    <div>
      {/* Header Actions */}
      <header className="flex justify-between items-end mb-xl">
        <div>
          <p className="font-headline text-label-caps text-secondary uppercase tracking-widest mb-xs">
            Command Center
          </p>
          <h2 className="font-headline text-headline-lg text-on-surface">
            Administrative Overview
          </h2>
        </div>
        <div className="flex gap-md">
          <div className="bg-surface-container-lowest border border-outline-variant px-md py-sm flex items-center gap-md shadow-sm">
            <span className="material-symbols-outlined text-primary">
              calendar_today
            </span>
            <span className="font-bold text-on-surface">2026 Season</span>
          </div>
          <button className="bg-white text-on-surface border-2 border-primary-container px-lg py-sm font-bold flex items-center gap-sm hover:bg-primary-container hover:text-on-primary transition-all shadow-sm">
            <span className="material-symbols-outlined">download</span>
            EXPORT REPORT
          </button>
        </div>
      </header>

      {/* Bento Grid Dashboard */}
      <div className="bento-grid">
        {/* Hero Stats: Player Registrations */}
        <section className="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant p-xl relative overflow-hidden shadow-sm">
          <div className="relative z-10">
            <h3 className="font-headline text-headline-md mb-lg">
              Player Enrollment Flow
            </h3>
            <div className="flex items-end gap-xl">
              <div>
                <p className="font-stats text-display-lg text-primary leading-none">
                  {totalPlayers}
                </p>
                <p className="font-headline text-label-caps text-secondary mt-xs font-bold">
                  +12% VS LAST MONTH
                </p>
              </div>
              <div className="flex-grow h-32 flex items-end gap-xs">
                {[13, 12, 10, 37, 61, 83].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full transition-colors ${
                      i === 5
                        ? "bg-primary-container"
                        : "bg-surface-container-highest hover:bg-primary"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 text-surface-container-highest opacity-50 pointer-events-none translate-x-1/4 -translate-y-1/4">
            <span className="material-symbols-outlined text-[240px]">
              trending_up
            </span>
          </div>
        </section>

        {/* Logistics Status Card */}
        <section className="col-span-12 md:col-span-4 bg-primary-container/5 border-2 border-primary-container p-lg flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-md">
            <h3 className="font-headline text-headline-md leading-tight text-on-surface">
              Next Game Logistics
            </h3>
            <div className="bg-primary-container text-on-primary-container px-sm py-xs text-[10px] font-bold pulse-red">
              LIVE PREP
            </div>
          </div>
          <div className="space-y-md flex-grow">
            <div className="flex items-center gap-md border-b border-outline-variant pb-sm">
              <span className="material-symbols-outlined text-secondary">
                directions_bus
              </span>
              <div>
                <p className="font-bold text-on-surface">Team Transport</p>
                <p className="text-sm text-on-surface-variant">
                  Lilongwe Central Hub - 14:00
                </p>
              </div>
            </div>
            <div className="flex items-center gap-md border-b border-outline-variant pb-sm">
              <span className="material-symbols-outlined text-secondary">
                medical_services
              </span>
              <div>
                <p className="font-bold text-on-surface">Medical Clearance</p>
                <p className="text-sm text-on-surface-variant">
                  {totalPlayers}/{totalPlayers} Players Cleared
                </p>
              </div>
            </div>
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-secondary">
                inventory_2
              </span>
              <div>
                <p className="font-bold text-on-surface">Kit Distribution</p>
                <p className="text-sm text-on-surface-variant">
                  Home Reds - Prepared
                </p>
              </div>
            </div>
          </div>
          <button className="w-full mt-lg bg-on-surface text-surface py-sm font-bold hover:bg-primary hover:text-on-primary transition-colors">
            MANAGE FLEET
          </button>
        </section>

        {/* Team Breakdown Table */}
        <section className="col-span-12 bg-surface-container-lowest border border-outline-variant overflow-hidden shadow-sm">
          <div className="p-lg bg-surface-container-highest/50 flex justify-between items-center border-b border-outline-variant">
            <h3 className="font-headline text-headline-md text-on-surface">
              Active Squad Management
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant font-headline text-label-caps">
                  <th className="p-md">Team Division</th>
                  <th className="p-md">Head Coach</th>
                  <th className="p-md">Status</th>
                  <th className="p-md">Win Rate</th>
                  <th className="p-md text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {teams.map((team) => (
                  <tr
                    key={team.id}
                    className="hover:bg-primary/5 transition-colors group"
                  >
                    <td className="p-md flex items-center gap-md">
                      <div className="w-8 h-8 bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                        {team.category[0]}
                      </div>
                      <span className="font-bold text-on-surface">
                        {team.name}
                      </span>
                    </td>
                    <td className="p-md italic text-on-surface-variant">
                      {team.coach}
                    </td>
                    <td className="p-md">
                      <span className="bg-secondary-container text-on-secondary-container px-sm py-1 text-xs font-bold uppercase">
                        Active
                      </span>
                    </td>
                    <td className="p-md font-stats text-secondary">
                      {winRate}%
                    </td>
                    <td className="p-md text-right">
                      <button className="text-primary hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">
                          edit_note
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Control Cards */}
        <section className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg group hover:border-primary-container transition-all shadow-sm">
          <div className="flex items-center gap-md mb-md">
            <span className="material-symbols-outlined text-primary-container scale-125">
              stadium
            </span>
            <h4 className="font-bold text-on-surface">Facility Booking</h4>
          </div>
          <p className="text-sm text-on-surface-variant mb-lg">
            Manage court time and lighting schedules for all Bravehearts
            training zones.
          </p>
          <div className="flex justify-between items-center bg-surface-container border-l-4 border-secondary p-md">
            <div>
              <p className="text-xs font-bold text-secondary uppercase">
                Court A
              </p>
              <p className="text-lg font-bold text-on-surface">
                Available Now
              </p>
            </div>
            <button className="bg-secondary text-on-secondary px-md py-sm font-bold text-sm shadow-sm">
              BOOK
            </button>
          </div>
        </section>

        <section className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg group hover:border-primary-container transition-all shadow-sm">
          <div className="flex items-center gap-md mb-md">
            <span className="material-symbols-outlined text-primary-container scale-125">
              payments
            </span>
            <h4 className="font-bold text-on-surface">Financial Flux</h4>
          </div>
          <p className="text-sm text-on-surface-variant mb-lg">
            Live monitoring of membership fees and corporate sponsorship
            intake.
          </p>
          <div className="space-y-sm">
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-on-surface-variant">
                MONTHLY TARGET
              </span>
              <span className="text-secondary">82%</span>
            </div>
            <div className="h-2 bg-surface-container-highest overflow-hidden rounded-full">
              <div className="h-full bg-secondary w-[82%]" />
            </div>
          </div>
        </section>

        <section className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg group hover:border-primary-container transition-all shadow-sm">
          <div className="flex items-center gap-md mb-md">
            <span className="material-symbols-outlined text-primary-container scale-125">
              campaign
            </span>
            <h4 className="font-bold text-on-surface">Team Broadcast</h4>
          </div>
          <p className="text-sm text-on-surface-variant mb-lg">
            Send instant SMS/Push notifications to all players or specific
            squads.
          </p>
          <div className="relative">
            <textarea
              className="w-full bg-surface-container border border-outline-variant text-sm p-md focus:ring-1 focus:ring-primary-container h-24 resize-none text-on-surface"
              placeholder="Type urgent update..."
            />
            <button className="absolute bottom-2 right-2 text-primary-container hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
