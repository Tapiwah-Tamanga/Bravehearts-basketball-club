import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bravehearts Basketball | Lilongwe, Malawi",
  description:
    "Bravehearts Basketball Club — Lilongwe's elite basketball team. Defending champions, community icons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
