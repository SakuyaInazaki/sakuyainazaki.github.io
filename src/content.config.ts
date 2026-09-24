import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().default('TITLE'),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    pinned: z.boolean().default(false),
  }),
});

const memes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/memes' }),
  schema: z.object({
    title: z.string().default(''),
    pubDate: z.coerce.date().default(() => new Date()),
    image: z.string().optional(),
  }),
});

export const collections = { blog, memes };
