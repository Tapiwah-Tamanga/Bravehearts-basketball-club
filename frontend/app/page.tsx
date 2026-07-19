"use client";

import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { games } from "@/lib/mock-data";

export default function HomePage() {
  const liveGame = games[0];

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[800px] w-full flex items-center overflow-hidden bg-surface-container-lowest">
          {/* Background Visual */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent z-10" />
            <img
              alt="Bravehearts Court Action"
              className="w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvr1t-kll6bFAu9ii8GGDM_WZ8El3VlRCbf-ZFnguQ9mw-AX5Ek6dd46hDeh6DNcYi2xvyXtyTZ_h82wDIvXLDKGX5SZ5fvDkCxB-eZuvEJyvtTexTqHaY_Rc84or_LMsHcXycAkbRNp9df_7obPSnTHzUE_QMK3nsnQoqR5kcQN3UDQgm_CehEs7tn4iBaRRA1FmvwI7XKGesUhMgyOuHK2t3O6Ii2xYdPYivDhJUGyO5Cd9VdTaadCq8A7MXv1iTZQksFeKbyOm-"
            />
          </div>

          <div className="relative z-20 px-margin-desktop w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-xl">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="inline-block bg-primary text-on-primary px-md py-xs font-headline text-label-caps mb-md">
                LILONGWE&apos;S ELITE
              </div>
              <h1 className="font-headline text-display-lg text-on-surface mb-md uppercase leading-none">
                BRAVEHEARTS <br />
                <span className="text-primary">BASKETBALL</span>
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant max-w-lg mb-lg">
                Defending champions, community icons. Bravehearts Basketball
                isn&apos;t just a team; it&apos;s the pulse of professional sport
                in the Warm Heart of Africa.
              </p>
              <div className="flex gap-md">
                <button className="bg-primary text-on-primary px-xl py-md font-headline text-headline-md hover:shadow-lg duration-100 transition-all">
                  JOIN THE ROSTER
                </button>
                <Link
                  href="/streaming"
                  className="border-2 border-primary text-primary px-xl py-md font-headline text-headline-md hover:bg-primary hover:text-white transition-all text-center"
                >
                  WATCH LIVE
                </Link>
              </div>
            </div>

            {/* Right — Live Scoreboard Widget */}
            <div className="hidden md:block relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -top-10 -right-10 w-64 h-64 border-t-8 border-r-8 border-secondary opacity-20" />
              <div className="bg-surface-container-lowest p-lg border border-surface-container-high shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-md border-b border-surface-container-high pb-sm">
                  <span className="font-headline text-label-caps text-secondary font-bold pulse-live">
                    LIVE NOW
                  </span>
                  <span className="font-stats text-stats-number text-on-surface">
                    Q3 - 04:12
                  </span>
                </div>
                <div className="flex items-center justify-between gap-xl mb-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary text-white flex items-center justify-center font-black text-xl mb-xs">
                      BH
                    </div>
                    <p className="font-headline text-label-caps text-xs text-on-surface-variant">
                      BRAVEHEARTS
                    </p>
                    <p className="font-stats text-display-lg leading-none text-on-surface">
                      {liveGame.scoreFor}
                    </p>
                  </div>
                  <div className="font-headline text-headline-md font-black text-on-surface-variant opacity-20">
                    VS
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-surface-container-high text-on-surface flex items-center justify-center font-black text-xl mb-xs">
                      {liveGame.opponent
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <p className="font-headline text-label-caps text-xs text-on-surface-variant">
                      {liveGame.opponent.toUpperCase()}
                    </p>
                    <p className="font-stats text-display-lg leading-none text-on-surface">
                      {liveGame.scoreAgainst}
                    </p>
                  </div>
                </div>
                <Link
                  href="/dashboard/games"
                  className="w-full py-md bg-secondary text-white font-headline text-label-caps hover:bg-opacity-90 transition-all shadow-md block text-center"
                >
                  VIEW FULL STATS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* News Bento Grid */}
        <section className="py-xl px-margin-desktop max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-xl border-l-8 border-primary pl-lg">
            <div>
              <p className="font-headline text-label-caps text-primary font-bold">
                LATEST FROM THE COURT
              </p>
              <h2 className="font-headline text-headline-lg uppercase text-on-surface">
                Team Headlines
              </h2>
            </div>
            <Link
              href="#"
              className="font-headline text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs"
            >
              ALL NEWS{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="bento-grid">
            {/* Main News Card */}
            <div className="col-span-12 md:col-span-7 h-[500px] relative group overflow-hidden bg-surface-container-high shadow-lg kinetic-border">
              <img
                alt="Championship Win"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxroOf9bRB-HlVHLyXBWi7TddAp3FjvoNRwemib5QX5d4x-X_haQhf5HcNWJjP4VQXC-c8MtXzltvan2wgFp5bBQ-ftadAiuDxKEquvR61LfNPCoCLO9x-C30jGOLNiYh2TxWJch7V83x3Ml2hoEyZuQhluntqBm0NelnIXC25I7Z5-NMn4AMnhMCdWq4G8BEPeSO2NRyjXYmB9Zi2gz5MmceCH2ySx5sh6jjwSuT4AcQ67MTjMePYgjzVp3LvJ2jeY2cLjS9kQ9Lm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-xl">
                <span className="bg-secondary text-white px-sm py-xs font-headline text-[10px] mb-md inline-block">
                  MATCH REPORT
                </span>
                <h3 className="font-headline text-headline-lg text-white mb-md uppercase leading-tight">
                  National Championship Secured: The Triple Crown
                </h3>
                <p className="font-body text-body-md text-white/90 max-w-md">
                  Bravehearts dominate the final quarter to secure their third
                  consecutive national title in front of a sold-out Lilongwe
                  crowd.
                </p>
              </div>
            </div>

            {/* History Card */}
            <div className="col-span-12 md:col-span-5 h-[500px] bg-primary p-xl flex flex-col justify-between text-on-primary relative shadow-lg">
              <div className="absolute top-0 right-0 p-lg opacity-10">
                <span className="material-symbols-outlined text-[160px]">
                  history
                </span>
              </div>
              <div>
                <h3 className="font-headline text-headline-lg uppercase mb-md text-white">
                  Our Legacy
                </h3>
                <p className="font-body text-body-lg mb-lg text-white/90">
                  Founded on the principles of discipline and community
                  development, Bravehearts has grown from a local youth
                  initiative to Malawi&apos;s premier basketball powerhouse.
                </p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-md border-b border-white/20 pb-sm">
                    <span className="font-stats text-headline-md text-white">
                      15
                    </span>
                    <span className="font-headline text-label-caps text-xs text-white/80">
                      YEARS OF EXCELLENCE
                    </span>
                  </li>
                  <li className="flex items-center gap-md border-b border-white/20 pb-sm">
                    <span className="font-stats text-headline-md text-white">
                      08
                    </span>
                    <span className="font-headline text-label-caps text-xs text-white/80">
                      NATIONAL TITLES
                    </span>
                  </li>
                  <li className="flex items-center gap-md">
                    <span className="font-stats text-headline-md text-white">
                      42
                    </span>
                    <span className="font-headline text-label-caps text-xs text-white/80">
                      PRO PLAYER GRADUATES
                    </span>
                  </li>
                </ul>
              </div>
              <button className="bg-white text-primary px-lg py-md font-headline text-label-caps self-start hover:shadow-xl transition-all font-bold">
                READ OUR STORY
              </button>
            </div>

            {/* Small Grid Cards */}
            <div className="col-span-12 md:col-span-4 bg-surface-container-low p-lg border border-surface-container-high shadow-sm kinetic-border">
              <img
                alt="Player Profiles"
                className="w-full h-48 object-cover mb-md shadow-inner"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu3_QFsajDQ0KPmaihP7VvFuhSKcxVjRHym7vjhBlLpwAaPQ7EWHQZO9VV7OJbQqsl5q1MfiqFEPxCGv7D55An1S1CBkbFgHrl67caWzdgHcwC_zaS7bmdPTJzpSGUVt9rI3hvJEfo6fAahzFjOL4Brx6Wz6ES1dfsoq0R7RNMy88PlFVFylwQnoLdM7Y3_QEI8wrscuP_WScw0lgYz6g5XPOXyZXCw1k9ZXV1AW1jUYJ1VdSEAbnXWtyDt-CdXcTK_W8A_ASSX3Bn"
              />
              <h4 className="font-headline text-headline-md mb-xs uppercase text-on-surface">
                Roster Spotlight
              </h4>
              <p className="font-body text-body-md text-on-surface-variant mb-md">
                Meet the new recruits joining our elite defensive lineup for the
                2024 season.
              </p>
              <Link
                href="/roster/boys"
                className="text-primary font-bold font-headline text-xs flex items-center gap-xs"
              >
                VIEW PLAYERS{" "}
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </Link>
            </div>

            <div className="col-span-12 md:col-span-4 bg-surface-container-low p-lg border border-surface-container-high shadow-sm kinetic-border">
              <div className="h-48 bg-secondary/5 flex items-center justify-center mb-md border-2 border-secondary/10">
                <span
                  className="material-symbols-outlined text-secondary text-display-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  volunteer_activism
                </span>
              </div>
              <h4 className="font-headline text-headline-md mb-xs uppercase text-on-surface">
                Community First
              </h4>
              <p className="font-body text-body-md text-on-surface-variant mb-md">
                Our weekend youth clinics in Area 18 continue to bridge the gap
                for aspiring athletes.
              </p>
              <Link
                href="/roster/youth"
                className="text-secondary font-bold font-headline text-xs flex items-center gap-xs"
              >
                JOIN CLINIC{" "}
                <span className="material-symbols-outlined text-sm">
                  group
                </span>
              </Link>
            </div>

            <div className="col-span-12 md:col-span-4 bg-surface-container-low p-lg border border-surface-container-high shadow-sm kinetic-border">
              <div className="h-48 bg-primary/5 flex items-center justify-center mb-md border-2 border-primary/10">
                <span
                  className="material-symbols-outlined text-primary text-display-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shopping_bag
                </span>
              </div>
              <h4 className="font-headline text-headline-md mb-xs uppercase text-on-surface">
                New Merch Drop
              </h4>
              <p className="font-body text-body-md text-on-surface-variant mb-md">
                The Limited Edition &apos;Flame of Malawi&apos; jersey is now
                available for pre-order.
              </p>
              <Link
                href="#"
                className="text-primary font-bold font-headline text-xs flex items-center gap-xs"
              >
                SHOP NOW{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="bg-surface-container-high py-xl border-y-4 border-primary shadow-inner">
          <div className="max-w-4xl mx-auto px-margin-desktop text-center">
            <h2 className="font-headline text-headline-xl text-on-surface uppercase mb-md">
              Never Miss a Tip-Off
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-xl">
              Get exclusive access to behind-the-scenes content, ticket
              pre-sales, and real-time game alerts.
            </p>
            <form className="flex flex-col md:flex-row gap-md">
              <input
                className="flex-grow bg-surface-container-lowest border-2 border-surface-variant focus:border-primary focus:ring-0 text-on-surface p-md shadow-sm font-body"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                type="submit"
                className="bg-primary text-on-primary px-xl py-md font-headline text-headline-md uppercase hover:shadow-lg transition-all"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
