
import type { MetadataRoute } from "next";

const baseUrl = "https://www.tinydreamgames.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/contact",
    "/services/game-development",
    "/services/web-development",
    "/services/app-development",
    "/games/brick-breaker",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}
