import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DisclaimerBadge from "@/components/DisclaimerBadge";
import ScrollProgress from "@/components/ScrollProgress";
import PageScrollProgress from "@/components/PageScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I Am One Self — The Holy Earth Foundation",
  description:
    "Discover the Unity of Being. A Course in Miracles & Mystic Teachings of Christ-Mind. Spiritual life coaching, Plants & Miracles retreats, and the Sufi Message of Love, Harmony, and Beauty.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  keywords: [
    "A Course in Miracles",
    "spiritual awakening",
    "entheogen retreats",
    "the medicine",
    "plants and miracles",
    "single-mindedness",
    "spiritual coaching",
    "holy earth foundation",
  ],
  openGraph: {
    title: "I Am One Self — The Holy Earth Foundation",
    description:
      "Discover the Unity of Being. A Course in Miracles & Mystic Teachings of Christ-Mind.",
    type: "website",
    url: "https://www.iamoneself.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <div data-pagefind-ignore>
          <Navbar />
          <DisclaimerBadge />
          <PageScrollProgress />
          <ScrollProgress />
        </div>
        <main className="flex-1 pt-[92px]">{children}</main>
        <div data-pagefind-ignore>
          <Footer />
        </div>
      </body>
    </html>
  );
}
