"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const teams = [
  { slug: "boys", label: "Boys", icon: "boy", color: "#1d4ed8" },
  { slug: "girls", label: "Girls", icon: "female", color: "#0891b2" },
  { slug: "ladies", label: "Ladies", icon: "groups", color: "#d4a017" },
  { slug: "youth", label: "Youth", icon: "child_care", color: "#16a34a" },
  { slug: "men", label: "Men", icon: "sports_basketball", color: "#a30019" },
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
          className="font-headline text-lg md:text-2xl font-black text-primary uppercase tracking-tighter hover:opacity-80 transition-opacity"
          aria-label="Bravehearts Basketball Home"
        >
          Bravehearts Basketball
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop items-center gap-6 lg:gap-10">
          <Link
            href="/"
            className={`transition-all duration-300 font-headline text-xs uppercase tracking-widest ${
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
              className={`transition-all duration-300 font-headline text-xs uppercase tracking-widest flex items-center gap-1 ${
                isActive("/roster")
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface hover:text-primary"
              }`}
              aria-expanded={rosterOpen}
              aria-haspopup="true"
            >
              ROSTER
              <span
                className={`material-symbols-outlined text-sm transition-transform duration-300 ${
                  rosterOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            {rosterOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-surface-container-lowest border border-surface-container-high shadow-xl z-50 animate-scale-in" 
                role="menu"
              >
                <div className="p-2">
                  {teams.map((team, index) => (
                    <Link
                      key={team.slug}
                      href={`/roster/${team.slug}`}
                      onClick={() => setRosterOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 font-headline text-xs uppercase tracking-wider transition-all duration-200 ${
                        pathname === `/roster/${team.slug}`
                          ? "text-white"
                          : "text-on-surface hover:bg-surface-container-high"
                      }`}
                      style={pathname === `/roster/${team.slug}` ? { background: team.color } : {}}
                      role="menuitem"
                      onMouseEnter={(e) => {
                        if (pathname !== `/roster/${team.slug}`) {
                          e.currentTarget.style.background = `${team.color}15`;
                          e.currentTarget.style.color = team.color;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (pathname !== `/roster/${team.slug}`) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '';
                        }
                      }}
                    >
                      <span 
                        className="material-symbols-outlined text-sm"
                        style={pathname !== `/roster/${team.slug}` ? { color: team.color } : {}}
                      >
                        {team.icon}
                      </span>
                      {team.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/tickets"
            className={`transition-all duration-300 font-headline text-xs uppercase tracking-widest ${
              isActive("/tickets")
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            TICKETS
          </Link>

          <Link
            href="/streaming"
            className={`transition-all duration-300 font-headline text-xs uppercase tracking-widest ${
              isActive("/streaming")
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            LIVE
          </Link>

          <Link
            href="/dashboard"
            className="transition-all duration-300 font-headline text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary"
          >
            ADMIN
          </Link>
        </div>

        {/* Right Side — Desktop */}
        <div className="nav-desktop items-center gap-4">
          <Link
            href="/tickets"
            className="btn-primary bg-primary text-on-primary px-6 py-2 font-headline text-xs uppercase tracking-widest hover:scale-95 transition-all"
          >
            Tickets
          </Link>
          <div className="flex gap-2">
            <span className="material-symbols-outlined p-2 hover:bg-surface-container-high transition-all duration-300 cursor-pointer text-on-surface rounded-full hover:scale-110" aria-label="Notifications">
              notifications
            </span>
            <span className="material-symbols-outlined p-2 hover:bg-surface-container-high transition-all duration-300 cursor-pointer text-on-surface rounded-full hover:scale-110" aria-label="Account">
              person
            </span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile relative w-10 h-10 flex items-center justify-center"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="relative w-6 h-5">
            {/* Animated hamburger lines */}
            <span 
              className={`absolute left-0 w-full h-0.5 bg-on-surface transition-all duration-300 ease-out ${
                mobileOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span 
              className={`absolute left-0 top-2 w-full h-0.5 bg-on-surface transition-all duration-300 ease-out ${
                mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span 
              className={`absolute left-0 w-full h-0.5 bg-on-surface transition-all duration-300 ease-out ${
                mobileOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`nav-mobile bg-surface-container-lowest border-t border-surface-container-high overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`block px-4 py-3 font-headline text-xs uppercase tracking-widest transition-all duration-300 ${
              isActive("/") && !pathname.startsWith("/roster")
                ? "bg-primary text-on-primary"
                : "text-on-surface hover:bg-surface-container-high"
            }`}
          >
            HOME
          </Link>

          {/* Roster Section */}
          <div className="px-4 py-3">
            <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest mb-3">
              Teams
            </p>
            <div className="grid grid-cols-2 gap-2">
              {teams.map((team, index) => (
                <Link
                  key={team.slug}
                  href={`/roster/${team.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 font-headline text-xs uppercase tracking-wider transition-all duration-300 ${
                    pathname === `/roster/${team.slug}`
                      ? "text-white"
                      : "text-on-surface hover:bg-surface-container-high"
                  }`}
                  style={pathname === `/roster/${team.slug}` ? { background: team.color } : {}}
                >
                  <span 
                    className="material-symbols-outlined text-sm"
                    style={pathname !== `/roster/${team.slug}` ? { color: team.color } : {}}
                  >
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
            className={`block px-4 py-3 font-headline text-xs uppercase tracking-widest transition-all duration-300 ${
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
            className={`block px-4 py-3 font-headline text-xs uppercase tracking-widest transition-all duration-300 ${
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
            className="block px-4 py-3 font-headline text-xs uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-high transition-all duration-300"
          >
            ADMIN DASHBOARD
          </Link>

          <div className="pt-3 border-t border-surface-container-high">
            <Link
              href="/tickets"
              onClick={() => setMobileOpen(false)}
              className="block w-full btn-primary bg-primary text-on-primary px-4 py-3 font-headline text-xs uppercase tracking-widest text-center"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
