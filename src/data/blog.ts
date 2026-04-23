export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "high-performance-react",
    title: "如何构建高性能的 React 应用",
    excerpt:
      "从虚拟列表到状态管理优化，全面探讨提升 React 应用性能的实用技巧。",
    content: `
React 应用性能优化是前端开发中永恒的话题。本文将从实际项目经验出发，分享一些行之有效的高性能 React 开发技巧。

## 1. 组件级优化

### 使用 React.memo 避免不必要的重渲染

对于纯展示组件，合理使用 \`React.memo\` 可以避免父组件更新时导致的子组件不必要的重渲染。

### useMemo 和 useCallback 的正确使用

这两个 Hook 并非万能药，过度使用反而会增加内存开销。关键在于找到真正需要缓存的计算和回调函数。

## 2. 状态管理优化

### 状态粒度拆分

将全局状态拆分为更小的独立片段，减少不相关组件的订阅范围。

### 使用选择器模式

通过选择器只订阅组件实际需要的状态片段，避免无关状态变化触发重渲染。

## 3. 渲染性能

### 虚拟列表

当需要渲染大量数据时，使用虚拟列表只渲染可视区域内的元素，这是性能提升最显著的技巧之一。

### 代码分割与懒加载

通过 \`React.lazy\` 和动态导入，将非首屏组件延迟加载，减少初始包体积。

## 4. 网络优化

- 合理使用缓存策略
- 实现请求去重和防抖
- 预加载关键资源

## 总结

性能优化是一个持续的过程，关键在于测量先行。使用 React DevTools Profiler 找到真正的瓶颈，再有针对性地优化，才能事半功倍。
    `,
    date: "2026年4月15日",
    category: "技术",
    readTime: "8 分钟",
    tags: ["React", "性能优化", "前端"],
  },
  {
    slug: "design-system-practice",
    title: "设计系统实践：从零到一",
    excerpt:
      "分享构建团队级设计系统的完整流程，包括设计原则、组件规范和工程化实践。",
    content: `
设计系统不仅是组件库，更是一套连接设计与开发的共同语言。本文分享我构建团队设计系统的实战经验。

## 为什么需要设计系统

随着产品规模扩大，设计不一致、重复造轮子、沟通成本高等问题日益突出。一套好的设计系统能够：

- 保证产品视觉一致性
- 提升设计与开发效率
- 降低新人上手成本
- 沉淀团队最佳实践

## 设计原则的制定

### 1. 原子化设计

采用原子设计方法论，从颜色、字体、间距等基础 Token 开始，逐步构建组件。

### 2. 可组合性

组件应该像乐高积木一样可以自由组合，而不是大而全的"瑞士军刀"。

### 3. 无障碍优先

从设计之初就考虑无障碍需求，确保所有用户都能正常使用。

## 工程化实践

###  monorepo 架构

使用 pnpm workspace + Changesets 管理多包发布。

###  文档驱动开发

使用 Storybook 作为组件开发和文档平台，确保组件文档与代码同步更新。

###  自动化测试

为每个组件编写视觉回归测试和交互测试，防止意外破坏。

## 持续迭代

设计系统不是一次性项目，需要：

- 建立组件贡献流程
- 定期收集使用反馈
- 跟踪设计债务
- 版本化管理和升级指南

## 结语

构建设计系统是一个投资回报率很高的工程。虽然前期投入较大，但长期来看能显著提升团队的交付效率和产品质量。
    `,
    date: "2026年4月8日",
    category: "设计",
    readTime: "10 分钟",
    tags: ["设计系统", "UI/UX", "工程化"],
  },
  {
    slug: "remote-work-reflections",
    title: "远程工作三年的感悟",
    excerpt:
      "从适应到享受，远程工作三年后的真实体会，以及保持高效和健康的实践经验。",
    content: `
三年前的春天，我开始了自己的远程工作之旅。从最初的新鲜到后来的挑战，再到如今的得心应手，这段经历让我对工作和生活有了全新的认识。

## 最初的适应期

刚开始远程工作时，最大的挑战不是技术问题，而是自律。没有了办公室的约束，很容易陷入「再刷五分钟手机」的循环中。

### 建立仪式感

我很快发现，建立固定的工作仪式非常重要：

- 设定固定的工作时间段
-  dedicated 的工作空间
- 工作前简单的准备仪式（泡茶、整理桌面）

## 效率的提升

### 深度工作的机会

远程工作最大的好处是可以拥有大块的、不被打断的时间。这对于需要深度思考的工作来说是无价的。

### 异步沟通

学会异步沟通后，我发现很多「紧急」的事情其实并不紧急。给同事和自己留出思考和回应的时间，反而提升了整体效率。

## 生活与工作的平衡

### 边界的重要性

最大的陷阱是工作时间和生活时间的模糊。我的解决方案是：

- 物理边界：工作结束后离开工作区域
- 时间边界：设定明确的上下班时间
- 数字边界：下班后关闭工作通知

### 社交的主动维护

远程工作减少了自然发生的社交机会，需要更主动地去维护人际关系。我每周会安排固定的社交时间，和朋友见面或视频聊天。

## 给新手的建议

1. **从建立规律开始** — 不要一开始就追求灵活性
2. **投资工作环境** — 一把好椅子、合适的显示器值得花钱
3. **主动沟通** — 远程不代表沉默，及时同步进展很重要
4. **照顾身心健康** — 定时休息、保持运动

## 写在最后

远程工作不是万能解药，它有自己的挑战。但对我来说，能够自主安排时间、免去通勤的消耗、在工作和生活之间找到更好的平衡，这些收益远大于付出的代价。

如果你正在考虑远程工作，希望我的经验能给你一些参考。
    `,
    date: "2026年3月28日",
    category: "生活",
    readTime: "6 分钟",
    tags: ["远程工作", "效率", "生活"],
  },
  {
    slug: "typescript-tips",
    title: "TypeScript 高级技巧：类型体操实战",
    excerpt:
      "深入 TypeScript 类型系统，掌握几个实用的类型体操技巧，提升代码的类型安全。",
    content: `
TypeScript 的类型系统非常强大，合理运用类型层面的操作可以大幅提升代码的健壮性和开发体验。本文分享几个我在项目中常用的类型技巧。

## 条件类型

条件类型是 TypeScript 最强大的特性之一，允许我们根据类型关系进行分支判断。

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
\`\`\`

## 模板字面量类型

结合模板字面量类型，可以实现对字符串格式的精确约束。

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
// EventName<'click'> => 'onClick'
\`\`\`

## 实用工具类型

### 深度只读

\`\`\`typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};
\`\`\`

### 递归 Partial

\`\`\`typescript
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
};
\`\`\`

## 类型推断技巧

善用 \`infer\` 关键字可以从复杂类型中提取子类型。

\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
\`\`\`

## 结语

类型体操虽然有趣，但要记住：**类型的目的是服务代码，而不是炫技**。在可读性和类型精度之间找到平衡，才是最佳实践。
    `,
    date: "2026年3月15日",
    category: "技术",
    readTime: "7 分钟",
    tags: ["TypeScript", "前端"],
  },
  {
    slug: "css-modern-layout",
    title: "现代 CSS 布局完全指南",
    excerpt:
      "从 Flexbox 到 Grid，再到 Container Queries，系统掌握现代 CSS 布局技术。",
    content: `
CSS 布局技术在过去几年经历了巨大的进化。本文系统梳理现代 CSS 布局的核心概念和实践技巧。

## Flexbox：一维布局之王

Flexbox 仍然是处理一维布局（单行或单列）的最佳选择。

### 常见模式

- 水平垂直居中
- 等高列
- 底部对齐的卡片

## Grid：二维布局利器

CSS Grid 让复杂的二维布局变得简单直观。

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

## Container Queries

容器查询是响应式设计的新范式，基于容器而非视口进行响应。

\`\`\`css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    display: flex;
  }
}
\`\`\`

## 子网格

Subgrid 让嵌套网格能够继承父网格的轨道定义，实现更一致的布局。

## 实用建议

1. 先用 Grid 做整体布局框架
2. 用 Flexbox 处理组件内部的一维排列
3. 用 Container Queries 处理组件级别的响应式
4. 善用 \`gap\` 替代 margin 处理间距
    `,
    date: "2026年2月28日",
    category: "技术",
    readTime: "9 分钟",
    tags: ["CSS", "前端"],
  },
  {
    slug: "creative-coding",
    title: "创意编程：用代码创造艺术",
    excerpt:
      "探索编程与艺术的交叉领域，分享使用代码进行视觉创作的方法和工具。",
    content: `
编程不只是构建工具，也可以是一种创作媒介。近年来，创意编程（Creative Coding）越来越受到关注。

## 什么是创意编程

创意编程是以表达为主要目的编程实践。与传统软件开发追求功能和效率不同，创意编程更关注美学、情感和体验。

## 常用工具和框架

### p5.js

Processing 的 JavaScript 版本，非常适合初学者入门。

\`\`\`javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50);
}
\`\`\`

### Three.js

用于 Web 3D 图形，可以创建沉浸式的三维视觉体验。

### Shader

使用 GLSL 编写 GPU 程序，实现高性能的图形效果。

## 创作思路

1. **从数学公式开始** — 三角函数、噪声函数、分形
2. **引入随机性** — 可控的随机可以产生有机的美感
3. **互动性** — 让观众的参与影响作品
4. **迭代实验** — 快速尝试、观察、调整

## 学习资源

- The Nature of Code
- Generative Design
- OpenProcessing 社区

创意编程让我重新认识了代码的可能性。如果你也对视觉艺术感兴趣，不妨尝试一下。
    `,
    date: "2026年2月10日",
    category: "设计",
    readTime: "5 分钟",
    tags: ["创意编程", "艺术", "p5.js"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
