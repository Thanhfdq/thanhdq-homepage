import { projects } from "@/lib/project";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="px-6 py-12 space-y-12">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my favorite projects — built with modern web
          technologies, creativity, and a lot of coffee ☕.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </main>
  );
}
