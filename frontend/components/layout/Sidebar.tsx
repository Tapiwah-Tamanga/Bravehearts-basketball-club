"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: "dashboard" },
  { href: "/dashboard/players", label: "Players", icon: "groups" },
  { href: "/dashboard/events", label: "Events", icon: "event" },
  { href: "/dashboard/games", label: "Games", icon: "sports_basketball" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-surface-container border-r border-surface-container-highest flex flex-col py-12 z-40 hidden md:flex">
      {/* Brand */}
      <div className="px-6 mb-12">
        <h1 className="font-headline text-2xl font-black text-primary">
          Management
        </h1>
        <p className="font-body text-base text-on-surface-variant">
          Bravehearts HQ
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-grow space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-6 py-4 flex items-center gap-4 transition-all ${
                isActive
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:translate-x-1"
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className={`font-body text-base ${isActive ? "font-bold" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Team Links */}
        <div className="pt-6 mt-6 border-t border-surface-container-highest">
          <p className="px-6 mb-2 font-headline text-xs text-on-surface-variant uppercase">
            Teams
          </p>
          {["boys", "girls", "ladies", "youth", "men"].map((team) => (
            <Link
              key={team}
              href={`/roster/${team}`}
              className="text-on-surface-variant px-6 py-2 flex items-center gap-4 hover:bg-surface-container-high hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined text-sm">
                {team === "men"
                  ? "sports_basketball"
                  : team === "boys"
                    ? "boy"
                    : team === "girls"
                      ? "female"
                      : team === "ladies"
                        ? "groups"
                        : "child_care"}
              </span>
              <span className="font-body text-base capitalize">{team}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="px-6 mt-auto border-t border-surface-container-highest pt-6 space-y-4">
        <button className="w-full bg-primary text-on-primary py-4 px-6 font-headline text-xs hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
          <span className="material-symbols-outlined">person_add</span>
          Add New Player
        </button>
        <div className="flex items-center gap-4 px-2 py-1">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-sm">
              person
            </span>
          </div>
          <div>
            <p className="font-body text-base font-bold text-on-surface">Admin</p>
            <p className="text-[10px] uppercase font-bold text-primary tracking-widest">
              Master Coach
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
