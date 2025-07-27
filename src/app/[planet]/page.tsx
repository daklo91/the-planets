import planetDataArray from "@/data/data.json";
import { notFound } from "next/navigation";
import PlanetProvider from "./_components/PlanetContext";
import PlanetImage from "./_components/PlanetImage";
import PlanetButtons from "./_components/PlanetButtons";

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
    <PlanetProvider>
      <main>
        <div className="flex">
          <div className="w-1/2">
          <PlanetImage images={PLANET_DATA.images} name={PLANET_DATA.name} />
        </div>
        <div className="w-1/2 max-w-[350px]">
          <h1 className="heading-h1">{PLANET_DATA.name}</h1>
          <p className="text-primary font-spartan-regular">
            {PLANET_DATA.overview.content}
          </p>
          <p className="text-secondary">
            Source :{" "}
            <a
              href={PLANET_DATA.overview.source}
              target="_blank"
              className="font-bold underline"
            >
              Wikipedia
              <img
                src="/images/icon-source.svg"
                className="inline-block ml-2"
                alt=""
              />
            </a>
          </p>
          <PlanetButtons />
        </div>
        </div>
        <div>
          <div>
            <p className="text-secondary">ROTATION TIME</p>
            <p className="text-primary">{PLANET_DATA.rotation}</p>
          </div>
        </div>
      </main>
    </PlanetProvider>
  );
}
