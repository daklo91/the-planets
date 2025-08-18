import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";

const spartan = localFont({
  src: "../assets/fonts/LeagueSpartan-VariableFont_wght.ttf", // your variable font file
  variable: "--font-spartan",
});

const antonio = localFont({
  src: [
    {
      path: "../assets/fonts/Antonio-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-antonio",
});


export const metadata: Metadata = {
  title: "The Planets",
  description:
    "A practice project about our planets. Focuses on Next.js, Typescript and Tailwind. Designed by Frontendmentor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background" style={{
          backgroundImage: `url(/images/background-stars.svg)`,
        }}>
      <body
        className={`${spartan.variable} ${antonio.variable}`} >
        <Header />
        {children}
      </body>
    </html>
  );
}
