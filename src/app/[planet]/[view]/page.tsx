import { notFound } from "next/navigation";
import planetDataArray from "@/data/data.json";
import PlanetImage from "./_components/PlanetImage";
import PlanetViewLinks from "./_components/PlanetViewLinks";

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
      <div className="flex max-w-[1086px] justify-between">
        <div className="w-1/2">
          <PlanetImage
            images={planetData.images}
            view={lowerCaseView}
            name={planetData.name}
          />
        </div>
        <div className="w-1/2 max-w-[350px]">
          <h1 className="heading-h1 uppercase mb-[23px]">{planetData.name}</h1>
          <p className="text-primary font-spartan font-normal">
            {planetData[lowerCaseView].content}
          </p>
          <p className="text-secondary mt-[49px] mb-[39px]">
            Source :{" "}
            <a
              href={planetData[lowerCaseView].source}
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
          <PlanetViewLinks currentPlanet={planetData.name.toLowerCase()} view={view} />
        </div>
      </div>
      <div className="flex">
        <div>
          <p className="text-secondary">ROTATION TIME</p>
          <p className="text-primary">{planetData.rotation}</p>
        </div>
        <div>
          <p className="text-secondary">REVOLUTION TIME</p>
          <p className="text-primary">{planetData.revolution}</p>
        </div>
      </div>
    </main>
  );
}
