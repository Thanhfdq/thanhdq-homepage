import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className="dark flex flex-col items-center justify-center min-h-screen px-6 py-12 space-y-12 bg-background text-foreground">
      {/* Profile / Intro */}
      <section>
        <Image
          src="/thanhdq.svg"
          alt="ThanhDQ logo"
          width={320}
          height={320}
          className="mx-auto py-15 dark:invert"
        />
      </section>
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Đồng Quốc Thành</h1>
        <Image
          src="/solana-hack05-11-08-23-square.jpg"
          alt="ThanhDQ avatar"
          width={100}
          height={100}
          className="mx-auto rounded-full"
        />
        <p className="text-muted-foreground max-w-md">
          Full-stack developer - Entry Level with a passion for building
          innovative and exciting web and mobile application ✨. Engineer
          student at UIT HCM — passionate about web development, technology, and
          creating beautiful, useful apps.
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
      {/* connect */}
      <h2 className="text-2xl font-bold">Connect with Me</h2>
      <section className="flex flex-col gap-4">
        <Link
          href="https://github.com/Thanhfdq"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-2"
        >
          {" "}
          <FaGithub /> @thanhfdq
        </Link>
        <Link
          href="https://x.com/dongquocthanh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-2"
        >
          <FaXTwitter /> @dongquocthanh
        </Link>
        <Link
          href="https://www.linkedin.com/in/thanh-dong-217625266/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-2"
        >
          <FaLinkedin /> @ThanhDong
        </Link>
        <Link
          href="https://www.instagram.com/thanhquocdong/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-2"
        >
          <FaInstagram /> @thanhquocdong
        </Link>
        <p className="flex items-center gap-2">
          <FaEnvelope /> thanhdqit26@gmail.com
        </p>
      </section>
    </main>
  );
}
