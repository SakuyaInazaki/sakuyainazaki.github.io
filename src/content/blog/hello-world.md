---
title: "Hello World: 从零重构 4chan 风格的数字自留地"
description: "记录本站的诞生、设计考量与个人主页的重新出发。"
pubDate: 2026-09-23
tags: ["blog", "4chan", "astro", "web"]
pinned: true
---

> "In a world of bloated web apps, return to pure text and hypermedia."

欢迎来到这里。

这个博客的主页设计灵感来源于著名的文本论坛 **4chan (特别是经典的 Yotsuba B 蓝色主题)**。在如今到处都是臃肿的 JavaScript、繁琐的弹窗、沉重的排版以及算法推荐的互联网环境中，我一直希望能有一个**极简、轻快、纯粹**的个人空间。

### 为什么选择这个风格？

1. **信息密度高**：经典论坛时代排版没有冗余的边距和花哨动效，文字清晰易读。
2. **极速加载**：全站静态构建，秒开无延迟，没有任何多余的跟踪脚本或第三方臃肿库。
3. **怀旧与极客感**：深蓝链接、绿字引用（Greentext）、红色管理员 Capcode、No. 编号，充满了互联网早期的复古探索气息。

### 技术架构

- **核心框架**：[Astro](https://astro.build/) - 现代化静态生成器，零运行时 JS 开销。
- **主题配色**：Yotsuba B (白天浅蓝) + Tomorrow (夜间深黑)，支持一键无缝切换并本地记忆。
- **部署方式**：GitHub Pages 免费托管，搭配 GitHub Actions 自动化持续交付。
- **SEO 与发现性**：全自动生成 `sitemap.xml`，通过同学友链互换建立最初的网络纽带。

```ts
// 保持简单，保持纯粹
interface SakimiLog {
  style: "4chan-yotsuba-b" | "tomorrow-dark";
  zeroBloat: true;
  freedom: "100%";
}
```

后续我会在这里持续记录编程学习、折腾笔记与生活随笔，感谢你的到访！
