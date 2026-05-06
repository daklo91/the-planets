import dynamic from "next/dynamic";
import { ComponentType } from "react";

interface PlanetImageProps {
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  className?: string;
  name: string;
  view: "overview" | "structure" | "geology";
}

type PlanetName =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

interface PlanetSVGProps {
  showGuts: boolean;
}

const planetSVGs: Record<PlanetName, ComponentType<PlanetSVGProps>> = {
  mercury: dynamic<PlanetSVGProps>(() => import("./planetSVG/mercury")),
  venus: dynamic<PlanetSVGProps>(() => import("./planetSVG/venus")),
  earth: dynamic<PlanetSVGProps>(() => import("./planetSVG/earth")),
  mars: dynamic<PlanetSVGProps>(() => import("./planetSVG/mars")),
  jupiter: dynamic<PlanetSVGProps>(() => import("./planetSVG/jupiter")),
  saturn: dynamic<PlanetSVGProps>(() => import("./planetSVG/saturn")),
  uranus: dynamic<PlanetSVGProps>(() => import("./planetSVG/uranus")),
  neptune: dynamic<PlanetSVGProps>(() => import("./planetSVG/neptune")),
};

export default function PlanetImage({
  images,
  name,
  view,
  className,
}: PlanetImageProps) {
  const lowerCasePlanetName = name.toLowerCase() as PlanetName;

  const PlanetSVG = planetSVGs[lowerCasePlanetName];

  let content;

  if (view === "overview") {
    content = <img src={images.planet} alt={`${name} - ${view}`} />;
  } else if (view === "structure") {
    content = <img src={images.internal} alt={`${name} - ${view}`} />;
  } else if (view === "geology") {
    content = (
      <>
        <img src={images.planet} alt={`${name} - ${view}`} />
        <img
          className="absolute bottom-[11px] left-1/2 -translate-x-1/2 w-[163px] h-[199px]"
          src={images.geology}
          alt={`${name} - ${view}`}
        />
      </>
    );
  }

  const showGutsBoolean = view === "overview" ? false : true;

  return (
    <div className="w-full">
      <div
        className={` px-[75px] lg:px-[0px] w-full pt-[39px] md:pt-[54px] pb-[41px] md:pb-[37px] max-w-[520px] lg:max-w-[582px] m-auto flex items-center justify-center relative ${className}`}
      >
        <PlanetSVG showGuts={showGutsBoolean} />
      </div>
    </div>
  );
}
