import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const personalName: string = "Manvendra Rajpoot";
const personalWebsite: string = "https://www.alzywelzy.com";
// const githubUsername: string = "alzywelzy";
// const githubLink: string = `https://github.com/${githubUsername}`;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weatherfy - Your Weather Forecast App",
  description:
    "Get real-time weather updates with Weatherfy. Stay prepared for any conditions with accurate forecasts, interactive maps, and location-based insights.",
  keywords: [
    "weather forecast",
    "real-time weather",
    "weather updates",
    "meteorology",
    "forecast app",
  ],
  authors: [{ name: personalName, url: personalWebsite }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
