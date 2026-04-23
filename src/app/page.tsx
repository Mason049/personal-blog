import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, User, Mail } from "lucide-react";

const features = [
  {
    icon: User,
    title: "关于我",
    description: "了解我的背景、经历和热爱的事物",
    href: "/about",
  },
  {
    icon: Briefcase,
    title: "项目作品",
    description: "探索我创建的项目和开源贡献",
    href: "/projects",
  },
  {
    icon: BookOpen,
    title: "博客文章",
    description: "阅读我对技术、设计和生活的思考",
    href: "/blog",
  },
  {
    icon: Mail,
    title: "联系方式",
    description: "有想法或合作意向？随时联系我",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            你好，我是
            <span className="text-accent"> 你的名字</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            一名热爱创造的开发者 / 设计师 / 写作者。
            <br className="hidden md:block" />
            在这里记录我的思考、分享我的作品。
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              查看作品
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-accent hover:underline underline-offset-4"
            >
              阅读博客
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-6 bg-tertiary/50">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg"
              >
                <feature.icon className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  了解更多 <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Preview */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              最新文章
            </h2>
            <Link
              href="/blog"
              className="text-sm text-accent hover:underline underline-offset-4"
            >
              查看全部
            </Link>
          </div>
          <div className="space-y-0">
            {[
              {
                title: "如何构建高性能的 React 应用",
                date: "2026年4月15日",
                category: "技术",
              },
              {
                title: "设计系统实践：从零到一",
                date: "2026年4月8日",
                category: "设计",
              },
              {
                title: "远程工作三年的感悟",
                date: "2026年3月28日",
                category: "生活",
              },
            ].map((post, index) => (
              <Link
                key={post.title}
                href="/blog"
                className={`group flex items-center justify-between py-5 ${
                  index !== 2 ? "border-b border-border/50" : ""
                }`}
              >
                <div>
                  <h3 className="text-base font-medium group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-secondary mt-1">
                    {post.date} · {post.category}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
