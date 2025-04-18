
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import HomeBtn from "@/components/HomeButton";
import Sound from "@/components/Sound";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Siri varshini",
  description: "Personal website of Siri Varshini Pentakota",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        <HomeBtn />
        {children}
        <Sound />
        <div id="my-modal"></div>
      </body>
    </html>
  );
}