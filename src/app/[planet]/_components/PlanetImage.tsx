"use client";

import { usePlanetView } from "./PlanetContext";

interface PlanetImageProps {
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  name: string;
}

export default function PlanetImage({ images, name }: PlanetImageProps) {
  const { view } = usePlanetView();

  let content;

  if (view === "overview") {
    content = <img src={images.planet} alt={`${name} - ${view}`} />;
  } else if (view === "internal") {
    content = <img src={images.internal} alt={`${name} - ${view}`} />;
  } else if (view === "geology") {
    content = (
      <>
        <img src={images.planet} alt={`${name} - ${view}`} />
        <img className="absolute bottom-[11px] left-1/2 -translate-x-1/2 w-[163px] h-[199px]" src={images.geology} alt={`${name} - ${view}`} />
      </>
    );
  }

  return <div className="w-[582px] h-[582px] flex items-center justify-center relative">{content}</div>;
}
