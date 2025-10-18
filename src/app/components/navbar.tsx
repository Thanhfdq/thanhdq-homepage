import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="dark w-full border-b border-border bg-background text-foreground px-6 py-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg">
        ThanhDQ
      </Link>
      <div className="space-x-6">
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
