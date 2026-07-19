import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Bravehearts Basketball | Lilongwe, Malawi",
  description:
    "Bravehearts Basketball Club — Lilongwe's elite basketball team. Defending champions, community icons. Join us for thrilling basketball action in the Warm Heart of Africa.",
  keywords: [
    "basketball",
    "Malawi",
    "Lilongwe",
    "Bravehearts",
    "sports",
    "basketball club",
    "African basketball",
  ],
  authors: [{ name: "Bravehearts Basketball Club" }],
  openGraph: {
    title: "Bravehearts Basketball | Lilongwe, Malawi",
    description:
      "Lilongwe's elite basketball team. Defending champions, community icons.",
    type: "website",
    locale: "en_MW",
    siteName: "Bravehearts Basketball",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bravehearts Basketball Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bravehearts Basketball | Lilongwe, Malawi",
    description:
      "Lilongwe's elite basketball team. Defending champions, community icons.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body" suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
