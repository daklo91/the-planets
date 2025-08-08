"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b-accent border-b pl-[24px] pr-[24px] lg:pl-[32px] lg:pr-[40px] lg:flex-row md:flex-col">
        <div className="font-antonio-medium text-primary text-[1.75rem] lead-[-1.05px] my-[15px] md:my-[30px] lg:my-0 md:mb-[10px] lg:mb-0">
          THE PLANETS
        </div>
        <nav className="hidden font-spartan-medium text-primary/75 text-[0.875rem] tracking-[0.063rem] md:flex">
          <Link
            href="/"
            className="block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-mercury/0 hover:border-mercury focus-visible:border-mercury"
          >
            MERCURY
          </Link>
          <Link
            href="/venus/overview"
            className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-venus/0 hover:border-venus focus-visible:border-venus"
          >
            VENUS
          </Link>
          <Link
            href="/earth/overview"
            className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-earth/0 hover:border-earth focus-visible:border-earth"
          >
            EARTH
          </Link>
          <Link
            href="/mars/overview"
            className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-mars/0 hover:border-mars focus-visible:border-mars"
          >
            MARS
          </Link>
          <Link
            href="/jupiter/overview"
            className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-jupiter/0 hover:border-jupiter focus-visible:border-jupiter"
          >
            JUPITER
          </Link>
          <Link
            href="/saturn/overview"
            className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-saturn/0 hover:border-saturn focus-visible:border-saturn"
          >
            SATURN
          </Link>
          <Link
            href="/uranus/overview"
            className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-uranus/0 hover:border-uranus focus-visible:border-uranus"
          >
            URANUS
          </Link>
          <Link
            href="/neptune/overview"
            className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-neptune/0 hover:border-neptune focus-visible:border-neptune"
          >
            NEPTUNE
          </Link>
        </nav>
        <button
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          className="w-[24px] block md:hidden"
        >
          <div
            className={`w-full h-[3px]  ${
              menuOpen ? "bg-accent" : "bg-primary"
            }`}
          ></div>
          <div
            className={`my-[4px] w-full h-[3px]  ${
              menuOpen ? "bg-accent" : "bg-primary"
            }`}
          ></div>
          <div
            className={`w-full h-[3px]  ${
              menuOpen ? "bg-accent" : "bg-primary"
            }`}
          ></div>
        </button>
      </header>
      <nav
        style={{ left: menuOpen ? "0%" : "100%" }}
        className="md:hidden overflow-y-auto pt-[24px] pb-[120px] px-[24px] fixed bg-background w-full h-full transition-[left] leading-[0.875rem] font-spartan-bold text-primary text-[0.875rem] tracking-[0.063rem]"
      >
        <Link
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          href="/"
          className="flex justify-between items-center border-b-accent border-b py-[20px]"
        >
          <div className="flex gap-[25px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-[#DEF4FC]"></div>
            <div className="mt-[3px]">MERCURY</div>
          </div>
          <Image width={4} height={8} src="/images/icon-chevron.svg" alt="" />
        </Link>
        <Link
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          href="/venus"
          className="flex justify-between items-center border-b-accent border-b py-[20px]"
        >
          <div className="flex gap-[25px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-[#F7CC7F]"></div>
            <div className="mt-[3px]">VENUS</div>
          </div>
          <Image width={4} height={8} src="/images/icon-chevron.svg" alt="" />
        </Link>
        <Link
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          href="/earth"
          className="flex justify-between items-center border-b-accent border-b py-[20px]"
        >
          <div className="flex gap-[25px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-[#545BFE]"></div>
            <div className="mt-[3px]">EARTH</div>
          </div>
          <Image width={4} height={8} src="/images/icon-chevron.svg" alt="" />
        </Link>
        <Link
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          href="/mars"
          className="flex justify-between items-center border-b-accent border-b py-[20px]"
        >
          <div className="flex gap-[25px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-[#FF6A45]"></div>
            <div className="mt-[3px]">MARS</div>
          </div>
          <Image width={4} height={8} src="/images/icon-chevron.svg" alt="" />
        </Link>
        <Link
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          href="/jupiter"
          className="flex justify-between items-center border-b-accent border-b py-[20px]"
        >
          <div className="flex gap-[25px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-[#ECAD7A]"></div>
            <div className="mt-[3px]">JUPITER</div>
          </div>
          <Image width={4} height={8} src="/images/icon-chevron.svg" alt="" />
        </Link>
        <Link
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          href="/saturn"
          className="flex justify-between items-center border-b-accent border-b py-[20px]"
        >
          <div className="flex gap-[25px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-[#FCCB6B]"></div>
            <div className="mt-[3px]">SATURN</div>
          </div>
          <Image width={4} height={8} src="/images/icon-chevron.svg" alt="" />
        </Link>
        <Link
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          href="/uranus"
          className="flex justify-between items-center border-b-accent border-b py-[20px]"
        >
          <div className="flex gap-[25px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-[#65F0D5]"></div>
            <div className="mt-[3px]">URANUS</div>
          </div>
          <Image width={4} height={8} src="/images/icon-chevron.svg" alt="" />
        </Link>
        <Link
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          href="/neptune"
          className="flex justify-between items-center border-b-accent border-b py-[20px]"
        >
          <div className="flex gap-[25px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-[#497EFA]"></div>
            <div className="mt-[3px]">NEPTUNE</div>
          </div>
          <Image width={4} height={8} src="/images/icon-chevron.svg" alt="" />
        </Link>
      </nav>
    </>
  );
}

export default Header;
