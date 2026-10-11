import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sections = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/sections' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().int(),
      description: z.string(),
      items: z
        .array(
          z
            .object({
              title: z.string().optional(),
              alt: z.string().optional(),
              image: image(),
            })
            .refine((item) => item.title || item.alt, { message: 'Нужен title или alt' }),
        )
        .min(1),
    }),
});

export const collections = { sections };
