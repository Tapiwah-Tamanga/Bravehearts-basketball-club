import Link from "next/link";

const teams = [
  { slug: "boys", label: "Boys" },
  { slug: "girls", label: "Girls" },
  { slug: "ladies", label: "Ladies" },
  { slug: "youth", label: "Youth" },
  { slug: "men", label: "Men" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-primary bg-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-10 py-8 md:py-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="font-headline text-xl md:text-2xl text-primary font-black uppercase tracking-tighter">
            Bravehearts
          </div>
          <p className="font-headline text-[10px] md:text-xs text-on-surface-variant text-center md:text-left">
            © 2026 Bravehearts Basketball Team. All Rights Reserved.
          </p>
        </div>

        {/* Team Links */}
        <div className="flex flex-col items-center">
          <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest mb-3">
            Our Teams
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {teams.map((team) => (
              <Link
                key={team.slug}
                href={`/roster/${team.slug}`}
                className="font-headline text-xs text-on-surface hover:text-primary transition-colors hover:underline"
              >
                {team.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end">
          <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest mb-3">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
            <Link
              href="/tickets"
              className="font-headline text-xs text-on-surface hover:text-primary transition-colors hover:underline"
            >
              Tickets
            </Link>
            <Link
              href="/streaming"
              className="font-headline text-xs text-on-surface hover:text-primary transition-colors hover:underline"
            >
              Live Stream
            </Link>
            <Link
              href="#"
              className="font-headline text-xs text-on-surface hover:text-primary transition-colors hover:underline"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="font-headline text-xs text-on-surface hover:text-primary transition-colors hover:underline"
            >
              Sponsorship
            </Link>
          </div>
        </div>
      </div>

      {/* Social Bar */}
      <div className="border-t border-surface-container-high">
        <div className="flex justify-center gap-6 py-4">
          <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all">
            public
          </span>
          <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all">
            chat_bubble
          </span>
          <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all">
            share
          </span>
        </div>
      </div>
    </footer>
  );
}
