"use client";

import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import { events, games } from "@/lib/mock-data";
import Link from "next/link";

export default function TicketsPage() {
  const upcomingGames = games.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-on-primary py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <p className="font-headline text-xs uppercase tracking-widest mb-3 opacity-80">
              Game Day
            </p>
            <h1 className="font-headline text-4xl md:text-6xl font-black uppercase leading-none mb-4">
              Get Your Tickets
            </h1>
            <p className="font-body text-sm md:text-lg opacity-90 max-w-2xl">
              Secure your seat at Lilongwe&apos;s most electrifying basketball
              events. From regular season matchups to championship finals.
            </p>
          </div>
        </section>

        {/* Upcoming Games */}
        <section className="py-12 md:py-16 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="border-l-8 border-primary pl-4 md:pl-6 mb-8 md:mb-12">
            <p className="font-headline text-xs text-primary font-bold uppercase tracking-widest">
              Next Games
            </p>
            <h2 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
              Upcoming Matches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {upcomingGames.map((game, i) => (
              <div
                key={game.id}
                className="bg-surface-container-lowest border border-outline-variant overflow-hidden shadow-sm group hover:border-primary transition-all animate-stagger-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Game Header */}
                <div className="bg-surface-container p-4 md:p-6 border-b border-outline-variant">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
                      {new Date(game.gameDate).toLocaleDateString("en-MW", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
                      {new Date(game.gameDate).toLocaleTimeString("en-MW", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-black text-sm mb-1">
                        BH
                      </div>
                      <p className="font-headline text-xs font-bold">BH</p>
                    </div>
                    <div className="font-headline text-xs text-on-surface-variant opacity-40">
                      VS
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-surface-container-high text-on-surface flex items-center justify-center font-black text-sm mb-1">
                        {game.opponent
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <p className="font-headline text-xs font-bold truncate max-w-[80px]">
                        {game.opponent.split(" ")[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Game Details */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-4">
                    <span className="material-symbols-outlined text-primary text-sm">
                      location_on
                    </span>
                    <span className="font-body">{game.venue}</span>
                  </div>

                  {/* Ticket Tiers */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center bg-surface-container p-3 border-l-4 border-primary">
                      <div>
                        <p className="font-headline text-xs font-bold">
                          Standard
                        </p>
                        <p className="font-headline text-[10px] text-on-surface-variant">
                          General seating
                        </p>
                      </div>
                      <p className="font-stats text-lg font-bold text-primary">
                        MWK 5,000
                      </p>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container p-3 border-l-4 border-secondary">
                      <div>
                        <p className="font-headline text-xs font-bold">
                          Premium
                        </p>
                        <p className="font-headline text-[10px] text-on-surface-variant">
                          Courtside access
                        </p>
                      </div>
                      <p className="font-stats text-lg font-bold text-secondary">
                        MWK 15,000
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-on-primary py-3 font-headline text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-md">
                    Buy Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="py-12 md:py-16 px-4 md:px-10 bg-surface-container-high">
          <div className="max-w-7xl mx-auto">
            <div className="border-l-8 border-secondary pl-4 md:pl-6 mb-8 md:mb-12">
              <p className="font-headline text-xs text-secondary font-bold uppercase tracking-widest">
                Don&apos;t Miss Out
              </p>
              <h2 className="font-headline text-2xl md:text-4xl uppercase text-on-surface">
                Special Events
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {events.map((event, i) => (
                <div
                  key={event.id}
                  className="bg-surface-container-lowest border border-outline-variant overflow-hidden shadow-sm flex flex-col md:flex-row group hover:border-secondary transition-all animate-stagger-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-full md:w-48 h-48 md:h-auto relative overflow-hidden bg-surface-container-high flex-shrink-0">
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-2">
                      <span className="material-symbols-outlined text-secondary text-sm">
                        calendar_today
                      </span>
                      <span className="font-body">
                        {new Date(event.eventDate).toLocaleDateString("en-MW", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-headline text-lg md:text-xl font-black uppercase text-on-surface mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant mb-4 flex-1 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-4">
                      <span className="material-symbols-outlined text-secondary text-sm">
                        location_on
                      </span>
                      <span className="font-body">{event.location}</span>
                    </div>
                    <button className="bg-secondary text-on-secondary py-2 px-4 font-headline text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all self-start">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-2xl md:text-4xl uppercase text-on-surface mb-4">
              Season Passes Available
            </h2>
            <p className="font-body text-sm md:text-lg text-on-surface-variant mb-6 md:mb-8">
              Get unlimited access to all home games with a season pass. Save
              30% compared to individual tickets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="#"
                className="bg-primary text-on-primary px-8 py-3 font-headline text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all"
              >
                Season Pass — MWK 50,000
              </Link>
              <Link
                href="#"
                className="border-2 border-primary text-primary px-8 py-3 font-headline text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
              >
                View All Games
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
