import Link from "next/link";

interface PlanetViewLinksProps {
  currentPlanet: string;
  viewParam: string;
  UIColor: string;
  className: string;
}

export default function PlanetViewLinks(props: PlanetViewLinksProps) {
  const views = [
    { label: "OVERVIEW", key: "overview" },
    { label: "INTERNAL STRUCTURE", key: "structure" },
    { label: "SURFACE GEOLOGY", key: "geology" },
  ];

  return (
    <div className={props.className}>
      {views.map((view, index) => (
        <Link
          key={view.key}
          href={`/${props.currentPlanet}/${view.key}`}
          className={
            `block text-primary py-3 font-spartan font-semibold tracking-[3.2px] text-md/[25px] w-full text-left mb-[16px] hover:bg-hover ` +
            (props.viewParam === view.key
              ? `border-transparent border-b-4 border-b-[var(--ui-color)] md:border-b-0 md:bg-[var(--ui-color)]`
              : `border border-accent`)
          }
          style={
            {
              cursor: props.viewParam === view.key ? "default" : "",
              ["--ui-color" as any]: props.UIColor,
            } as React.CSSProperties
          }
        >
          <span className="ml-[28px] mr-[25px] mt-[12px] mb-[11px] text-primary/50 hidden md:inline-block">
            0{index + 1}
          </span>

          {view.label.split(" ").map((word, i) => (
            <span
              key={i}
              className={i === 1 ? "hidden md:inline-block" : undefined}
            >
              {i === 1 ? "\u00A0" + word : word}
            </span>
          ))}
        </Link>
      ))}
    </div>
  );
}
