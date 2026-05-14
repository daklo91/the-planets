"use client";

import { useParams } from "next/navigation";
import PlanetImage from "./PlanetImage";

const VALID_VIEWS = ["overview", "structure", "geology"] as const;
type ViewKey = (typeof VALID_VIEWS)[number];

interface PersistedPlanetImageProps {
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  name: string;
}

export default function PersistedPlanetImage({
  images,
  name,
}: PersistedPlanetImageProps) {
  const params = useParams();
  const raw = typeof params?.view === "string" ? params.view.toLowerCase() : "";
  const view: ViewKey = VALID_VIEWS.includes(raw as ViewKey)
    ? (raw as ViewKey)
    : "overview";

  return (
    <PlanetImage
      images={images}
      view={view}
      name={name}
      className="sm:m-auto"
    />
  );
}
