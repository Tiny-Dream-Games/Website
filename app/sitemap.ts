
import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://tinydreamgames.com";

// App Router ke folder ka path automatically find karo
function getAppDirectory(): string {
  const root = process.cwd();

  const possiblePaths = [
    path.join(root, "app"),
    path.join(root, "src", "app"),
  ];

  const appDirectory = possiblePaths.find((dir) =>
    fs.existsSync(path.join(dir, "layout.tsx")) ||
    fs.existsSync(path.join(dir, "page.tsx"))
  );

  if (!appDirectory) {
    throw new Error("Next.js app directory not found.");
  }

  return appDirectory;
}

// Saare public, static page routes discover karo
function discoverPages(
  directory: string,
  appDirectory: string
): string[] {
  const routes: string[] = [];
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  const pageFile = entries.find(
    (entry) =>
      entry.isFile() &&
      /^page\.(tsx|ts|jsx|js)$/.test(entry.name)
  );

  if (pageFile) {
    const relativePath = path.relative(appDirectory, directory);
    const segments = relativePath
      .split(path.sep)
      .filter(Boolean);

    // Route groups jaise (site) URL ka part nahi hote
    const routeSegments = segments.filter(
      (segment) =>
        !(
          segment.startsWith("(") &&
          segment.endsWith(")")
        )
    );

    // Dynamic routes ko tab tak skip karo jab tak unke
    // actual URLs kisi data source se available na hon
    const isDynamic = routeSegments.some(
      (segment) =>
        segment.startsWith("[") ||
        segment.startsWith("@")
    );

    // Private folders aur parallel routes ko ignore karo
    const isPrivate = segments.some(
      (segment) =>
        segment.startsWith("_") ||
        segment.startsWith("@")
    );

    const route = "/" + routeSegments.join("/");

    const excludedRoutes = [
      "/maintenance",
      "/not-found",
    ];

    if (
      !isDynamic &&
      !isPrivate &&
      !excludedRoutes.includes(route)
    ) {
      routes.push(route === "/" ? "/" : route);
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Private folders aur parallel routes ke andar mat jao
    if (
      entry.name.startsWith("_") ||
      entry.name.startsWith("@")
    ) {
      continue;
    }

    routes.push(
      ...discoverPages(
        path.join(directory, entry.name),
        appDirectory
      )
    );
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDirectory = getAppDirectory();
  const routes = discoverPages(appDirectory, appDirectory);

  return [...new Set(routes)].map((route) => {
    const pageDirectory = path.join(
      appDirectory,
      ...route.split("/").filter(Boolean)
    );

    const pageFile = ["tsx", "ts", "jsx", "js"]
      .map((extension) =>
        path.join(pageDirectory, `page.${extension}`)
      )
      .find((file) => fs.existsSync(file));

    return {
      url: `${SITE_URL}${route === "/" ? "" : route}`,
      ...(pageFile
        ? { lastModified: fs.statSync(pageFile).mtime }
        : {}),
    };
  });
}
