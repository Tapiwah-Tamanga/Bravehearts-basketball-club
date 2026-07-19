"use client";

import { useParams } from "next/navigation";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import {
  getPlayersByTeam,
  getTeamByCategory,
  getWinRate,
  getRecentGames,
} from "@/lib/mock-data";
import type { Player } from "@/types";

function PlayerCard({ player, index }: { player: Player; index: number }) {
  const ppg = (player.points / 20).toFixed(1);
  const rpg = (player.rebounds / 20).toFixed(1);
  const apg = (player.assists / 20).toFixed(1);

  return (
    <div
      className="bg-surface-container-low border border-surface-container-highest group relative overflow-hidden player-card-glow transition-all duration-300 animate-stagger-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-surface-container-high">
        <img
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
          src={player.photo}
          alt={player.fullName}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
        <div className="absolute top-md right-md">
          <span className="font-stats text-stats-number text-primary drop-shadow-md">
            {String(player.jerseyNumber).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute bottom-md left-md">
          <h4 className="font-headline text-headline-md uppercase leading-none text-on-surface">
            {player.fullName.split(" ").slice(0, -1).join(" ")}
            <br />
            {player.fullName.split(" ").slice(-1)}
          </h4>
          <p className="font-headline text-label-caps text-primary mt-xs">
            {player.position}
          </p>
        </div>
      </div>
      <div className="p-md bg-surface border-t border-surface-container-highest">
        <div className="grid grid-cols-3 gap-sm mb-md">
          <div className="text-center border-r border-surface-container-highest">
            <p className="font-headline text-label-caps text-on-surface-variant opacity-60 text-[10px]">
              PPG
            </p>
            <p className="font-stats text-headline-md text-on-surface">{ppg}</p>
          </div>
          <div className="text-center border-r border-surface-container-highest">
            <p className="font-headline text-label-caps text-on-surface-variant opacity-60 text-[10px]">
              RPG
            </p>
            <p className="font-stats text-headline-md text-on-surface">{rpg}</p>
          </div>
          <div className="text-center">
            <p className="font-headline text-label-caps text-on-surface-variant opacity-60 text-[10px]">
              APG
            </p>
            <p className="font-stats text-headline-md text-on-surface">{apg}</p>
          </div>
        </div>
        <button className="w-full bg-surface-container-high text-on-surface py-sm font-headline text-label-caps border border-outline-variant hover:bg-primary hover:text-on-primary transition-all">
          View Analytics
        </button>
      </div>
    </div>
  );
}

export default function RosterPage() {
  const params = useParams();
  const teamSlug = params.team as string;

  const teamPlayers = getPlayersByTeam(teamSlug);
  const team = getTeamByCategory(teamSlug);
  const winRate = getWinRate();
  const recentGames = getRecentGames();
  const nextGame = recentGames[0];

  const teamBadge =
    teamSlug === "youth"
      ? "Youth Academy"
      : teamSlug === "boys" || teamSlug === "girls"
        ? "Youth Academy"
        : "Elite Division";

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden flex items-end bg-surface-container-highest">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-xl w-full">
            <span className="bg-primary px-md py-xs font-headline text-label-caps text-on-primary mb-md inline-block">
              {teamBadge}
            </span>
            <h2 className="font-headline text-display-lg text-on-surface uppercase leading-none mb-sm">
              The {team?.name.split(" ").slice(-1)} Team
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
              {team?.description}
            </p>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="px-margin-mobile md:px-margin-desktop py-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
            <div className="md:col-span-2 bg-surface-container border border-surface-container-highest p-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <p className="font-headline text-label-caps text-on-surface-variant mb-md">
                Division Win Rate
              </p>
              <p className="font-stats text-stats-number text-secondary">
                {winRate}%
              </p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-lg">
              <p className="font-headline text-label-caps text-on-surface-variant mb-md">
                Active Players
              </p>
              <p className="font-stats text-stats-number text-on-surface">
                {teamPlayers.length}
              </p>
            </div>
            <div className="bg-primary-container p-lg text-on-primary-container border-l-4 border-on-surface">
              <p className="font-headline text-label-caps opacity-80 mb-md">
                Next Match
              </p>
              <p className="font-headline text-headline-md font-black uppercase">
                vs. {nextGame?.opponent || "TBD"}
              </p>
              <p className="font-body text-body-md mt-xs opacity-90">
                {nextGame
                  ? new Date(nextGame.gameDate).toLocaleDateString("en-MW", {
                      weekday: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "No upcoming games"}
              </p>
            </div>
          </div>
        </section>

        {/* Player Grid */}
        <section className="px-margin-mobile md:px-margin-desktop pb-xl">
          <div className="flex justify-between items-center mb-xl border-l-8 border-primary pl-lg">
            <h3 className="font-headline text-headline-lg uppercase text-on-surface">
              Active Roster
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {teamPlayers.map((player, i) => (
              <PlayerCard key={player.id} player={player} index={i} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
