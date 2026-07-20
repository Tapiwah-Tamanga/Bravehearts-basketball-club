"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
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
import type { Player, Position } from "@/types";

const positions: Position[] = ["PG", "SG", "SF", "PF", "C"];

function PlayerCard({
  player,
  index,
  teamSlug,
  isGirlsTeam,
}: {
  player: Player;
  index: number;
  teamSlug: string;
  isGirlsTeam?: boolean;
}) {
  const ppg = (player.points / 20).toFixed(1);
  const rpg = (player.rebounds / 20).toFixed(1);
  const apg = (player.assists / 20).toFixed(1);

  return (
    <Link
      href={`/roster/${teamSlug}/${player.id}`}
      className="block bg-surface-container-low border border-surface-container-highest group relative overflow-hidden transition-all duration-500 animate-stagger-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-primary" />
      
      <div className="aspect-[3/4] relative overflow-hidden bg-surface-container-high">
        <img
          className="player-card-image w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform"
          src={player.photo}
          alt={player.fullName}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent" />
        
        {/* Jersey number badge */}
        <div className="absolute top-4 right-4">
          <span className="font-stats text-3xl text-primary drop-shadow-lg">
            {String(player.jerseyNumber).padStart(2, "0")}
          </span>
        </div>

        {/* Position badge */}
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 text-xs font-headline font-bold uppercase tracking-wider bg-primary text-on-primary">
            {player.position}
          </span>
        </div>

        {/* Player name overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="font-headline text-2xl uppercase leading-none text-on-surface drop-shadow-md">
            {player.fullName.split(" ").slice(0, -1).join(" ")}
            <br />
            <span className="text-primary">
              {player.fullName.split(" ").slice(-1)}
            </span>
          </h4>
          {player.year && (
            <p className="font-body text-xs text-on-surface-variant mt-1 opacity-80">
              {player.year} • {player.status || "Active"}
            </p>
          )}
        </div>
      </div>

      <div className="p-4 bg-surface border-t border-surface-container-highest">
        {/* Stats grid - 2 columns for Girls, 3 for others */}
        <div className={`grid ${isGirlsTeam ? 'grid-cols-2' : 'grid-cols-3'} gap-2 mb-4`}>
          <div className="text-center border-r border-surface-container-highest">
            <p className="font-headline text-[10px] text-on-surface-variant opacity-60 uppercase tracking-wider">
              PPG
            </p>
            <p className="font-stats text-xl text-on-surface">{ppg}</p>
          </div>
          <div className={`text-center ${!isGirlsTeam ? 'border-r border-surface-container-highest' : ''}`}>
            <p className="font-headline text-[10px] text-on-surface-variant opacity-60 uppercase tracking-wider">
              RPG
            </p>
            <p className="font-stats text-xl text-on-surface">{rpg}</p>
          </div>
          {!isGirlsTeam && (
            <div className="text-center">
              <p className="font-headline text-[10px] text-on-surface-variant opacity-60 uppercase tracking-wider">
                APG
              </p>
              <p className="font-stats text-xl text-on-surface">{apg}</p>
            </div>
          )}
        </div>

        {/* Shooting percentages if available */}
        {player.threePointPct !== undefined && (
          <div className="flex justify-between mb-3 px-2">
            <span className="font-stats text-xs text-on-surface-variant">
              3P%: <span className="text-primary">{player.threePointPct}</span>
            </span>
            {player.freeThrowPct !== undefined && (
              <span className="font-stats text-xs text-on-surface-variant">
                FT%: <span className="text-primary">{player.freeThrowPct}</span>
              </span>
            )}
          </div>
        )}

        <div className="w-full py-2.5 font-headline text-xs border border-primary text-primary text-center transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
          View Profile
        </div>
      </div>
    </Link>
  );
}

export default function RosterPage() {
  const params = useParams();
  const teamSlug = params.team as string;
  const [selectedPosition, setSelectedPosition] = useState<Position | "ALL">("ALL");

  const teamPlayers = getPlayersByTeam(teamSlug);
  const team = getTeamByCategory(teamSlug);
  const winRate = getWinRate();
  const recentGames = getRecentGames();
  const nextGame = recentGames[0];
  const teamMetrics = getTeamMetrics(teamSlug);
  const trainingStats = getTrainingStats(teamSlug);

  const filteredPlayers = selectedPosition === "ALL" 
    ? teamPlayers 
    : teamPlayers.filter(p => p.position === selectedPosition);

  const teamBadge =
    teamSlug === "youth"
      ? "Youth Academy"
      : teamSlug === "boys" || teamSlug === "girls"
        ? "Youth Academy"
        : "Elite Division";

  const isYouthTeam = teamSlug === "youth";
  const isLadiesTeam = teamSlug === "ladies";
  const isGirlsTeam = teamSlug === "girls";

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[300px] md:h-[400px] flex items-end bg-surface-container-highest noise-overlay">
          {/* Diagonal accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 transform skew-x-12 bg-primary" />
          
          <div className="relative z-10 px-4 md:px-10 py-8 md:pb-12 w-full">
            <div className="flex flex-wrap items-center gap-3 mb-3 md:mb-4">
              <span className="px-4 py-1.5 font-headline text-xs text-on-primary uppercase tracking-widest bg-primary">
                {teamBadge}
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary-container text-on-secondary-container font-headline text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Live Scouting
              </span>
              {isYouthTeam && (
                <span className="px-3 py-1.5 bg-secondary-container text-secondary font-headline text-xs uppercase tracking-wider">
                  Development Tier
                </span>
              )}
              {isLadiesTeam && (
                <span className="px-3 py-1.5 bg-primary-container text-primary font-headline text-xs uppercase tracking-wider">
                  Elite Division
                </span>
              )}
            </div>
            
            <h2 className="font-headline text-4xl md:text-7xl text-on-surface uppercase leading-none mb-2">
              The <span className="text-primary">{team?.name.split(" ").slice(-1)}</span> Team
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
              <p className="font-headline text-xs text-on-surface-variant mb-2 md:mb-4 uppercase tracking-wider">
                Division Win Rate
              </p>
              <p className="font-stats text-3xl text-secondary">
                {winRate}%
              </p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2 md:mb-4 uppercase tracking-wider">
                Active Players
              </p>
              <p className="font-stats text-3xl text-on-surface">
                {teamPlayers.length}
              </p>
            </div>
            <div className="bg-primary p-4 md:p-6 text-on-primary border-l-4 border-on-surface">
              <p className="font-headline text-xs opacity-80 mb-2 md:mb-4 uppercase tracking-wider">
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
              <p className="font-headline text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Win Rate - Last 10</p>
              <p className="font-stats text-3xl text-secondary">{trainingStats.winRate}%</p>
              <div className="mt-3 h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full transition-all duration-1000" style={{ width: `${trainingStats.winRate}%` }} />
              </div>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary opacity-10 -mr-12 -mt-12 rounded-full" />
              <p className="font-headline text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Training Hours</p>
              <p className="font-stats text-3xl text-primary">{trainingStats.trainingHours}+</p>
              <p className="font-body text-xs text-on-surface-variant mt-2">This Season</p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary opacity-10 -mr-12 -mt-12 rounded-full" />
              <p className="font-headline text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Total Points Scored</p>
              <p className="font-stats text-3xl text-tertiary">{trainingStats.totalPoints}</p>
              <p className="font-body text-xs text-on-surface-variant mt-2">This Season</p>
            </div>
          </div>

          {/* Key Team Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-primary p-4 md:p-6 text-on-primary text-center">
              <p className="font-headline text-xs opacity-80 mb-2 uppercase tracking-wider">Points Per Game</p>
              <p className="font-stats text-3xl font-bold">{teamMetrics.pointsPerGame}</p>
            </div>
            <div className="bg-secondary p-4 md:p-6 text-on-secondary text-center">
              <p className="font-headline text-xs opacity-80 mb-2 uppercase tracking-wider">Team Rebounds</p>
              <p className="font-stats text-3xl font-bold">{teamMetrics.teamRebounds}</p>
            </div>
            <div className="bg-tertiary p-4 md:p-6 text-on-tertiary text-center">
              <p className="font-headline text-xs opacity-80 mb-2 uppercase tracking-wider">Avg Assist Rate</p>
              <p className="font-stats text-3xl font-bold">{teamMetrics.avgAssistRate}</p>
            </div>
          </div>
        </section>

        {/* Player Grid with Filters */}
        <section className="px-4 md:px-10 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 md:mb-12 border-l-8 border-primary pl-4 md:pl-6">
            <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Active Roster
            </h3>
            
            {/* Position Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedPosition("ALL")}
                className={`px-3 py-1.5 font-headline text-xs uppercase tracking-wider transition-all duration-300 ${
                  selectedPosition === "ALL"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                All ({teamPlayers.length})
              </button>
              {positions.map((pos) => {
                const count = teamPlayers.filter(p => p.position === pos).length;
                if (count === 0) return null;
                return (
                  <button
                    key={pos}
                    onClick={() => setSelectedPosition(pos)}
                    className={`px-3 py-1.5 font-headline text-xs uppercase tracking-wider transition-all duration-300 ${
                      selectedPosition === pos
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                    }`}
                  >
                    {pos} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredPlayers.map((player, i) => (
              <PlayerCard
                key={player.id}
                player={player}
                index={i}
                teamSlug={teamSlug}
                isGirlsTeam={isGirlsTeam}
              />
            ))}
          </div>

          {filteredPlayers.length === 0 && (
            <div className="text-center py-12 bg-surface-container-low border border-surface-container-highest">
              <p className="font-headline text-lg text-on-surface-variant">
                No players found for position: {selectedPosition}
              </p>
            </div>
          )}
        </section>

        {/* Youth Team: Scout Booking Section */}
        {isYouthTeam && (
          <section className="px-4 md:px-10 py-8 md:py-12 bg-surface-container-low">
            <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-secondary pl-4 md:pl-6">
              <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
                Scout Booking
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container border border-surface-container-highest p-6">
                <h4 className="font-headline text-lg uppercase mb-4 text-secondary">Morning Drill</h4>
                <p className="font-body text-sm text-on-surface-variant mb-4">Available • 8:00 AM - 10:00 AM</p>
                <button className="w-full py-3 font-headline text-sm uppercase tracking-wider bg-secondary text-on-secondary transition-all duration-300 hover:opacity-90">
                  Book Session
                </button>
              </div>
              <div className="bg-surface-container border border-surface-container-highest p-6 opacity-60">
                <h4 className="font-headline text-lg uppercase mb-4 text-on-surface-variant">Scrimmage</h4>
                <p className="font-body text-sm text-on-surface-variant mb-4">Full • 4:00 PM - 6:00 PM</p>
                <button 
                  className="w-full py-3 font-headline text-sm uppercase tracking-wider bg-surface-container-high text-on-surface-variant cursor-not-allowed"
                  disabled
                >
                  Waitlist
                </button>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="px-8 py-4 font-headline text-sm uppercase tracking-wider border-2 border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-on-secondary">
                Join Waiting List
              </button>
            </div>
          </section>
        )}

        {/* Ladies Team: Draft New Player Section */}
        {isLadiesTeam && (
          <section className="px-4 md:px-10 py-8 md:py-12 bg-surface-container-low">
            <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-primary pl-4 md:pl-6">
              <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
                Draft Center
              </h3>
            </div>
            <div className="bg-surface-container border-2 border-dashed border-surface-container-highest p-8 text-center">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block">person_add</span>
              <h4 className="font-headline text-lg uppercase mb-2 text-on-surface">Draft New Player</h4>
              <p className="font-body text-sm text-on-surface-variant mb-6 max-w-md mx-auto">
                Scout and recruit new talent for the Bravehearts Ladies division. 
                Submit your recommendations for upcoming draft picks.
              </p>
              <button className="px-8 py-3 font-headline text-sm uppercase tracking-wider bg-primary text-on-primary transition-all duration-300 hover:opacity-90">
                Start Scouting
              </button>
            </div>
          </section>
        )}

        {/* Squad Depth Table */}
        <section className="px-4 md:px-10 py-8 md:py-12">
          <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-primary pl-4 md:pl-6">
            <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Squad Depth
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container border-b-2 border-primary">
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase tracking-wider">No</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase tracking-wider">Player</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase tracking-wider">Position</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase tracking-wider">Height</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase tracking-wider">Year</th>
                  <th className="px-4 py-3 text-left font-headline text-xs text-on-surface-variant uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {teamPlayers.map((player) => (
                  <tr key={player.id} className="border-b border-surface-container-highest hover:bg-surface-container transition-colors duration-200">
                    <td className="px-4 py-3 font-stats text-lg text-primary">
                      {String(player.jerseyNumber).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/roster/${teamSlug}/${player.id}`} className="font-headline text-sm text-on-surface hover:underline transition-colors">
                        {player.fullName}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 text-xs font-headline font-bold bg-primary-container text-primary">
                        {player.position}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-headline text-sm text-on-surface-variant">
                      {(player.height / 30.48).toFixed(0)}&apos;{(player.height % 30.48 / 2.54).toFixed(0)}&quot;
                    </td>
                    <td className="px-4 py-3 font-headline text-sm text-on-surface-variant">{player.year || "N/A"}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs font-headline ${
                        player.status === "Starter"
                          ? "bg-primary text-on-primary"
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

        {/* Performance Analysis */}
        <section className="px-4 md:px-10 py-8 md:py-12 bg-surface-container-low">
          <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-primary pl-4 md:pl-6">
            <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Performance Analysis
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Offensive Rating</p>
              <p className="font-stats text-2xl text-primary">{trainingStats.offensiveRating}</p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Defensive Rating</p>
              <p className="font-stats text-2xl text-secondary">{trainingStats.defensiveRating}</p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Net Rating</p>
              <p className="font-stats text-2xl text-tertiary">+{(trainingStats.offensiveRating - trainingStats.defensiveRating).toFixed(1)}</p>
            </div>
            <div className="bg-surface-container border border-surface-container-highest p-4 md:p-6">
              <p className="font-headline text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Pace</p>
              <p className="font-stats text-2xl text-on-surface">102.1</p>
            </div>
          </div>
        </section>

        {/* Recent Games with Win/Loss Indicators */}
        <section className="px-4 md:px-10 py-8 md:py-12">
          <div className="flex justify-between items-center mb-8 md:mb-12 border-l-8 border-primary pl-4 md:pl-6">
            <h3 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Recent Results
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentGames.slice(0, 6).map((game) => (
              <div 
                key={game.id}
                className={`relative bg-surface-container border border-surface-container-highest p-4 ${
                  game.result === "WIN" ? "win-indicator" : 
                  game.result === "LOSS" ? "loss-indicator" : "draw-indicator"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-headline text-xs text-on-surface-variant uppercase tracking-wider">
                    {new Date(game.gameDate).toLocaleDateString("en-MW", { weekday: "short", month: "short", day: "numeric" })}
                  </span>
                  <span className={`px-2 py-0.5 text-xs font-headline font-bold ${
                    game.result === "WIN" ? "bg-secondary text-on-secondary" :
                    game.result === "LOSS" ? "bg-error text-on-error" :
                    "bg-surface-container-high text-on-surface-variant"
                  }`}>
                    {game.result}
                  </span>
                </div>
                <p className="font-headline text-sm uppercase mb-1">vs. {game.opponent}</p>
                <p className="font-stats text-lg">
                  <span className="text-primary">{game.scoreFor}</span>
                  <span className="text-on-surface-variant mx-1">-</span>
                  <span className="text-on-surface-variant">{game.scoreAgainst}</span>
                </p>
                <p className="font-body text-xs text-on-surface-variant mt-1">{game.venue}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
