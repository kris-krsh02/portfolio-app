import type { Metadata } from "next";
import { Knewave, Magra } from "next/font/google";
import "./globals.css";

const knewave = Knewave({
  weight: "400",
  variable: "--font-accent",
  display: "swap",
  subsets: ["latin"],
  fallback: ['Times New Roman', 'Times', 'serif'],
});

const magra = Magra({
  weight: "400",
  variable: "--font-primary",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KK's corner",
  description: "Kristiana Karshelieva's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${magra.variable} ${knewave.variable}`}>
      <body >{children}</body>
    </html>
  );
}
