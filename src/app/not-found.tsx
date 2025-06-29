import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-primary">Not Found</h2>
      <p className="text-primary">Could not find requested resource</p>
      <Link href="/Mercury" className="text-primary underline">
        Return Home
      </Link>
    </div>
  );
}
