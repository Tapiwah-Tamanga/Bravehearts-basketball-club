"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar, { navItems } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-[280px] w-full">
        {/* Dashboard Header */}
        <header className="w-full top-0 sticky bg-background border-b border-surface-container-highest flex justify-between items-center px-4 md:px-10 py-4 z-50">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
            <span className="font-headline text-lg md:text-2xl font-black text-on-surface uppercase tracking-tighter">
              <span className="text-primary">Bravehearts</span> Basketball
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hover:bg-surface-container-high p-2 transition-all rounded-full">
              <span className="material-symbols-outlined text-on-surface">
                notifications
              </span>
            </button>
            <button className="bg-primary text-on-primary px-4 md:px-6 py-2 font-headline text-xs border-b-4 border-r-4 border-tertiary active:translate-y-1 active:translate-x-1 active:border-0 transition-all">
              Tickets
            </button>
          </div>
        </header>

        {/* Mobile nav — same destinations as the desktop sidebar */}
        <div
          className={`md:hidden bg-surface-container-lowest border-b border-surface-container-high overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 flex items-center gap-4 transition-all ${
                    isActive
                      ? "bg-primary text-on-primary"
                      : "text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className={`font-body text-base ${isActive ? "font-bold" : ""}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-4 md:px-10 py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
