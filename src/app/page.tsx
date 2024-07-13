import planetData from "@/data/data.json";
import Image from "next/image";

export default function Mercury() {
  return (
    <main>
      <p className="heading-h2">{planetData[0].overview.content}</p>
      <Image src={planetData[0].images.geology} height={100} width={100} />
    </main>
  );
}
