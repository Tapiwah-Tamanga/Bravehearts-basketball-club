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
        <div className="bg-primary text-on-primary py-sm text-center">
          <div className="flex items-center justify-center gap-md">
            <span className="w-3 h-3 rounded-full bg-white pulse-live" />
            <span className="font-headline text-label-caps tracking-widest uppercase">
              Live Now — Bravehearts vs {liveGame.opponent}
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-margin-desktop py-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Main Stream Area */}
            <div className="lg:col-span-2">
              {/* Video Embed */}
              <div className="aspect-video bg-surface-container-highest border border-outline-variant shadow-lg relative overflow-hidden">
                {/* Placeholder for stream embed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[80px] mb-md opacity-30">
                    play_circle
                  </span>
                  <p className="font-headline text-headline-md uppercase opacity-50">
                    Live Stream
                  </p>
                  <p className="font-body text-sm opacity-40 mt-sm">
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
              <div className="bg-surface-container-lowest border border-outline-variant border-t-0 p-xl shadow-sm">
                <div className="flex items-center justify-between">
                  {/* Bravehearts */}
                  <div className="text-center flex-1">
                    <div className="w-20 h-20 bg-primary text-white flex items-center justify-center font-black text-2xl mb-md mx-auto">
                      BH
                    </div>
                    <p className="font-headline text-headline-md font-black uppercase text-on-surface">
                      Bravehearts
                    </p>
                    <p className="font-stats text-display-lg text-primary mt-sm">
                      {liveGame.scoreFor}
                    </p>
                  </div>

                  {/* Center Info */}
                  <div className="text-center px-xl">
                    <div className="bg-surface-container-highest px-md py-xs font-headline text-label-caps text-on-surface-variant mb-md inline-block">
                      Q3 — 04:12
                    </div>
                    <p className="font-headline text-label-caps text-on-surface-variant uppercase">
                      {liveGame.venue}
                    </p>
                  </div>

                  {/* Opponent */}
                  <div className="text-center flex-1">
                    <div className="w-20 h-20 bg-surface-container-high text-on-surface flex items-center justify-center font-black text-2xl mb-md mx-auto">
                      {liveGame.opponent
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <p className="font-headline text-headline-md font-black uppercase text-on-surface">
                      {liveGame.opponent}
                    </p>
                    <p className="font-stats text-display-lg text-on-surface mt-sm">
                      {liveGame.scoreAgainst}
                    </p>
                  </div>
                </div>
              </div>

              {/* Game Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-md mt-lg">
                <div className="p-md bg-surface-container-low border-l-4 border-primary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Field Goal %
                  </p>
                  <p className="font-stats text-headline-md text-on-surface">
                    48.2
                  </p>
                </div>
                <div className="p-md bg-surface-container-low border-l-4 border-secondary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    3-Point %
                  </p>
                  <p className="font-stats text-headline-md text-on-surface">
                    36.7
                  </p>
                </div>
                <div className="p-md bg-surface-container-low border-l-4 border-primary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Free Throw %
                  </p>
                  <p className="font-stats text-headline-md text-on-surface">
                    82.1
                  </p>
                </div>
                <div className="p-md bg-surface-container-low border-l-4 border-secondary">
                  <p className="font-headline text-[10px] text-on-surface-variant uppercase">
                    Turnovers
                  </p>
                  <p className="font-stats text-headline-md text-on-surface">
                    8
                  </p>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="lg:col-span-1 space-y-lg">
              {/* Team Lineups */}
              <div className="bg-surface-container-lowest border border-outline-variant shadow-sm">
                <div className="p-md border-b border-outline-variant bg-surface-container-highest/50">
                  <h3 className="font-headline text-headline-md text-on-surface">
                    Lineups
                  </h3>
                </div>
                <div className="p-md">
                  <p className="font-headline text-label-caps text-primary mb-sm">
                    BRAVEHEARTS
                  </p>
                  <div className="space-y-sm mb-lg">
                    {bhPlayers.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-md text-sm"
                      >
                        <span className="font-stats text-primary w-6">
                          {String(p.jerseyNumber).padStart(2, "0")}
                        </span>
                        <span className="font-body text-on-surface flex-1">
                          {p.fullName}
                        </span>
                        <span className="font-headline text-label-caps text-on-surface-variant">
                          {p.position}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="font-headline text-label-caps text-on-surface-variant mb-sm">
                    {liveGame.opponent.toUpperCase()}
                  </p>
                  <div className="space-y-sm">
                    {oppPlayers.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-md text-sm"
                      >
                        <span className="font-stats text-on-surface-variant w-6">
                          {String(p.jerseyNumber).padStart(2, "0")}
                        </span>
                        <span className="font-body text-on-surface flex-1">
                          {p.fullName}
                        </span>
                        <span className="font-headline text-label-caps text-on-surface-variant">
                          {p.position}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-surface-container-lowest border border-outline-variant shadow-sm">
                <div className="p-md border-b border-outline-variant bg-surface-container-highest/50">
                  <h3 className="font-headline text-headline-md text-on-surface">
                    Game Leaders
                  </h3>
                </div>
                <div className="p-md space-y-md">
                  <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
                    <div>
                      <p className="font-headline text-label-caps text-on-surface-variant text-[10px]">
                        POINTS
                      </p>
                      <p className="font-body text-on-surface font-bold">
                        K. Mwale
                      </p>
                    </div>
                    <p className="font-stats text-headline-md text-primary">
                      24
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
                    <div>
                      <p className="font-headline text-label-caps text-on-surface-variant text-[10px]">
                        REBOUNDS
                      </p>
                      <p className="font-body text-on-surface font-bold">
                        C. Banda
                      </p>
                    </div>
                    <p className="font-stats text-headline-md text-primary">
                      12
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-headline text-label-caps text-on-surface-variant text-[10px]">
                        ASSISTS
                      </p>
                      <p className="font-body text-on-surface font-bold">
                        T. Phiri
                      </p>
                    </div>
                    <p className="font-stats text-headline-md text-primary">
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
