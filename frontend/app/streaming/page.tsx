"use client";

import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import { games, players } from "@/lib/mock-data";

export default function StreamingPage() {
  const liveGame = games[0];
  const bhPlayers = players.filter((p) => p.team === "Men").slice(0, 5);
  const oppPlayers = players.filter((p) => p.team === "Ladies").slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <TopNavBar />

      <main className="flex-1">
        {/* Live Indicator Bar */}
        <div className="bg-primary text-on-primary py-2 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 rounded-full bg-white pulse-live" />
            <span className="font-headline text-xs tracking-widest uppercase">
              Live Now — Bravehearts vs {liveGame.opponent}
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Stream Area */}
            <div className="lg:col-span-2">
              {/* Video Embed */}
              <div className="aspect-video bg-surface-container-highest border border-outline-variant shadow-lg relative overflow-hidden">
                {/* Placeholder for stream embed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[80px] mb-4 opacity-30">
                    play_circle
                  </span>
                  <p className="font-headline text-2xl uppercase opacity-50">
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
              </div>

              {/* Scoreboard Below Stream */}
              <div className="bg-surface-container-lowest border border-outline-variant border-t-0 p-4 md:p-12 shadow-sm">
                <div className="flex items-center justify-between gap-2 md:gap-0">
                  {/* Bravehearts */}
                  <div className="text-center flex-1 min-w-0">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-primary text-white flex items-center justify-center font-black text-lg md:text-2xl mb-2 md:mb-4 mx-auto">
                      BH
                    </div>
                    <p className="font-headline text-sm md:text-2xl font-black uppercase text-on-surface truncate">
                      Bravehearts
                    </p>
                    <p className="font-stats text-4xl md:text-7xl text-primary mt-1 md:mt-2">
                      {liveGame.scoreFor}
                    </p>
                  </div>

                  {/* Center Info */}
                  <div className="text-center px-2 md:px-12 flex-shrink-0">
                    <div className="bg-surface-container-highest px-2 md:px-4 py-1 font-headline text-[10px] md:text-xs text-on-surface-variant mb-2 md:mb-4 inline-block">
                      Q3 — 04:12
                    </div>
                    <p className="font-headline text-[10px] md:text-xs text-on-surface-variant uppercase hidden sm:block">
                      {liveGame.venue}
                    </p>
                  </div>

                  {/* Opponent */}
                  <div className="text-center flex-1 min-w-0">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-surface-container-high text-on-surface flex items-center justify-center font-black text-lg md:text-2xl mb-2 md:mb-4 mx-auto">
                      {liveGame.opponent
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <p className="font-headline text-sm md:text-2xl font-black uppercase text-on-surface truncate">
                      {liveGame.opponent}
                    </p>
                    <p className="font-stats text-4xl md:text-7xl text-on-surface mt-1 md:mt-2">
                      {liveGame.scoreAgainst}
                    </p>
                  </div>
                </div>
              </div>

              {/* Game Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 bg-surface-container-low border-l-4 border-primary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Field Goal %
                  </p>
                  <p className="font-stats text-2xl text-on-surface">
                    48.2
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low border-l-4 border-secondary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    3-Point %
                  </p>
                  <p className="font-stats text-2xl text-on-surface">
                    36.7
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low border-l-4 border-primary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Free Throw %
                  </p>
                  <p className="font-stats text-2xl text-on-surface">
                    82.1
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low border-l-4 border-secondary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Turnovers
                  </p>
                  <p className="font-stats text-2xl text-on-surface">
                    8
                  </p>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Team Lineups */}
              <div className="bg-surface-container-lowest border border-outline-variant shadow-sm">
                <div className="p-4 border-b border-outline-variant bg-surface-container-highest/50">
                  <h3 className="font-headline text-2xl text-on-surface">
                    Lineups
                  </h3>
                </div>
                <div className="p-4">
                  <p className="font-headline text-xs text-primary mb-2">
                    BRAVEHEARTS
                  </p>
                  <div className="space-y-2 mb-6">
                    {bhPlayers.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-4 text-sm"
                      >
                        <span className="font-stats text-primary w-6">
                          {String(p.jerseyNumber).padStart(2, "0")}
                        </span>
                        <span className="font-body text-on-surface flex-1">
                          {p.fullName}
                        </span>
                        <span className="font-headline text-xs text-on-surface-variant">
                          {p.position}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="font-headline text-xs text-on-surface-variant mb-2">
                    {liveGame.opponent.toUpperCase()}
                  </p>
                  <div className="space-y-2">
                    {oppPlayers.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-4 text-sm"
                      >
                        <span className="font-stats text-on-surface-variant w-6">
                          {String(p.jerseyNumber).padStart(2, "0")}
                        </span>
                        <span className="font-body text-on-surface flex-1">
                          {p.fullName}
                        </span>
                        <span className="font-headline text-xs text-on-surface-variant">
                          {p.position}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-surface-container-lowest border border-outline-variant shadow-sm">
                <div className="p-4 border-b border-outline-variant bg-surface-container-highest/50">
                  <h3 className="font-headline text-2xl text-on-surface">
                    Game Leaders
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                    <div>
                      <p className="font-headline text-xs text-on-surface-variant text-[10px]">
                        POINTS
                      </p>
                      <p className="font-body text-on-surface font-bold">
                        K. Mwale
                      </p>
                    </div>
                    <p className="font-stats text-2xl text-primary">
                      24
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                    <div>
                      <p className="font-headline text-xs text-on-surface-variant text-[10px]">
                        REBOUNDS
                      </p>
                      <p className="font-body text-on-surface font-bold">
                        C. Banda
                      </p>
                    </div>
                    <p className="font-stats text-2xl text-primary">
                      12
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-headline text-xs text-on-surface-variant text-[10px]">
                        ASSISTS
                      </p>
                      <p className="font-body text-on-surface font-bold">
                        T. Phiri
                      </p>
                    </div>
                    <p className="font-stats text-2xl text-primary">
                      8
                    </p>
                  </div>
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
