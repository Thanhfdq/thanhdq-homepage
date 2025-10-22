import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/project";

interface ProjectDetailProps {
  params: { slug: string };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailProps) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  const { metadata, contentHtml } = project;
  const { title, description, image, tags } = metadata as {
    title: string;
    description: string;
    image: string;
    tags: string[];
  };

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {image && (
        <div className="relative w-full h-72 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-md bg-accent text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
