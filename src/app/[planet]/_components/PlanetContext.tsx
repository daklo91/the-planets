"use client";

import { createContext, useContext, useState } from "react";

type ViewType = "overview" | "internal" | "geology";

const PlanetContext = createContext<{
  view: ViewType;
  setView: (view: ViewType) => void;
} | null>(null);

export default function PlanetProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<ViewType>("overview");

  return (
    <PlanetContext.Provider value={{ view, setView }}>
      {children}
    </PlanetContext.Provider>
  );
}

export function usePlanetView() {
  const context = useContext(PlanetContext);
  if (!context) throw new Error("usePlanetView must be used within PlanetProvider");
  return context;
}
