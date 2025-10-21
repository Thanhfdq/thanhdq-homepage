// src/app/projects/page.tsx
import ProjectCard from "@/app/components/ProjectCard";

const projects = [
  {
    title: "Task Management",
    slug: "task-manager",
    description:
      "A productivity app built for military to manage tasks efficiently.",
    image: "/taskapp-logo-panel.png",
    tags: ["Indie", "React", "Tauri", "ExpressJS", "MySQL"],
  },
  {
    title: "Bachhoa",
    slug: "bachhoa",
    description:
      "A system use to manage and operate a mini market in Administration, Checkout and Inventory.",
    image: "/bachhoa-logo-panel.png",
    tags: ["Teamwork", "Spring Boot", "Angular JS", "MySQL"],
  },
  {
    title: "Cinesys",
    slug: "cinesys",
    description:
      "A cinema management system build with Java Swing for Windows.",
    image: "/cinesys-logo-panel.png",
    tags: ["Teamwork", "Java Swing", "SQL Server"],
  },
];

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
