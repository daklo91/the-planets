import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";

const antonioMedium = localFont({
  src: "../assets/fonts/Antonio-Medium.ttf",
  variable: "--antonio-medium",
});
const spartanBold = localFont({
  src: "../assets/fonts/LeagueSpartan-Bold.ttf",
  variable: "--spartan-bold",
});
const spartanRegular = localFont({
  src: "../assets/fonts/LeagueSpartan-Regular.ttf",
  variable: "--spartan-regular",
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
    <html lang="en" className="bg-background">
      <body
        className={`${antonioMedium.variable} ${spartanBold.variable} ${spartanRegular.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
