import { notFound } from "next/navigation";
import planetDataArray from "@/data/data.json";
import PlanetImage from "./_components/PlanetImage";
import PlanetViewLinks from "./_components/PlanetViewLinks";
import PlanetDetailCard from "./_components/PlanetDetailCard";

const VALID_VIEWS = ["overview", "structure", "geology"] as const;
type ViewKey = typeof VALID_VIEWS[number];

interface Props {
  params: {
    planet: string;
    view: ViewKey;
  };
}

export default function PlanetPage({ params }: Props) {
  const { planet, view } = params;

  const lowerCaseView = view.toLowerCase() as ViewKey;

  if (!VALID_VIEWS.includes(lowerCaseView)) {
    notFound();
  }

  const planetData = planetDataArray.find(
    (p) => p.name.toLowerCase() === planet.toLowerCase()
  );

  if (!planetData) {
    notFound();
  }

  return (
    <main>
      <div className=" max-w-[1086px]  m-auto">
        <div className="flex justify-between mb-[87px]">
            <div className="w-1/2">
            <PlanetImage
              images={planetData.images}
              view={lowerCaseView}
              name={planetData.name}
            />
          </div>
          <div className="w-1/2 max-w-[350px]">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[5rem] font-antonio font-medium text-primary uppercase mb-[23px]">{planetData.name}</h1>
            <p className="text-primary font-spartan font-normal">
              {planetData[lowerCaseView].content}
            </p>
            <p className="text-secondary mt-[49px] mb-[39px]">
              Source :{" "}
              <a
                href={planetData[lowerCaseView].source}
                target="_blank"
                className="font-bold underline hover:brightness-125"
              >
                Wikipedia
                {/* icon-source.svg */}
                <svg className="inline-block ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="currentColor" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" /></svg>
              </a>
            </p>
            <PlanetViewLinks currentPlanet={planetData.name.toLowerCase()} viewParam={lowerCaseView} UIColor={planetData.UIColor} />
          </div>
        </div>
        <div className="flex gap-[30px] m-auto">
          <PlanetDetailCard planetStat={planetData.rotation}>ROTATION TIME</PlanetDetailCard>
          <PlanetDetailCard planetStat={planetData.revolution}>REVOLUTION TIME</PlanetDetailCard>
          <PlanetDetailCard planetStat={planetData.radius}>RADIUS</PlanetDetailCard>
          <PlanetDetailCard planetStat={planetData.temperature}>AVERAGE TEMP.</PlanetDetailCard>
        </div>
      </div>
    </main>
  );
}
