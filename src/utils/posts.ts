import { getCollection } from 'astro:content';

/**
 * 全站全局发帖编号索引计算
 * 规则：
 * 1. 编号全局唯一、按发布时间正序自增（时间越早编号越小，新帖编号更大）
 * 2. 网站主页置顶 OP 帖（关于我）保留为 No.000001
 * 3. 其余所有内容（博客、Memes 等）按 pubDate 升序排序，从 2 开始依次分配编号
 */
export async function getGlobalPostIndex(): Promise<Map<string, number>> {
  const [blogs, memes] = await Promise.all([
    getCollection('blog'),
    getCollection('memes'),
  ]);

  const allItems = [
    ...blogs.map((b) => ({ key: `blog:${b.id}`, pubDate: b.data.pubDate, id: b.id })),
    ...memes.map((m) => ({ key: `memes:${m.id}`, pubDate: m.data.pubDate, id: m.id })),
  ];

  // 按时间升序排序，时间相同时按 id 排序保证确定性
  allItems.sort((a, b) => a.pubDate.getTime() - b.pubDate.getTime() || a.id.localeCompare(b.id));

  const postIndex = new Map<string, number>();
  allItems.forEach((item, index) => {
    // No.000001 预留给首页 OP，内容从 2 开始递增
    postIndex.set(item.key, index + 2);
  });

  return postIndex;
}
