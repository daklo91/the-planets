import Link from "next/link";



export default function NotFound() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold text-primary">404 – Page Not Found</h1>

      <p className="text-secondary mt-4 mb-2">
        The page you’re looking for doesn’t exist in this solar system.
      </p>
      <Link href="/" className="text-primary underline">
        Go back home
      </Link>
    </main>
  );
}
