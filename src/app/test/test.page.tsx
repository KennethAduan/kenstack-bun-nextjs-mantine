import Link from "next/link";

export default function TestPageRedirect() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
