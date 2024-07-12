import planetData from "@/data/data.json";

export default function Mercury() {
  return (
    <main>
      <p className="heading-h2">{planetData[0].overview.content}</p>
    </main>
  );
}
