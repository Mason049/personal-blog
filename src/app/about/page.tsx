import { MapPin, Calendar, Heart, Sprout, BookOpen, Microscope } from "lucide-react";

const stats = [
  { label: "在读年限", value: "3+" },
  { label: "发表论文", value: "5+" },
  { label: "参与项目", value: "8+" },
  { label: "田间调研", value: "20+" },
];

const interests = [
  { icon: Sprout, label: "植物病理" },
  { icon: Microscope, label: "分子生物学" },
  { icon: BookOpen, label: "文献阅读" },
  { icon: Heart, label: "自然观察" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            关于我
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            热爱植物，热爱科研。我相信每一次田间观察都是与自然的对话。
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-12 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-tertiary border border-border/50 flex items-center justify-center shrink-0">
              <span className="text-4xl font-semibold text-secondary">陈</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2">陈先楚</h2>
              <p className="text-secondary mb-4">南京农业大学 · 植物病理学专业博士生</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-secondary">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> 中国，南京
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> 2023 年开始读博
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 px-6">
        <div className="max-w-[680px] mx-auto space-y-6 text-secondary leading-relaxed">
          <p>
            我是陈先楚，目前就读于南京农业大学植物病理学专业，攻读博士学位。我的研究方向主要聚焦于植物病原真菌的致病机制及分子检测技术，致力于通过现代分子生物学手段为农业生产中的病害防控提供科学依据。
          </p>
          <p>
            在科研之余，我喜欢通过写作来整理思路、分享经验。这个博客是我记录学术历程、科研心得和生活感悟的地方。我相信知识分享的力量，也希望我的文章能帮助到正在植物病理学领域探索的同行和同学。
          </p>
          <p>
            如果你对我的研究感兴趣，或者想聊聊植物病理学、科研方法、读博生活，随时欢迎与我联系。
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-tertiary/50">
        <div className="max-w-[680px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
            研究方向
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-tertiary/50"
              >
                <item.icon className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
