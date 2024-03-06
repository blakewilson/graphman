import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="mr-auto uppercase font-extrabold text-white text-2xl"
    >
      Graphman
    </Link>
  );
}
