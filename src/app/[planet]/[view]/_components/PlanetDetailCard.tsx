import { ReactNode } from "react";

interface PlanetDetailCardProps {
  children: ReactNode;
  planetStat: string;
}

export default function PlanetDetailCard({
  children,
  planetStat,
}: PlanetDetailCardProps) {
  return (
    <div className="border-accent border-[1px] pt-[19px] pb-[22px] px-[23px] w-[255px] w-full flex justify-between items-center">
      <p className="text-secondary font-spartan font-semibold text-[14px] leading-[25px] tracking-[1px]">
        {children}
      </p>
      <p className="text-primary font-antonio tracking-[-1.5px] text-[40px] uppercase">
        {planetStat}
      </p>
    </div>
  );
}
