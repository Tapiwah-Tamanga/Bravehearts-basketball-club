import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Nav */}
      <header className="w-full bg-surface border-b-2 border-primary-container">
        <nav className="flex justify-between items-center px-4 md:px-10 py-4 max-w-full mx-auto">
          <Link
            href="/"
            className="font-headline text-lg md:text-2xl font-black text-primary uppercase tracking-tighter"
          >
            Bravehearts Basketball
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          {/* Big Number */}
          <div className="relative inline-block mb-6">
            <span className="font-stats text-[120px] md:text-[200px] font-bold text-surface-container-highest leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-5xl md:text-7xl mb-2 block">
                  sports_basketball
                </span>
                <p className="font-headline text-xs md:text-sm uppercase tracking-widest text-on-surface-variant">
                  Out of Bounds
                </p>
              </div>
            </div>
          </div>

          <h1 className="font-headline text-2xl md:text-4xl font-black uppercase text-on-surface mb-3">
            Page Not Found
          </h1>
          <p className="font-body text-sm md:text-base text-on-surface-variant mb-8 max-w-md mx-auto">
            Looks like this play went out of bounds. The page you&apos;re looking
            for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-primary text-on-primary px-8 py-3 font-headline text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/roster/boys"
              className="border-2 border-primary text-primary px-8 py-3 font-headline text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
            >
              View Roster
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-4 border-primary bg-surface-container-lowest py-6">
        <div className="text-center">
          <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest">
            © 2026 Bravehearts Basketball Team
          </p>
        </div>
      </footer>
    </div>
  );
}
