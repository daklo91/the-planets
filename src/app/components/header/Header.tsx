import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-accent border-b pl-[24px] pr-[24px] lg:pl-[32px] lg:pr-[40px] lg:flex-row md:flex-col">
      <div className="font-antonio-medium text-primary text-[1.75rem] lead-[-1.05px] my-[15px] md:my-[30px] lg:my-0 md:mb-[10px] lg:mb-0">
        THE PLANETS
      </div>
      <nav className="hidden font-spartan-bold text-primary/75 text-[0.875rem] tracking-[0.063rem] md:flex">
        <Link
          href="/"
          className="block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-mercury/0 hover:border-mercury focus-visible:border-mercury"
        >
          MERCURY
        </Link>
        <Link
          href="/venus"
          className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-venus/0 hover:border-venus focus-visible:border-venus"
        >
          VENUS
        </Link>
        <Link
          href="/earth"
          className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-earth/0 hover:border-earth focus-visible:border-earth"
        >
          EARTH
        </Link>
        <Link
          href="/mars"
          className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-mars/0 hover:border-mars focus-visible:border-mars"
        >
          MARS
        </Link>
        <Link
          href="/jupiter"
          className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-jupiter/0 hover:border-jupiter focus-visible:border-jupiter"
        >
          JUPITER
        </Link>
        <Link
          href="/saturn"
          className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-saturn/0 hover:border-saturn focus-visible:border-saturn"
        >
          SATURN
        </Link>
        <Link
          href="/uranus"
          className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-uranus/0 hover:border-uranus focus-visible:border-uranus"
        >
          URANUS
        </Link>
        <Link
          href="/neptune"
          className="ml-[33px] block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary border-b-4 lg:border-b-0 lg:border-t-4 border-neptune/0 hover:border-neptune focus-visible:border-neptune"
        >
          NEPTUNE
        </Link>
      </nav>
      <button className="w-[24px] block md:hidden">
        <div className="w-full h-[3px] bg-primary"></div>
        <div className="w-full h-[3px] my-[4px] bg-primary"></div>
        <div className="w-full h-[3px] bg-primary"></div>
      </button>
    </header>
  );
}

export default Header;
