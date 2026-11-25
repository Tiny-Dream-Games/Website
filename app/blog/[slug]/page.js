import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

const blogDirectory = path.join(process.cwd(), "app", "content", "blog");

function getRelatedBlogs(currentSlug) {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx") && file !== `${currentSlug}.mdx`)
    .map((file) => {
      const filePath = path.join(blogDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title || "Untitled Article",
        description: data.description || "",
        date: data.date || "",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);
}

const SITE_URL = "https://www.tinydreamgames.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return {};

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  const canonical = `${SITE_URL}/blog/${slug}`;
  const cover = data.cover
    ? data.cover.startsWith("http")
      ? data.cover
      : `${SITE_URL}${data.cover}`
    : `${SITE_URL}/tiny-dream-logo.png`;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords || data.tags || [],
    authors: [{ name: data.author || "Tiny Dream Games" }],

    alternates: {
      canonical,
    },

    openGraph: {
      title: data.title,
      description: data.description,
      url: canonical,
      type: "article",
      siteName: "Tiny Dream Games",
      publishedTime: data.date,
      modifiedTime: data.updated || data.date,
      authors: [data.author || "Tiny Dream Games"],
      images: [
        {
          url: cover,
          alt: data.coverAlt || data.title,
        },
      ],
      tags: data.tags || [],
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [cover],
    },
  };
}

const mdxComponents = {
  h1: (props) => (
    <h1
      className="mb-6 mt-10 text-3xl font-bold leading-tight tracking-tight md:text-4xl"
      {...props}
    />
  ),

  h2: (props) => (
    <h2
      className="mb-5 mt-12 border-b border-white/10 pb-3 text-2xl font-bold tracking-tight md:text-3xl"
      {...props}
    />
  ),

  h3: (props) => (
    <h3
      className="mb-4 mt-8 text-xl font-semibold leading-snug md:text-2xl"
      {...props}
    />
  ),

  p: (props) => (
    <p
      className="mb-6 text-base leading-8 text-gray-300 md:text-lg md:leading-9"
      {...props}
    />
  ),

  ul: (props) => (
    <ul
      className="mb-8 ml-6 list-disc space-y-3 text-gray-300 marker:text-purple-400"
      {...props}
    />
  ),

  ol: (props) => (
    <ol
      className="mb-8 ml-6 list-decimal space-y-3 text-gray-300 marker:text-purple-400"
      {...props}
    />
  ),

  li: (props) => <li className="pl-2 leading-8" {...props} />,

  strong: (props) => <strong className="font-semibold text-white" {...props} />,

  a: (props) => (
    <a
      className="font-medium text-purple-400 underline decoration-purple-400/40 underline-offset-4 transition hover:text-purple-300"
      {...props}
    />
  ),

  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-purple-500 bg-white/[0.03] py-3 pl-5 pr-4 text-gray-300"
      {...props}
    />
  ),

  table: (props) => (
    <div className="my-8 w-full overflow-x-auto rounded-xl border border-white/10">
      <table
        className="w-full min-w-[520px] border-collapse text-left text-sm md:text-base"
        {...props}
      />
    </div>
  ),

  thead: (props) => <thead className="bg-white/[0.06] text-white" {...props} />,

  tbody: (props) => <tbody className="divide-y divide-white/10" {...props} />,

  tr: (props) => <tr className="transition hover:bg-white/[0.03]" {...props} />,

  th: (props) => <th className="px-5 py-4 font-semibold" {...props} />,

  td: (props) => (
    <td className="px-5 py-4 leading-7 text-gray-300" {...props} />
  ),
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  const { content: article } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const relatedBlogs = getRelatedBlogs(slug);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08090D] text-white">
        <div className="mx-auto max-w-7xl px-5 py-35 md:px-8 md:py-35">
          {/* Main Layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            {/* Article */}
            <article className="min-w-0">
              {/* Article Header */}
              <header className="mb-10 border-b border-white/10 pb-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium tracking-wide text-purple-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  GAME DEVELOPMENT INSIGHTS
                </div>

                <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-[1.15]">
                  {data.title}
                </h1>

                {data.date && (
                  <p className="mt-5 text-sm text-gray-500">
                    Published on {data.date}
                  </p>
                )}

                {data.description && (
                  <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl md:leading-9">
                    {data.description}
                  </p>
                )}
              </header>
              {/* Featured Image */}
              {data.cover && (
                <figure className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-[#11121A]">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={data.cover}
                      alt={data.title || "Blog featured image"}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      className="object-cover"
                    />
                  </div>
                </figure>
              )}
              {/* Article Content */}
              <div>{article}</div>

              {/* Article CTA */}
              <section className="mt-14 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-[#11121A] to-[#08090D] p-7 md:p-9">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-400">
                  Have a Game Idea?
                </p>

                <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                  Let&apos;s Build Your Game Together
                </h2>

                <p className="mb-7 max-w-xl leading-7 text-gray-400">
                  Tell us about your game concept and let&apos;s explore the
                  right approach to turn your idea into a playable experience.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
                >
                  Discuss Your Game Project →
                </Link>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
                <div className="mb-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-purple-400">
                    Explore More
                  </p>

                  <h2 className="text-xl font-bold">More Articles</h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    More insights on game development and building games.
                  </p>
                </div>

                {relatedBlogs.length > 0 ? (
                  <div className="space-y-4">
                    {relatedBlogs.map((blog, index) => (
                      <Link
                        key={blog.slug}
                        href={`/blog/${blog.slug}`}
                        className="group block rounded-xl border border-white/10 p-4 transition hover:border-purple-500/40 hover:bg-purple-500/[0.04]"
                      >
                        <p className="mb-2 text-xs text-purple-400">
                          ARTICLE {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="text-sm font-semibold leading-6 text-gray-200 transition group-hover:text-purple-300">
                          {blog.title}
                        </h3>

                        {blog.description && (
                          <p className="mt-2 text-xs leading-5 text-gray-500 line-clamp-3">
                            {blog.description}
                          </p>
                        )}

                        <span className="mt-3 inline-block text-sm text-purple-400">
                          Read article →
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-white/10 p-5 text-sm leading-6 text-gray-500">
                    More articles coming soon. Check back for new game
                    development insights.
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="mt-6 rounded-xl bg-purple-500/10 p-5">
                  <h3 className="text-base font-bold">Planning a Game?</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Have a project in mind? Let&apos;s talk about your idea.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-4 inline-block text-sm font-semibold text-purple-400 transition hover:text-purple-300"
                  >
                    Contact Our Team →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
