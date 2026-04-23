import { MapPin, Calendar, Heart, Code, Coffee, Globe } from "lucide-react";

const stats = [
  { label: "年开发经验", value: "5+" },
  { label: "完成项目", value: "30+" },
  { label: "技术文章", value: "50+" },
  { label: "开源贡献", value: "100+" },
];

const interests = [
  { icon: Code, label: "编程开发" },
  { icon: Globe, label: "开源社区" },
  { icon: Coffee, label: "咖啡与阅读" },
  { icon: Heart, label: "摄影旅行" },
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
            热爱生活，热爱创造。我相信好的代码和好的设计一样，都需要用心打磨。
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-12 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-tertiary border border-border/50 flex items-center justify-center shrink-0">
              <span className="text-4xl font-semibold text-secondary">你</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2">你的名字</h2>
              <p className="text-secondary mb-4">全栈开发者 / 产品设计师</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-secondary">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> 中国，上海
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> 2019 年开始编程
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
            我是一名热衷于技术与设计交叉领域的开发者。从写下第一行代码的那一刻起，我就被创造的乐趣深深吸引。过去几年里，我有幸参与了从初创公司到大型企业的各类项目，积累了丰富的全栈开发经验。
          </p>
          <p>
            工作之余，我喜欢通过写作来整理思路、分享经验。这个博客就是我记录学习历程、技术心得和生活感悟的地方。我相信知识分享的力量，也希望我的文章能帮助到正在学习路上的你。
          </p>
          <p>
            如果你对我的工作感兴趣，或者想聊聊技术、设计、咖啡，随时欢迎与我联系。
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
            兴趣爱好
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
