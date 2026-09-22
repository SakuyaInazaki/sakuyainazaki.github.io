# sakimi.log

4chan (Yotsuba B / Tomorrow) 风格的极简个人主页与纯静态数字花园。基于 [Astro](https://astro.build/) 构建，专为 **GitHub Pages** 打造。

## 🌟 核心特性

- **纯正 4chan 视觉**：经典淡蓝版 Yotsuba B 主题，支持一键切换 Tomorrow 暗黑极客夜间模式（自动记忆）。
- **极简板面结构**：
  - `/me/` (主页)：个人看板、关于我、近期状态 (Now)、最新动态。
  - `/blog/` (博客)：文章目录与分类标签，Markdown 语法高亮与 Greentext 引用。
  - `/projects/` (项目)：收录开源作品与代码实验室。
  - `/friends/` (友链)：同学录与独立博客圈，助力 SEO 反向外链。
- **互动讨论接口**：内置 4chan 风格回帖框，预留 Giscus（GitHub Discussions）接入槽位。
- **全自动 CI/CD**：内置 GitHub Actions，推送到 GitHub 即可自动构建并发布到 `xxx.github.io`。
- **完整 SEO**：自动生成 `sitemap.xml`，配备 OpenGraph 社交卡片与标准规范链接。

---

## 🚀 本地开发与写作

### 1. 启动本地预览
```bash
npm run dev
```
浏览器打开 `http://localhost:4321` 即可实时热重载预览。

### 2. 撰写新文章
直接在 `src/content/blog/` 目录下新建 Markdown 文件（例如 `my-new-post.md`）：

```markdown
---
title: "我的第一篇技术随笔"
description: "这是一篇简短的摘要介绍"
pubDate: 2026-09-23
tags: ["tech", "notes"]
pinned: false
---

> 这里是 4chan 风格的绿字引用

这里是正文内容...
```

### 3. 修改个人主页自述
编辑 `src/pages/index.astro` 即可自定义你的自我介绍、技术栈和社交链接。

### 4. 增删同学友链
编辑 `src/pages/friends.astro` 中的 `friends` 数组即可添加或修改同学的友链卡片。

---

## 🚢 部署到 GitHub Pages (xxx.github.io)

### 第一步：在 GitHub 上创建仓库
在你的 GitHub 账号下新建一个仓库，名称必须为：
```text
<你的GitHub用户名>.github.io
```
*(例如：sakimi.github.io)*

### 第二步：推送本地代码
在项目根目录下运行：
```bash
git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
git push -u origin main
```

### 第三步：开启 GitHub Pages (仅需一次)
1. 进入 GitHub 仓库页面 -> 点击顶部 **Settings**。
2. 在左侧菜单点击 **Pages**。
3. 在 **Build and deployment -> Source** 下拉菜单中，选择 **GitHub Actions**。
4. 完成！每次你通过 git 推送更新，GitHub 就会自动运行 `.github/workflows/deploy.yml` 编译并在数十秒内发布上线。
