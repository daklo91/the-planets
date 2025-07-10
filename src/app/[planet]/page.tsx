import planetDataArray from "@/data/data.json";
import { notFound } from "next/navigation";
import iconSource from "";

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
      <h1 className="heading-h1">{PLANET_DATA.name}</h1>
      <p className="text-primary font-spartan-regular">
        {PLANET_DATA.overview.content}
      </p>

      <img src={PLANET_DATA.images.planet} />

      <p className="text-secondary">
        Source :{" "}
        <a
          href={PLANET_DATA.overview.source}
          target="_blank"
          className="font-bold underline"
        >
          Wikipedia
          <img src="/images/icon-source.svg" className="inline-block ml-2" />
        </a>
      </p>

      <button className="text-primary py-3 border-accent border-solid border">
        <span className="mx-6">01</span> OVERVIEW
      </button>
    </main>
  );
}
