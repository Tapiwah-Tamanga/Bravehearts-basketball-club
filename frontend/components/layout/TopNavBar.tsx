"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const pathname = usePathname();

  return (
    <header className="w-full top-0 sticky bg-surface border-b-2 border-primary-container z-50">
      <nav className="flex justify-between items-center px-margin-desktop py-md max-w-full mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-headline-md font-black text-primary uppercase tracking-tighter"
        >
          Bravehearts Basketball
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-xl">
          <Link
            href="/"
            className={`transition-colors font-headline text-label-caps ${
              pathname === "/"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/roster/boys"
            className={`transition-colors font-headline text-label-caps ${
              pathname.startsWith("/roster")
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            ROSTER
          </Link>
          <Link
            href="/dashboard"
            className={`transition-colors font-headline text-label-caps ${
              pathname.startsWith("/dashboard")
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            DASHBOARD
          </Link>
          <Link
            href="/streaming"
            className={`transition-colors font-headline text-label-caps ${
              pathname === "/streaming"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface hover:text-primary"
            }`}
          >
            LIVE
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-md">
          <button className="bg-primary text-on-primary px-lg py-xs font-headline text-label-caps hover:scale-95 duration-100 transition-all">
            Tickets
          </button>
          <div className="flex gap-sm">
            <span className="material-symbols-outlined p-xs hover:bg-surface-container-high transition-all cursor-pointer text-on-surface">
              notifications
            </span>
            <span className="material-symbols-outlined p-xs hover:bg-surface-container-high transition-all cursor-pointer text-on-surface">
              person
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
