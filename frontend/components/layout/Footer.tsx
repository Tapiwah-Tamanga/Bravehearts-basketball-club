import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-primary bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-xl gap-lg max-w-full mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-sm items-center md:items-start">
          <div className="font-headline text-headline-md text-primary font-black uppercase tracking-tighter">
            Bravehearts
          </div>
          <p className="font-headline text-label-caps text-on-surface-variant">
            © 2026 Bravehearts Basketball Team. All Rights Reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-lg">
          <Link
            href="#"
            className="font-headline text-label-caps text-on-surface hover:text-primary transition-colors hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="font-headline text-label-caps text-on-surface hover:text-primary transition-colors hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="font-headline text-label-caps text-on-surface hover:text-primary transition-colors hover:underline"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="font-headline text-label-caps text-on-surface hover:text-primary transition-colors hover:underline"
          >
            Sponsorship
          </Link>
        </div>

        {/* Social */}
        <div className="flex gap-md">
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
