import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeaderHamburgerToggle from "./HeaderHamburgerToggle";
import planetDataArray from "@/data/data.json";

function Header() {

  return (
    <>
      <header className="flex items-center justify-between border-b-accent border-b pl-[24px] pr-[24px] lg:pl-[32px] lg:pr-[40px] lg:flex-row md:flex-col">
        <div className="font-antonio font-medium text-primary text-[1.75rem] lead-[-1.05px] my-[15px] md:my-[30px] lg:my-0 md:mb-[10px] lg:mb-0">
          THE PLANETS
        </div>
        <nav className="hidden font-spartan gap-[33px] font-medium text-primary/75 text-[0.875rem] tracking-[0.063rem] md:flex">
        {planetDataArray.map((planet) => 
          <Link
            key={planet.name}
            href={`/${planet.name.toLocaleLowerCase()}`}
            className="uppercase block pt-[25px] pb-[20px] lg:pb-[25px] hover:text-primary focus-visible:text-primary md:border-b-0 md:mb-[4px] hover:md:border-b-4 hover:md:mb-0 lg:!border-b-0 lg:mt-[4px] lg:border-t-0 hover:lg:border-t-4 hover:lg:mt-0"
            style={{borderColor: planet.UIColor}}
          >
            {planet.name}
          </Link>)}
        </nav>
        <HeaderHamburgerToggle>
          <nav className="w-full px-6 top-4 absolute">
            {planetDataArray.map((planet) => 
            <Link
              key={planet.name}
              href={`/${planet.name.toLocaleLowerCase()}`}
              className="flex justify-between items-center border-b-accent border-b py-[20px]"
            >
              <div className="flex gap-[25px] items-center">
                <div className="w-[20px] h-[20px] rounded-full" style={{backgroundColor: planet.sideMenuColor}}></div>
                <div className="mt-[3px] uppercase">{planet.name}</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
            </Link>)}
          </nav>
        </HeaderHamburgerToggle>
      </header>
    </>
  );
}

export default Header;
