import planetDataArray from "@/data/data.json";
import { notFound } from "next/navigation";

interface PlanetPageProps {
  params: {
    planet: string;
  };
}

export default function PlanetPage({ params }: PlanetPageProps) {
  const PLANET_DATA = planetDataArray.find(
    (planetObject) =>
      planetObject.name.toLowerCase() === params.planet.toLowerCase()
  );

  if (!PLANET_DATA) {
    notFound();
  }

  return (
    <main>
      <p className="heading-h2">{PLANET_DATA.name}</p>
    </main>
  );
}
