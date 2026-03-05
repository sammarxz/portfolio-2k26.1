import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    readingTime: z.number(),
    category: z.string().optional(),
    lang: z.enum(['en', 'pt']).default('en'),
  }),
});

export const collections = { blog };
