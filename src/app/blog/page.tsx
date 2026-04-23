import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <div>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            博客文章
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            分享技术见解、学习笔记和生活思考。
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-[680px] mx-auto space-y-0">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group block py-6 ${
                index !== blogPosts.length - 1
                  ? "border-b border-border/50"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-tertiary text-secondary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-secondary">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-sm text-secondary leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-secondary">{post.date}</span>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
