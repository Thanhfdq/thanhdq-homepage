// src/components/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  slug,
  image = "/default-project.jpg",
  tags = [],
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
