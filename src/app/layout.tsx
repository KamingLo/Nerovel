import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import DarkVeil from '@/components/Darkveil';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Modern Site",
  description: "Website stylish menggunakan Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full min-h-screen relative`}
      >
        <main className="relative min-h-screen w-full">
          <div className="fixed inset-0 z-0">
            <DarkVeil />
          </div>

          <Navbar />

          <div className="relative z-10 flex items-center justify-center min-h-screen text-center">
            {children}
          </div>

        </main>
      </body>
    </html>
  );
}
