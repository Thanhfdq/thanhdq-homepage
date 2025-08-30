import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 space-y-12 bg-background text-foreground">
      {/* Profile / Intro */}
      <section className="text-center space-y-4">
        <Image
          src="/thanhdq.svg"
          alt="ThanhDQ logo"
          width={120}
          height={120}
          className="mx-auto dark:invert"
        />
        <h1 className="text-3xl font-bold">Đồng Quốc Thành</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Engineer student at UIT HCM ✨ — passionate about web development,
          technology, and creating beautiful, useful apps.
        </p>
      </section>

      {/* Links */}
      <section className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow hover:opacity-90 transition"
        >
          View My Projects
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-xl border border-border hover:bg-accent transition"
        >
          Read My Blog
        </Link>
      </section>
    </main>
  );
}
