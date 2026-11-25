import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const baseUrl = "https://www.tinydreamgames.com";
const blogDirectory = path.join(process.cwd(), "app/content/blog");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/contact",
    "/services/game-development",
    "/services/web-development",
    "/services/app-development",
    "/games/brick-breaker",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page === "/blog" ? 0.9 : 0.7,
  }));

  const blogFiles = fs.existsSync(blogDirectory)
    ? fs.readdirSync(blogDirectory).filter((file) => file.endsWith(".mdx"))
    : [];

  const blogPages: MetadataRoute.Sitemap = blogFiles.map((file) => {
    const filePath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    const slug = file.replace(/\.mdx$/, "");

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: data.date ? new Date(data.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return [...staticPages, ...blogPages];
}