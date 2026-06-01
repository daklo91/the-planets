import { notFound } from "next/navigation";
import planetDataArray from "@/data/data.json";
import PlanetDetailCard from "./[view]/_components/PlanetDetailCard";
import PersistedPlanetImage from "./[view]/_components/PersistedPlanetImage";

interface Props {
  children: React.ReactNode;
  params: { planet: string };
}

export default function PlanetLayout({ children, params }: Props) {
  const planetData = planetDataArray.find(
    (p) => p.name.toLowerCase() === params.planet.toLowerCase(),
  );

  if (!planetData) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-[1086px] m-auto">
        <div className="grid lg:grid-cols-[582px_minmax(0,1fr)_350px] mb-[87px]  lg:mx-0">
          <div className="order-2 lg:row-span-2 lg:col-start-1 md:col-span-2 md:order-none">
            <PersistedPlanetImage
              images={planetData.images}
              name={planetData.name}
            />
          </div>
          {children}
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] max m-auto">
          <PlanetDetailCard planetStat={planetData.rotation}>
            ROTATION TIME
          </PlanetDetailCard>
          <PlanetDetailCard planetStat={planetData.revolution}>
            REVOLUTION TIME
          </PlanetDetailCard>
          <PlanetDetailCard planetStat={planetData.radius}>RADIUS</PlanetDetailCard>
          <PlanetDetailCard planetStat={planetData.temperature}>
            AVERAGE TEMP.
          </PlanetDetailCard>
        </div>
      </div>
    </main>
  );
}
