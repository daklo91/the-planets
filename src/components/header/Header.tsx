import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeaderHamburgerToggle from "./HeaderHamburgerToggle";

function Header() {

  return (
    <>
      <header className="flex items-center justify-between border-b-accent border-b pl-[24px] pr-[24px] lg:pl-[32px] lg:pr-[40px] lg:flex-row md:flex-col">
        <div className="font-antonio font-medium text-primary text-[1.75rem] lead-[-1.05px] my-[15px] md:my-[30px] lg:my-0 md:mb-[10px] lg:mb-0">
          THE PLANETS
        </div>
        <nav className="hidden font-spartan font-medium text-primary/75 text-[0.875rem] tracking-[0.063rem] md:flex">
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
        <HeaderHamburgerToggle>
          <nav className="w-full px-6 top-4 absolute">
            <Link
              href="/"
              className="flex justify-between items-center border-b-accent border-b py-[20px]"
            >
              <div className="flex gap-[25px] items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-[#DEF4FC]"></div>
                <div className="mt-[3px]">MERCURY</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
            </Link>
            <Link
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
        </HeaderHamburgerToggle>
      </header>
    </>
  );
}

export default Header;
