import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const anexos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/anexos" }),
  schema: z.object({
    badge: z.string(),
    titulo: z.string(),
    description: z.string(),
    seccionRelacionada: z.string(),
    notaReferencia: z.string(),
  }),
});

export const collections = { anexos };
