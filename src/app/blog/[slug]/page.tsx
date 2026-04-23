import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | 个人博客`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      {/* Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
        <div className="max-w-[680px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-foreground transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            返回文章列表
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-tertiary text-secondary">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-secondary">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-secondary leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-secondary" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 border-t border-border/50">
        <div className="max-w-[680px] mx-auto prose prose-sm md:prose-base max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            // Heading
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-xl md:text-2xl font-semibold mt-10 mb-4 tracking-tight"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-lg font-semibold mt-8 mb-3"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            // Code block
            if (trimmed.startsWith("```")) {
              const lines = trimmed.split("\n");
              const lang = lines[0].replace("```", "");
              const code = lines.slice(1, -1).join("\n");
              return (
                <pre
                  key={index}
                  className="my-6 p-4 rounded-xl bg-tertiary overflow-x-auto text-sm"
                >
                  <code className="font-mono text-sm">{code}</code>
                </pre>
              );
            }

            // List
            if (trimmed.startsWith("- ")) {
              return (
                <ul key={index} className="my-4 space-y-2">
                  {trimmed.split("\n").map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-secondary">
                      <span className="mt-2 w-1 h-1 rounded-full bg-secondary shrink-0" />
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }

            // Numbered list
            if (/^\d+\.\s/.test(trimmed)) {
              return (
                <ol key={index} className="my-4 space-y-2 list-decimal list-inside">
                  {trimmed.split("\n").map((item, i) => (
                    <li key={i} className="text-secondary">
                      {item.replace(/^\d+\.\s/, "")}
                    </li>
                  ))}
                </ol>
              );
            }

            // Inline code
            if (trimmed.includes("`")) {
              const parts = trimmed.split(/(`[^`]+`)/g);
              return (
                <p key={index} className="my-4 leading-relaxed text-secondary">
                  {parts.map((part, i) =>
                    part.startsWith("`") && part.endsWith("`") ? (
                      <code
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-tertiary text-sm font-mono"
                      >
                        {part.slice(1, -1)}
                      </code>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            }

            // Bold
            if (trimmed.includes("**")) {
              const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={index} className="my-4 leading-relaxed text-secondary">
                  {parts.map((part, i) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={i} className="text-foreground">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            }

            // Regular paragraph
            return (
              <p key={index} className="my-4 leading-relaxed text-secondary">
                {trimmed}
              </p>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-secondary mb-4">感谢阅读！</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            有问题或想法？联系我
          </Link>
        </div>
      </section>
    </article>
  );
}
