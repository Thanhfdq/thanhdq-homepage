import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/**
 * Load and parse a Markdown file with front matter.
 * Returns { metadata, contentHtml }.
 */
export async function getMarkdownContent(filePath: string) {
  const markdown = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(markdown);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return { metadata: data, contentHtml };
}

/**
 * Get the full path to a Markdown file in src/content/projects.
 */
export function getProjectMarkdownPath(slug: string) {
  return path.join(process.cwd(), "src/content/projects", `${slug}.md`);
}

