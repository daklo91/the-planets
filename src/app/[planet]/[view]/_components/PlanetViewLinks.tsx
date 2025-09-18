import Link from "next/link";

interface PlanetViewLinksProps {
  currentPlanet: string,
  viewParam: string,
  UIColor: string
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
          className="block text-primary py-3 font-spartan font-semibold tracking-[3.2px] text-sm/[25px] border-accent border w-full text-left mb-[16px] hover:bg-hover"
          style={{cursor : props.viewParam === view.key ? "default" : "", backgroundColor: props.viewParam === view.key ? props.UIColor : ""}}
        >
          <span className="ml-[28px] mr-[25px] mt-[12px] mb-[11px] text-primary/50">0{index + 1}</span>{view.label}
        </Link>
      ))}
    </div>
  );
}
