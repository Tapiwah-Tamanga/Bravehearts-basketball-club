"use client";

import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import { games, players } from "@/lib/mock-data";
import Link from "next/link";

export default function StreamingPage() {
  const liveGame = games[0];
  const bhPlayers = players.filter((p) => p.team === "Men").slice(0, 5);
  const oppPlayers = players.filter((p) => p.team === "Ladies").slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <TopNavBar />

      <main className="flex-1">
        {/* Live Indicator Bar */}
        <div className="bg-primary text-on-primary py-2.5 text-center kinetic-border">
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 rounded-full bg-white pulse-live" />
            <span className="font-headline text-xs tracking-widest uppercase">
              Live Now — Bravehearts vs {liveGame.opponent}
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Stream Area */}
            <div className="lg:col-span-2">
              {/* Video Embed */}
              <div className="aspect-video bg-surface-container-highest border border-outline-variant shadow-lg relative overflow-hidden group">
                {/* Placeholder for stream embed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[80px] mb-4 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                    play_circle
                  </span>
                  <p className="font-headline text-2xl uppercase opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                    Live Stream
                  </p>
                  <p className="font-body text-sm opacity-40 mt-2">
                    Replace with YouTube/Twitch embed URL
                  </p>
                  {/* 
                    To embed a real stream, replace this div with:
                    <iframe 
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                      className="w-full h-full"
                      allow="autoplay" 
                    />
                  */}
                </div>
                
                {/* Stream overlay controls */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button className="bg-black/50 text-white p-2 hover:bg-black/70 transition-colors">
                      <span className="material-symbols-outlined text-sm">volume_up</span>
                    </button>
                    <button className="bg-black/50 text-white p-2 hover:bg-black/70 transition-colors">
                      <span className="material-symbols-outlined text-sm">settings</span>
                    </button>
                  </div>
                  <button className="bg-black/50 text-white p-2 hover:bg-black/70 transition-colors">
                    <span className="material-symbols-outlined text-sm">fullscreen</span>
                  </button>
                </div>
              </div>

              {/* Scoreboard Below Stream */}
              <div className="bg-surface-container-lowest border border-outline-variant border-t-0 p-4 md:p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4 md:gap-0">
                  {/* Bravehearts */}
                  <div className="text-center flex-1 min-w-0">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-primary text-white flex items-center justify-center font-black text-xl md:text-3xl mb-3 md:mb-4 mx-auto team-men">
                      BH
                    </div>
                    <p className="font-headline text-sm md:text-2xl font-black uppercase text-on-surface truncate">
                      Bravehearts
                    </p>
                    <p className="font-stats text-5xl md:text-8xl text-primary mt-2 md:mt-3">
                      {liveGame.scoreFor}
                    </p>
                  </div>

                  {/* Center Info */}
                  <div className="text-center px-4 md:px-12 flex-shrink-0">
                    <div className="bg-surface-container-highest px-3 md:px-6 py-1.5 font-headline text-[10px] md:text-xs text-on-surface-variant mb-2 md:mb-4 inline-block">
                      Q3 — 04:12
                    </div>
                    <p className="font-headline text-[10px] md:text-xs text-on-surface-variant uppercase hidden sm:block">
                      {liveGame.venue}
                    </p>
                    <div className="mt-4 flex justify-center gap-4">
                      <div className="text-center">
                        <p className="font-headline text-[10px] text-on-surface-variant uppercase">Fouls</p>
                        <p className="font-stats text-sm text-on-surface">14</p>
                      </div>
                      <div className="text-center">
                        <p className="font-headline text-[10px] text-on-surface-variant uppercase">Timeouts</p>
                        <p className="font-stats text-sm text-on-surface">3</p>
                      </div>
                    </div>
                  </div>

                  {/* Opponent */}
                  <div className="text-center flex-1 min-w-0">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-surface-container-high text-on-surface flex items-center justify-center font-black text-xl md:text-3xl mb-3 md:mb-4 mx-auto">
                      {liveGame.opponent
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <p className="font-headline text-sm md:text-2xl font-black uppercase text-on-surface truncate">
                      {liveGame.opponent}
                    </p>
                    <p className="font-stats text-5xl md:text-8xl text-on-surface mt-2 md:mt-3">
                      {liveGame.scoreAgainst}
                    </p>
                  </div>
                </div>
              </div>

              {/* Game Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 bg-surface-container-low border-l-4 border-primary hover:bg-surface-container transition-colors duration-300">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-wider">
                    Field Goal %
                  </p>
                  <p className="font-stats text-2xl text-on-surface">
                    48.2
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low border-l-4 border-secondary hover:bg-surface-container transition-colors duration-300">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-wider">
                    3-Point %
                  </p>
                  <p className="font-stats text-2xl text-on-surface">
                    36.7
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low border-l-4 border-primary hover:bg-surface-container transition-colors duration-300">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-wider">
                    Free Throw %
                  </p>
                  <p className="font-stats text-2xl text-on-surface">
                    82.1
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low border-l-4 border-secondary hover:bg-surface-container transition-colors duration-300">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-wider">
                    Turnovers
                  </p>
                  <p className="font-stats text-2xl text-on-surface">
                    8
                  </p>
                </div>
              </div>

              {/* Quarter Scores */}
              <div className="mt-6 bg-surface-container-lowest border border-outline-variant p-4 md:p-6">
                <h4 className="font-headline text-xs text-on-surface-variant uppercase tracking-wider mb-4">Quarter Scores</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-outline-variant">
                        <th className="px-4 py-2 text-left font-headline text-[10px] text-on-surface-variant uppercase">Team</th>
                        <th className="px-4 py-2 text-center font-headline text-[10px] text-on-surface-variant uppercase">Q1</th>
                        <th className="px-4 py-2 text-center font-headline text-[10px] text-on-surface-variant uppercase">Q2</th>
                        <th className="px-4 py-2 text-center font-headline text-[10px] text-on-surface-variant uppercase">Q3</th>
                        <th className="px-4 py-2 text-center font-headline text-[10px] text-on-surface-variant uppercase">Q4</th>
                        <th className="px-4 py-2 text-center font-headline text-[10px] text-on-surface-variant uppercase font-bold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-outline-variant">
                        <td className="px-4 py-2 font-headline text-xs text-on-surface">Bravehearts</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-on-surface">22</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-on-surface">28</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-primary font-bold">18</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-on-surface-variant">—</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-primary font-bold">{liveGame.scoreFor}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-headline text-xs text-on-surface">{liveGame.opponent}</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-on-surface">20</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-on-surface">24</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-on-surface font-bold">16</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-on-surface-variant">—</td>
                        <td className="px-4 py-2 text-center font-stats text-sm text-on-surface font-bold">{liveGame.scoreAgainst}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Team Lineups */}
              <div className="bg-surface-container-lowest border border-outline-variant shadow-sm overflow-hidden">
                <div className="p-4 border-b border-outline-variant bg-surface-container-highest/50">
                  <h3 className="font-headline text-lg uppercase text-on-surface">
                    Lineups
                  </h3>
                </div>
                <div className="p-4">
                  <p className="font-headline text-xs text-primary mb-3 uppercase tracking-wider">
                    BRAVEHEARTS
                  </p>
                  <div className="space-y-2 mb-6">
                    {bhPlayers.map((p) => (
                      <Link
                        key={p.id}
                        href={`/roster/men/${p.id}`}
                        className="flex items-center gap-4 text-sm p-2 hover:bg-surface-container transition-colors duration-200 group"
                      >
                        <span className="font-stats text-primary w-8 text-sm group-hover:scale-110 transition-transform">
                          {String(p.jerseyNumber).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-body text-on-surface text-sm truncate group-hover:text-primary transition-colors">
                            {p.fullName}
                          </p>
                          <p className="font-headline text-[10px] text-on-surface-variant">
                            {p.position} • {p.points} PTS
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                          chevron_right
                        </span>
                      </Link>
                    ))}
                  </div>

                  <p className="font-headline text-xs text-on-surface-variant mb-3 uppercase tracking-wider">
                    {liveGame.opponent.toUpperCase()}
                  </p>
                  <div className="space-y-2">
                    {oppPlayers.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-4 text-sm p-2"
                      >
                        <span className="font-stats text-on-surface-variant w-8 text-sm">
                          {String(p.jerseyNumber).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-body text-on-surface text-sm truncate">
                            {p.fullName}
                          </p>
                          <p className="font-headline text-[10px] text-on-surface-variant">
                            {p.position} • {p.points} PTS
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Game Leaders */}
              <div className="bg-surface-container-lowest border border-outline-variant shadow-sm overflow-hidden">
                <div className="p-4 border-b border-outline-variant bg-surface-container-highest/50">
                  <h3 className="font-headline text-lg uppercase text-on-surface">
                    Game Leaders
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex justify-between items-center border-b border-outline-variant pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-stats text-xs">
                        PTS
                      </div>
                      <div>
                        <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                          POINTS
                        </p>
                        <p className="font-body text-on-surface font-bold text-sm">
                          K. Mwale
                        </p>
                      </div>
                    </div>
                    <p className="font-stats text-2xl text-primary">
                      24
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline-variant pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary text-white flex items-center justify-center font-stats text-xs">
                        REB
                      </div>
                      <div>
                        <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                          REBOUNDS
                        </p>
                        <p className="font-body text-on-surface font-bold text-sm">
                          C. Banda
                        </p>
                      </div>
                    </div>
                    <p className="font-stats text-2xl text-secondary">
                      12
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-stats text-xs">
                        AST
                      </div>
                      <div>
                        <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                          ASSISTS
                        </p>
                        <p className="font-body text-on-surface font-bold text-sm">
                          T. Phiri
                        </p>
                      </div>
                    </div>
                    <p className="font-stats text-2xl text-primary">
                      8
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Plays */}
              <div className="bg-surface-container-lowest border border-outline-variant shadow-sm overflow-hidden">
                <div className="p-4 border-b border-outline-variant bg-surface-container-highest/50">
                  <h3 className="font-headline text-lg uppercase text-on-surface">
                    Recent Plays
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { time: "4:12", play: "K. Mwale 3PT Shot", score: "78-72", type: "score" },
                    { time: "4:45", play: "C. Banda Defensive Rebound", score: "75-72", type: "rebound" },
                    { time: "5:02", play: "T. Phiri Assist", score: "75-72", type: "assist" },
                    { time: "5:18", play: "K. Mwale Layup", score: "75-72", type: "score" },
                    { time: "5:42", play: "B. Kachale Steal", score: "73-72", type: "steal" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-outline-variant last:border-0 last:pb-0">
                      <span className="font-stats text-xs text-on-surface-variant w-12 flex-shrink-0">
                        {item.time}
                      </span>
                      <div className="flex-1">
                        <p className="font-body text-xs text-on-surface">{item.play}</p>
                        <p className="font-stats text-[10px] text-on-surface-variant">{item.score}</p>
                      </div>
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 ${
                        item.type === "score" ? "bg-primary" :
                        item.type === "rebound" ? "bg-secondary" :
                        item.type === "steal" ? "bg-tertiary" :
                        "bg-surface-container-high"
                      }`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
