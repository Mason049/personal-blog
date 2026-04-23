import { ExternalLink, Code, Star } from "lucide-react";

const projects = [
  {
    title: "个人博客系统",
    description:
      "一个基于 Next.js 构建的现代化个人博客系统，支持 Markdown 渲染、代码高亮、暗色模式和 SEO 优化。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    stars: 128,
  },
  {
    title: "任务管理应用",
    description:
      "简洁优雅的任务管理工具，支持拖拽排序、标签分类、截止日期提醒和数据同步功能。",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    stars: 86,
  },
  {
    title: "设计系统组件库",
    description:
      "一套为团队内部使用开发的设计系统，包含 50+ 可复用组件，支持主题定制和无障碍访问。",
    tags: ["Vue", "Storybook", "TypeScript"],
    github: "https://github.com",
    demo: null,
    stars: 245,
  },
  {
    title: "API 文档生成器",
    description:
      "自动从代码注释生成美观的 API 文档，支持 OpenAPI 规范导出和交互式测试。",
    tags: ["Go", "Swagger", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    stars: 67,
  },
  {
    title: "数据可视化仪表盘",
    description:
      "实时数据监控仪表盘，支持多种图表类型、自定义布局和数据源接入。",
    tags: ["D3.js", "React", "WebSocket"],
    github: "https://github.com",
    demo: "https://example.com",
    stars: 54,
  },
  {
    title: "轻量级状态管理库",
    description:
      "一个只有 2KB 的 React 状态管理方案，采用 Proxy 实现，API 简洁直观。",
    tags: ["TypeScript", "React"],
    github: "https://github.com",
    demo: null,
    stars: 312,
  },
];

export default function Projects() {
  return (
    <div>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            项目作品
          </h1>
          <p className="text-lg text-secondary max-w-xl mx-auto leading-relaxed">
            这里展示了我近年来参与和主导的一些项目，涵盖 Web 应用、开源工具和设计系统。
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-2xl bg-tertiary/50 border border-border/50 hover:border-border transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-secondary">
                    <Star className="w-3.5 h-3.5" />
                    {project.stars}
                  </div>
                </div>

                <p className="text-sm text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-background border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-foreground transition-colors duration-200"
                  >
                    <Code className="w-4 h-4" />
                    源码
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline underline-offset-4"
                    >
                      <ExternalLink className="w-4 h-4" />
                      在线演示
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
