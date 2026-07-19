"use client";

import { useParams } from "next/navigation";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import { getPlayerById, getPlayersByTeam, getTeamByCategory } from "@/lib/mock-data";
import Link from "next/link";

export default function PlayerDetailPage() {
  const params = useParams();
  const teamSlug = params.team as string;
  const playerId = parseInt(params.id as string);

  const player = getPlayerById(playerId);
  const teamPlayers = getPlayersByTeam(teamSlug);
  const team = getTeamByCategory(teamSlug);

  if (!player) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopNavBar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-headline text-4xl md:text-6xl font-black text-on-surface mb-4">
              Player Not Found
            </h1>
            <p className="font-body text-on-surface-variant mb-6">
              The player you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href={`/roster/${teamSlug}`}
              className="bg-primary text-on-primary px-6 py-3 font-headline text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all inline-block"
            >
              Back to Roster
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const ppg = (player.points / 20).toFixed(1);
  const rpg = (player.rebounds / 20).toFixed(1);
  const apg = (player.assists / 20).toFixed(1);
  const spg = (player.steals / 20).toFixed(1);
  const bpg = (player.blocks / 20).toFixed(1);

  const statBars = [
    { label: "Points", value: player.points, max: 600, color: "bg-primary" },
    { label: "Assists", value: player.assists, max: 250, color: "bg-secondary" },
    { label: "Rebounds", value: player.rebounds, max: 450, color: "bg-primary" },
    { label: "Steals", value: player.steals, max: 80, color: "bg-secondary" },
    { label: "Blocks", value: player.blocks, max: 100, color: "bg-primary" },
  ];

  // Find teammates (same team, excluding current player)
  const teammates = teamPlayers
    .filter((p) => p.id !== player.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-surface-container-highest relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Player Image */}
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden bg-surface-container-high max-w-md mx-auto md:mx-0">
                  <img
                    src={player.photo}
                    alt={player.fullName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-stats text-6xl md:text-8xl text-white drop-shadow-lg">
                      {String(player.jerseyNumber).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-t-8 border-r-8 border-primary opacity-30 hidden md:block" />
              </div>

              {/* Player Info */}
              <div>
                <Link
                  href={`/roster/${teamSlug}`}
                  className="inline-flex items-center gap-1 font-headline text-xs text-primary mb-4 hover:underline"
                >
                  <span className="material-symbols-outlined text-sm">
                    arrow_back
                  </span>
                  Back to {team?.name || "Roster"}
                </Link>

                <div className="bg-primary text-on-primary px-4 py-1 font-headline text-xs mb-4 inline-block">
                  {player.position} — {player.team}
                </div>

                <h1 className="font-headline text-3xl md:text-5xl font-black uppercase leading-none mb-2">
                  {player.fullName.split(" ").slice(0, -1).join(" ")}
                  <br />
                  <span className="text-primary">
                    {player.fullName.split(" ").slice(-1)}
                  </span>
                </h1>

                <div className="flex flex-wrap gap-4 md:gap-6 mt-6 mb-8">
                  <div>
                    <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Age
                    </p>
                    <p className="font-stats text-xl font-bold">{player.age}</p>
                  </div>
                  <div>
                    <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Height
                    </p>
                    <p className="font-stats text-xl font-bold">
                      {Math.floor(player.height / 100)}m {(player.height % 100).toString().padStart(2, "0")}cm
                    </p>
                  </div>
                  <div>
                    <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Market Value
                    </p>
                    <p className="font-stats text-xl font-bold text-secondary">
                      MWK {player.marketValue.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { label: "PPG", value: ppg },
                    { label: "RPG", value: rpg },
                    { label: "APG", value: apg },
                    { label: "SPG", value: spg },
                    { label: "BPG", value: bpg },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-surface-container p-2 md:p-3 text-center border border-outline-variant"
                    >
                      <p className="font-headline text-[8px] md:text-[10px] text-on-surface-variant uppercase">
                        {stat.label}
                      </p>
                      <p className="font-stats text-base md:text-lg font-bold text-on-surface">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Season Stats */}
        <section className="py-8 md:py-12 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="border-l-8 border-primary pl-4 md:pl-6 mb-6 md:mb-8">
            <p className="font-headline text-xs text-primary font-bold uppercase tracking-widest">
              Season 2026
            </p>
            <h2 className="font-headline text-2xl md:text-3xl uppercase text-on-surface">
              Performance Stats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Stat Bars */}
            <div className="space-y-4">
              {statBars.map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-headline text-xs uppercase tracking-wider text-on-surface">
                      {stat.label}
                    </span>
                    <span className="font-stats text-sm font-bold text-on-surface-variant">
                      {stat.value}
                    </span>
                  </div>
                  <div className="h-3 bg-surface-container-highest overflow-hidden">
                    <div
                      className={`h-full ${stat.color} transition-all duration-1000`}
                      style={{
                        width: `${Math.min((stat.value / stat.max) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Season Summary */}
            <div className="bg-surface-container-lowest border border-outline-variant p-6 md:p-8">
              <h3 className="font-headline text-lg font-bold uppercase mb-6 text-on-surface">
                Season Summary
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container p-4 border-l-4 border-primary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Total Points
                  </p>
                  <p className="font-stats text-2xl font-bold text-primary">
                    {player.points}
                  </p>
                </div>
                <div className="bg-surface-container p-4 border-l-4 border-secondary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Total Assists
                  </p>
                  <p className="font-stats text-2xl font-bold text-secondary">
                    {player.assists}
                  </p>
                </div>
                <div className="bg-surface-container p-4 border-l-4 border-primary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Total Rebounds
                  </p>
                  <p className="font-stats text-2xl font-bold text-primary">
                    {player.rebounds}
                  </p>
                </div>
                <div className="bg-surface-container p-4 border-l-4 border-secondary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Games Played
                  </p>
                  <p className="font-stats text-2xl font-bold text-secondary">
                    20
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teammates */}
        {teammates.length > 0 && (
          <section className="py-8 md:py-12 px-4 md:px-10 bg-surface-container-high">
            <div className="max-w-7xl mx-auto">
              <div className="border-l-8 border-secondary pl-4 md:pl-6 mb-6 md:mb-8">
                <p className="font-headline text-xs text-secondary font-bold uppercase tracking-widest">
                  {player.team} Division
                </p>
                <h2 className="font-headline text-2xl md:text-3xl uppercase text-on-surface">
                  Teammates
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {teammates.map((tm) => (
                  <Link
                    key={tm.id}
                    href={`/roster/${teamSlug}/${tm.id}`}
                    className="bg-surface-container-lowest border border-outline-variant overflow-hidden group hover:border-primary transition-all"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden bg-surface-container-high">
                      <img
                        src={tm.photo}
                        alt={tm.fullName}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <p className="font-headline text-xs text-white font-bold truncate">
                          {tm.fullName.split(" ").slice(-1)}
                        </p>
                        <p className="font-headline text-[10px] text-white/70">
                          #{tm.jerseyNumber} — {tm.position}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
