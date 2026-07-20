"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const teams = [
  { slug: "boys", label: "Boys", icon: "boy" },
  { slug: "girls", label: "Girls", icon: "female" },
  { slug: "ladies", label: "Ladies", icon: "groups" },
  { slug: "youth", label: "Youth", icon: "child_care" },
  { slug: "men", label: "Men", icon: "sports_basketball" },
];

export default function TopNavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rosterOpen, setRosterOpen] = useState(false);
  const rosterRef = useRef<HTMLDivElement>(null);

  // Close roster dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (rosterRef.current && !rosterRef.current.contains(e.target as Node)) {
        setRosterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="w-full top-0 sticky bg-surface border-b-2 border-primary-container z-50">
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 max-w-full mx-auto" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-lg md:text-2xl font-black text-primary uppercase tracking-tighter"
          aria-label="Bravehearts Basketball Home"
        >
          Bravehearts Basketball
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop items-center gap-6 lg:gap-10">
          <Link
            href="/"
            className={`transition-colors font-headline text-xs uppercase tracking-widest ${
              isActive("/") && !pathname.startsWith("/roster")
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            HOME
          </Link>

          {/* Roster Dropdown */}
          <div className="relative" ref={rosterRef}>
            <button
              onClick={() => setRosterOpen(!rosterOpen)}
              className={`transition-colors font-headline text-xs uppercase tracking-widest flex items-center gap-1 ${
                isActive("/roster")
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface hover:text-primary"
              }`}
              aria-expanded={rosterOpen}
              aria-haspopup="true"
            >
              ROSTER
              <span
                className={`material-symbols-outlined text-sm transition-transform ${
                  rosterOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            {rosterOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-surface-container-lowest border border-surface-container-high shadow-lg z-50" role="menu">
                {teams.map((team) => (
                  <Link
                    key={team.slug}
                    href={`/roster/${team.slug}`}
                    onClick={() => setRosterOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 font-headline text-xs uppercase tracking-wider transition-all ${
                      pathname === `/roster/${team.slug}`
                        ? "bg-primary text-on-primary"
                        : "text-on-surface hover:bg-surface-container-high hover:text-primary"
                    }`}
                    role="menuitem"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {team.icon}
                    </span>
                    {team.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/tickets"
            className={`transition-colors font-headline text-xs uppercase tracking-widest ${
              isActive("/tickets")
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            TICKETS
          </Link>

          <Link
            href="/streaming"
            className={`transition-colors font-headline text-xs uppercase tracking-widest ${
              isActive("/streaming")
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            LIVE
          </Link>

          <Link
            href="/dashboard"
            className="transition-colors font-headline text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary"
          >
            ADMIN
          </Link>
        </div>

        {/* Right Side — Desktop */}
        <div className="nav-desktop items-center gap-4">
          <Link
            href="/tickets"
            className="bg-primary text-on-primary px-6 py-1 font-headline text-xs uppercase tracking-widest hover:scale-95 duration-100 transition-all"
          >
            Tickets
          </Link>
          <div className="flex gap-2">
            <span className="material-symbols-outlined p-1 hover:bg-surface-container-high transition-all cursor-pointer text-on-surface" aria-label="Notifications">
              notifications
            </span>
            <span className="material-symbols-outlined p-1 hover:bg-surface-container-high transition-all cursor-pointer text-on-surface" aria-label="Account">
              person
            </span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile material-symbols-outlined text-on-surface p-1"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "close" : "menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="nav-mobile bg-surface-container-lowest border-t border-surface-container-high">
        {mobileOpen && (
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 font-headline text-xs uppercase tracking-widest transition-all ${
                isActive("/") && !pathname.startsWith("/roster")
                  ? "bg-primary text-on-primary"
                  : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              HOME
            </Link>

            {/* Roster Section */}
            <div className="px-4 py-2">
              <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">
                Teams
              </p>
              <div className="grid grid-cols-2 gap-1">
                {teams.map((team) => (
                  <Link
                    key={team.slug}
                    href={`/roster/${team.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 font-headline text-xs uppercase tracking-wider transition-all ${
                      pathname === `/roster/${team.slug}`
                        ? "bg-primary text-on-primary"
                        : "text-on-surface hover:bg-surface-container-high hover:text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {team.icon}
                    </span>
                    {team.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/tickets"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 font-headline text-xs uppercase tracking-widest transition-all ${
                isActive("/tickets")
                  ? "bg-primary text-on-primary"
                  : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              TICKETS
            </Link>

            <Link
              href="/streaming"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 font-headline text-xs uppercase tracking-widest transition-all ${
                isActive("/streaming")
                  ? "bg-primary text-on-primary"
                  : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              LIVE STREAM
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 font-headline text-xs uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-high"
            >
              ADMIN DASHBOARD
            </Link>

            <div className="pt-2 border-t border-surface-container-high">
              <Link
                href="/tickets"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-primary text-on-primary px-4 py-3 font-headline text-xs uppercase tracking-widest text-center"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
