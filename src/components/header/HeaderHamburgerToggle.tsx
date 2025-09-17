"use client"

import React, { ReactNode, useState } from 'react'

export default function HeaderHamburgerToggle({ children }: { children: ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
    <div className="top-[74px] md:hidden overflow-y-auto pt-[24px] pb-[120px] fixed bg-background w-full h-full transition-[left] leading-[0.875rem] font-spartan font-bold text-primary text-[0.875rem] tracking-[0.063rem] z-50" style={{ left: menuOpen ? "0%" : "100%" }}>
      <div onClick={() => setMenuOpen((menuOpen) => !menuOpen)}>
        {children}
      </div>
    </div>
    </>
  )
}
