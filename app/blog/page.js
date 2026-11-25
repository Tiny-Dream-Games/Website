import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const blogDirectory = path.join(process.cwd(), "app", "content", "blog");
const PAGE_SIZE = 9;

function getBlogs() {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const content = fs.readFileSync(path.join(blogDirectory, file), "utf8");
      const { data } = matter(content);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title || "Untitled Article",
        description: data.description || "",
        date: data.date || "",
        cover: data.cover || "",
        category: data.category || "Game",
      };
    })
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

export const metadata = {
  title: "Game Development Insights | Tiny Dream Games",
  description:
    "Explore game development guides, mobile game costs, game design insights and practical knowledge from Tiny Dream Games.",
  alternates: {
    canonical: "https://tinydreamgames.com/blog",
  },
};

function formatDate(date) {
  if (!date) return "";

  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BlogCover({ src, title, featured = false }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#11121a ${
        featured ? "aspect-[16/9]" : "aspect-[16/10]"
      }`}
    >
      {src && (
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function pageUrl(page, query = "", category = "All") {
  const params = new URLSearchParams();

  if (page > 1) params.set("page", page);
  if (query) params.set("q", query);
  if (category && category !== "All") params.set("category", category);

  const queryString = params.toString();

  return queryString ? `/blog?${queryString}` : "/blog";
}

function Pagination({ currentPage, totalPages, query, category }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 && (
        <Link
          href={pageUrl(currentPage - 1, query, category)}
          className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:border-purple-400/40 hover:text-white"
        >
          ← Previous
        </Link>
      )}

      {start > 1 && (
        <>
          <Link
            href={pageUrl(1, query, category)}
            className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-300 hover:border-purple-400/40"
          >
            1
          </Link>

          {start > 2 && <span className="px-1 text-gray-600">…</span>}
        </>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={pageUrl(page, query, category)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`rounded-lg border px-4 py-2.5 text-sm transition ${
            page === currentPage
              ? "border-purple-500 bg-purple-600 text-white"
              : "border-white/10 text-gray-300 hover:border-purple-400/40 hover:text-white"
          }`}
        >
          {page}
        </Link>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-1 text-gray-600">…</span>
          )}

          <Link
            href={pageUrl(totalPages, query, category)}
            className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-300 hover:border-purple-400/40"
          >
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          href={pageUrl(currentPage + 1, query, category)}
          className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:border-purple-400/40 hover:text-white"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params?.page) || 1);
  const query = (params?.q || "").trim();
  const category = params?.category || "All";

  const allBlogs = getBlogs();

  // SEARCH + CATEGORY FILTER
  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesQuery =
      !query ||
      `${blog.title} ${blog.description}`
        .toLowerCase()
        .includes(query.toLowerCase());

    const matchesCategory = category === "All" || blog.category === category;

    return matchesQuery && matchesCategory;
  });

  // Featured article only on page 1, All category, without search
  const showFeatured =
    currentPage === 1 &&
    !query &&
    category === "All" &&
    filteredBlogs.length > 0;

  const featured = showFeatured ? filteredBlogs[0] : null;

  const listBlogs = showFeatured ? filteredBlogs.slice(1) : filteredBlogs;
  const pageSize = showFeatured ? PAGE_SIZE - 1 : PAGE_SIZE;

  const totalPages = Math.max(1, Math.ceil(listBlogs.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const startIndex = (safePage - 1) * pageSize;
  const visibleBlogs = listBlogs.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08090D] text-white">
        {/* HERO */}
        <section className="relative border-b border-white/[0.06]">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-purple-700/[0.12] blur-[130px]" />
            <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.10] blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-35 md:px-10 md:pb-24 md:pt-35">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                <span className="text-xs font-semibold tracking-[0.14em] text-purple-300">
                  TINY DREAM GAMES · GAME DEVELOPMENT INSIGHTS
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
                Game Development
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
                  Insights & Ideas.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg md:leading-9">
                Discover game development guides, game design tips, mobile game
                development insights, gameplay mechanics, and industry trends.
                Explore ideas, techniques, and practical knowledge to help
                create better games and engaging player experiences.
              </p>

              {/* Topic tags */}
              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  "Game Development",
                  "Game Design",
                  "Mobile Game Development",
                  "Gameplay Mechanics",
                  "Game Industry Insights",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-sm text-gray-400 transition hover:border-purple-400/30 hover:text-purple-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero decorative visual */}
            <div className="pointer-events-none absolute right-[-5%] top-[15%] hidden h-[440px] w-[440px] items-center justify-center lg:flex">
              <div className="absolute h-[330px] w-[330px] rounded-full border border-purple-500/10" />
              <div className="absolute h-[250px] w-[250px] rounded-full border border-purple-500/[0.08]" />
              <div className="absolute h-[170px] w-[170px] rounded-full bg-purple-600/[0.10] blur-[70px]" />

              <div className="absolute rotate-[-12deg] rounded-3xl border border-white/[0.08] bg-[#11121b]/80 px-8 py-10 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <span className="h-2 w-2 rounded-full bg-violet-300/50" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <div className="space-y-3">
                  <div className="h-2 w-40 rounded-full bg-purple-400/30" />
                  <div className="h-2 w-28 rounded-full bg-white/10" />
                  <div className="h-2 w-36 rounded-full bg-white/[0.06]" />
                </div>

                <div className="mt-7 flex h-24 w-48 items-end gap-2">
                  <div className="h-12 w-8 rounded-t-md bg-purple-500/20" />
                  <div className="h-20 w-8 rounded-t-md bg-purple-500/40" />
                  <div className="h-16 w-8 rounded-t-md bg-violet-400/30" />
                  <div className="h-24 w-8 rounded-t-md bg-purple-400/50" />
                  <div className="h-10 w-8 rounded-t-md bg-purple-500/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG CONTENT */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
          {/* FEATURED */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-14 grid overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0E14] transition hover:border-purple-500/30 md:grid-cols-2"
            >
              <BlogCover src={featured.cover} title={featured.title} featured />

              <div className="flex flex-col justify-center p-6 md:p-9">
                <span className="mb-4 w-fit rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  Featured Article · {featured.category}
                </span>

                {featured.date && (
                  <p className="mb-3 text-sm text-gray-500">
                    {formatDate(featured.date)}
                  </p>
                )}

                <h2 className="text-2xl font-bold leading-snug md:text-3xl transition group-hover:text-purple-300">
                  {featured.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-400">
                  {featured.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:gap-3 transition-all">
                  Read Featured Article →
                </span>
              </div>
            </Link>
          )}

          {/* CATEGORY FILTER */}
          <div className="mb-6 flex flex-wrap gap-2">
            {["All", "Game", "Web", "App"].map((item) => (
              <Link
                key={item}
                href={pageUrl(1, query, item)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? "border-purple-500 bg-purple-600 text-white"
                    : "border-white/10 bg-[#101117] text-gray-400 hover:border-purple-400/40 hover:text-white"
                }`}
              >
                {item === "All" ? "All Articles" : `${item} Development`}
              </Link>
            ))}
          </div>

          {/* LIST HEADER + SEARCH */}
          <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-purple-400">
                EXPLORE OUR ARTICLES
              </p>

              <h2 className="text-2xl font-bold md:text-3xl">
                {query
                  ? "Search Results"
                  : category !== "All"
                    ? `${category} Articles`
                    : "Latest Articles"}
              </h2>
            </div>

            <form
              action="/blog"
              method="GET"
              className="flex w-full gap-2 sm:max-w-sm"
            >
              <input
                type="search"
                name="q"
                defaultValue={query}
                placeholder="Search articles..."
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#101117] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500/50"
              />

              <input type="hidden" name="category" value={category} />

              <button
                type="submit"
                className="rounded-xl border border-purple-500/20 bg-purple-600/10 px-4 text-sm font-medium text-purple-300 transition hover:bg-purple-600 hover:text-white"
              >
                Search
              </button>
            </form>
          </div>

          {/* GRID */}
          {visibleBlogs.length > 0 ? (
            <>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visibleBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D0E14] transition duration-300 hover:-translate-y-1 hover:border-purple-500/30"
                  >
                    <BlogCover src={blog.cover} title={blog.title} />

                    <div className="p-5">
                      <span className="mb-3 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[11px] font-medium text-purple-300">
                        {blog.category}
                      </span>

                      {blog.date && (
                        <p className="mb-3 text-xs text-gray-500">
                          {formatDate(blog.date)}
                        </p>
                      )}

                      <h3 className="line-clamp-2 text-lg font-semibold leading-6 text-gray-100 transition group-hover:text-purple-300">
                        {blog.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                        {blog.description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition group-hover:gap-3">
                        Read Article <span>→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* RESULTS COUNT */}
              <p className="mt-8 text-center text-xs text-gray-500">
                Showing {listBlogs.length === 0 ? 0 : startIndex + 1}
                {"–"}
                {startIndex + visibleBlogs.length} of {listBlogs.length}{" "}
                articles
              </p>

              {/* PAGINATION */}
              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                query={query}
                category={category}
              />
            </>
          ) : (
            <div className="rounded-2xl border border-white/[0.07] bg-[#0D0E14] py-20 text-center">
              <h3 className="text-lg font-semibold text-gray-200">
                No articles found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try searching with a different keyword.
              </p>

              <Link
                href="/blog"
                className="mt-5 inline-block text-sm text-purple-400 hover:text-purple-300"
              >
                Clear search →
              </Link>
            </div>
          )}
        </section>

        {/* COMPACT CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
          <div className="flex flex-col justify-between gap-5 rounded-2xl border border-purple-500/15 bg-gradient-to-r from-[#171022] to-[#0D0E14] p-7 sm:flex-row sm:items-center md:p-9">
            <div>
              <p className="text-xs font-semibold tracking-widest text-purple-400">
                HAVE A GAME IDEA?
              </p>

              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                Let&apos;s bring your vision to life.
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Tell us about your game project.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
            >
              Discuss Your Project →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
