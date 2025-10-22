import fs from "fs";
import path from "path";
import { getMarkdownContent } from "./markdown";

const projectsDir = path.join(process.cwd(), "src/content/projects");

/**
 * Get all projects (metadata only)
 */
export async function getAllProjects() {
  const files = fs.readdirSync(projectsDir);

  const projects = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(projectsDir, file);
      const { metadata } = await getMarkdownContent(filePath);
      const slug = file.replace(/\.md$/, "");
      return { slug, ...metadata };
    })
  );

  // Sort newest first or alphabetically
  return projects.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

/**
 * Get a single project by slug
 */
export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return await getMarkdownContent(filePath);
}
