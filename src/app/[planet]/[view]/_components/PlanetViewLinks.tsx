import Link from "next/link";

interface PlanetViewLinksProps {
  currentPlanet: string,
  view: string
}

export default function PlanetViewLinks(props: PlanetViewLinksProps) {

  const views = [
    { label: "OVERVIEW", key: "overview" },
    { label: "INTERNAL STRUCTURE", key: "structure" },
    { label: "SURFACE GEOLOGY", key: "geology" },
  ];

  return (
    <div>
      {views.map((view, index) => (
        <Link
          key={view.key}
          href={`/${props.currentPlanet}/${view.key}`}
          className={`block text-primary py-3 border-accent border w-full text-left mb-[16px] hover:bg-hover ${props.view === view.key ? "bg-" + (props.currentPlanet) : ""}`}
        >
          <span className="mx-6 text-secondary">0{index + 1}</span> {view.label}
        </Link>
      ))}
    </div>
  );
}
