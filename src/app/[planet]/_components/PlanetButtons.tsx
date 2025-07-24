"use client";

import { usePlanetView } from "./PlanetContext";

export default function PlanetButtons() {
  const { setView } = usePlanetView();

  return (
    <div>
      <button
        onClick={() => setView("overview")}
        className="text-primary py-3 border-accent border w-full text-left"
      >
        <span className="mx-6 text-secondary">01</span> OVERVIEW
      </button>
      <button
        onClick={() => setView("internal")}
        className="text-primary py-3 border-accent border w-full text-left"
      >
        <span className="mx-6 text-secondary">02</span> INTERNAL STRUCTURE
      </button>
      <button
        onClick={() => setView("geology")}
        className="text-primary py-3 border-accent border w-full text-left"
      >
        <span className="mx-6 text-secondary">03</span> SURFACE GEOLOGY
      </button>
    </div>
  );
}
