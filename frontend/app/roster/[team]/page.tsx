"use client";

import { useParams } from "next/navigation";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  getPlayersByTeam,
  getTeamByCategory,
  getWinRate,
  getRecentGames,
  getTeamMetrics,
  getTrainingStats,
} from "@/lib/mock-data";
import type { Player } from "@/types";

function PlayerCard({
  player,
  index,
  teamSlug,
}: {
  player: Player;
  index: number;
  teamSlug: string;
}) {
  const ppg = (player.points / 20).toFixed(1);
  const rpg = (player.rebounds / 20).toFixed(1);
  const apg = (player.assists / 20).toFixed(1);

  return (
    <Link
      href={`/roster/${teamSlug}/${player.id}`}
      className="block bg-surface-container-low border border-surface-container-highest group relative overflow-hidden player-card-glow transition-all duration-300 animate-stagger-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-surface-container-high">
        <img
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
          src={player.photo}
          alt={player.fullName}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="font-stats text-2xl text-primary drop-shadow-md">
            {String(player.jerseyNumber).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <h4 className="font-headline text-2xl uppercase leading-none text-on-surface">
            {player.fullName.split(" ").slice(0, -1).join(" ")}
            <br />
            {player.fullName.split(" ").slice(-1)}
          </h4>
          <p className="font-headline text-xs text-primary mt-1">
            {player.position}
          </p>
        </div>
      </div>
      <div className="p-4 bg-surface border-t border-surface-container-highest">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center border-r border-surface-container-highest">
            <p className="font-headline text-xs text-on-surface-variant opacity-60 text-[10px]">
              PPG
            </p>
            <p className="font-stats text-2xl text-on-surface">{ppg}</p>
          </div>
          <div className="text-center border-r border-surface-container-highest">
            <p className="font-headline text-xs text-on-surface-variant opacity-60 text-[10px]">
              RPG
            </p>
            <p className="font-stats text-2xl text-on-surface">{rpg}</p>
          </div>
          <div className="text-center">
            <p className="font-headline text-xs text-on-surface-variant opacity-60 text-[10px]">
              APG
            </p>
            <p className="font-stats text-2xl text-on-surface">{apg}</p>
          </div>
        </div>
        <div className="w-full bg-surface-container-high text-on-surface py-2 font-headline text-xs border border-outline-variant text-center group-hover:bg-primary group-hover:text-on-primary transition-all">
          View Profile
        </div>
      </div>
    </Link>
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
  const teamMetrics = getTeamMetrics(teamSlug);
  const trainingStats = getTrainingStats(teamSlug);

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
        <section className="relative min-h-[300px] md:h-[400px] flex items-end bg-surface-container-highest">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          <div className="relative z-10 px-4 md:px-10 py-8 md:pb-12 w-full">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="bg-primary px-4 py-1 font-headline text-xs text-on-primary">
                {teamBadge}
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container font-headline text-xs">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Live Scouting
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-7xl text-on-surface uppercase leading-none mb-2">
              The {team?.name.split(" ").slice(-1)} Team
            </h2>
            <p className="font-body text-sm md:text-lg text-on-surface-variant max-w-2xl">
              {team?.description}
            </p>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="px-4 md:px-10 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="md:col-span-2 bg-surface-container border border-surface-container-highest p-4 md:p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <p className="font-headline text-xs text-on-surface-variant mb-2 md:mb-4">
                Division Win Rate
              </p>
              <p className="font-stats text-2xl text-secondary">
                {winRate}%
              </p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2 md:mb-4">
                Active Players
              </p>
              <p className="font-stats text-2xl text-on-surface">
                {teamPlayers.length}
              </p>
            </div>
            <div className="bg-primary-container p-4 md:p-6 text-on-primary-container border-l-4 border-on-surface">
              <p className="font-headline text-xs opacity-80 mb-2 md:mb-4">
                Next Match
              </p>
              <p className="font-headline text-xl md:text-2xl font-black uppercase">
                vs. {nextGame?.opponent || "TBD"}
              </p>
              <p className="font-body text-sm md:text-base mt-1 opacity-90">
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

        {/* Training & Performance Stats */}
        <section className="px-4 md:px-10 py-8 md:py-12 bg-surface-container-low">
          <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-secondary pl-4 md:pl-6">
            <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Training & Performance
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary opacity-10 -mr-12 -mt-12 rounded-full" />
              <p className="font-headline text-xs text-on-surface-variant mb-2">Win Rate - Last 10</p>
              <p className="font-stats text-3xl text-secondary">{trainingStats.winRate}%</p>
              <div className="mt-3 h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-secondary" style={{ width: `${trainingStats.winRate}%` }} />
              </div>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary opacity-10 -mr-12 -mt-12 rounded-full" />
              <p className="font-headline text-xs text-on-surface-variant mb-2">Training Hours</p>
              <p className="font-stats text-3xl text-primary">{trainingStats.trainingHours}+</p>
              <p className="font-body text-xs text-on-surface-variant mt-2">This Season</p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary opacity-10 -mr-12 -mt-12 rounded-full" />
              <p className="font-headline text-xs text-on-surface-variant mb-2">Total Points Scored</p>
              <p className="font-stats text-3xl text-tertiary">{trainingStats.totalPoints}</p>
              <p className="font-body text-xs text-on-surface-variant mt-2">This Season</p>
            </div>
          </div>

          {/* Key Team Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-primary p-4 md:p-6 text-on-primary text-center">
              <p className="font-headline text-xs opacity-80 mb-2">Points Per Game</p>
              <p className="font-stats text-3xl font-bold">{teamMetrics.pointsPerGame}</p>
            </div>
            <div className="bg-secondary p-4 md:p-6 text-on-secondary text-center">
              <p className="font-headline text-xs opacity-80 mb-2">Team Rebounds</p>
              <p className="font-stats text-3xl font-bold">{teamMetrics.teamRebounds}</p>
            </div>
            <div className="bg-tertiary p-4 md:p-6 text-on-tertiary text-center">
              <p className="font-headline text-xs opacity-80 mb-2">Avg Assist Rate</p>
              <p className="font-stats text-3xl font-bold">{teamMetrics.avgAssistRate}</p>
            </div>
          </div>
        </section>

        {/* Player Grid */}
        <section className="px-4 md:px-10 py-8 md:py-12">
          <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-primary pl-4 md:pl-6">
            <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Active Roster
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {teamPlayers.map((player, i) => (
              <PlayerCard
                key={player.id}
                player={player}
                index={i}
                teamSlug={teamSlug}
              />
            ))}
          </div>
        </section>

        {/* Squad Depth Table */}
        <section className="px-4 md:px-10 py-8 md:py-12 bg-surface-container-low">
          <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-primary pl-4 md:pl-6">
            <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Squad Depth
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container border-b border-surface-container-highest">
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase">No</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase">Player</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase">Position</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase">Height</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase">Year</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {teamPlayers.map((player) => (
                  <tr key={player.id} className="border-b border-surface-container-highest hover:bg-surface-container transition-colors">
                    <td className="px-4 py-3 font-stats text-lg text-primary">{String(player.jerseyNumber).padStart(2, "0")}</td>
                    <td className="px-4 py-3">
                      <Link href={`/roster/${teamSlug}/${player.id}`} className="font-headline text-sm text-on-surface hover:text-primary transition-colors">
                        {player.fullName}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-headline text-sm text-on-surface-variant">{player.position}</td>
                    <td className="px-4 py-3 font-headline text-sm text-on-surface-variant">
                      {(player.height / 30.48).toFixed(0)}&apos;{(player.height % 30.48 / 2.54).toFixed(0)}&quot;
                    </td>
                    <td className="px-4 py-3 font-headline text-sm text-on-surface-variant">{player.year || "N/A"}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs font-headline ${
                        player.status === "Starter"
                          ? "bg-secondary text-on-secondary"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}>
                        {player.status || "Active"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Live Performance Analysis */}
        <section className="px-4 md:px-10 py-8 md:py-12">
          <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-secondary pl-4 md:pl-6">
            <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Performance Analysis
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2">Offensive Rating</p>
              <p className="font-stats text-2xl text-secondary">{trainingStats.offensiveRating}</p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2">Defensive Rating</p>
              <p className="font-stats text-2xl text-primary">{trainingStats.defensiveRating}</p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2">Net Rating</p>
              <p className="font-stats text-2xl text-tertiary">+{(trainingStats.offensiveRating - trainingStats.defensiveRating).toFixed(1)}</p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2">Pace</p>
              <p className="font-stats text-2xl text-on-surface">102.1</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
