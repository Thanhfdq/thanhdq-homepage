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
    <main className="dark flex flex-col bg-background text-foreground">
      {/* I. highlight */}
      <section className="w-full min-h-screen bg-foreground">
        <Image
          src="/thanhdq.svg"
          alt="ThanhDQ logo"
          width={320}
          height={320}
          className="mx-auto py-15 dark:invert"
        />
      </section>

      {/* II. overview */}
      <div className="flex flex-col px-8 py-8 gap-8 max-w-xl w-full mx-auto w-full">
        {/* 1. profile */}
        <section className="flex flex-col gap-4">
          <div className="w-24 h-24 min-w-24 mx-auto relative">
            <Image
              src="/solana-hack05-11-08-23-square2.jpg"
              alt="ThanhDQ avatar"
              fill
              className="object-cover rounded-full border-2 border-white"
            />
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">Đồng Quốc Thành</div>
            <p>Frontend developer</p>
          </div>
          <p className="text-base text-muted-foreground">
            Passion for building innovative and exciting web and mobile
            application ✨. Engineer student at UIT HCM — passionate about web
            development, technology, and creating beautiful, useful apps. When
            offline, I like to play sports ⚽, read books 📚, and explore new
            places 🌍.
          </p>
        </section>

        {/* 2. Links */}
        <section className="flex flex-col sm:flex-row gap-4 md:mx-auto text-center">
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
        {/* 3. connect */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Social</h2>
          <div className="flex flex-col gap-4">
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
          </div>
        </section>
      </div>
    </main>
  );
}
