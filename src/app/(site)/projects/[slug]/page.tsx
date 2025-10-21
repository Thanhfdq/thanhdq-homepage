import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/project";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      <div className="relative w-full h-72 rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md text-sm bg-accent text-accent-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: markdownToHTML(project.content) }}
      />
    </main>
  );
}

/**
 * Quick helper to convert markdown-like content into HTML
 * (for now, uses simple replacements instead of a full markdown lib)
 */
function markdownToHTML(md: string) {
  return md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}
