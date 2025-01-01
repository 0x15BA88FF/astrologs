import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const cssClassesEnum = []

const postCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        date_created: z.string(),
        date_modified: z.string(),
        draft: z.boolean().optional(),
        banner: z.object({
            image: z.string(),
            alt: z.string()
        }).optional(),
        cssclasses: z.array(z.enum(cssClassesEnum)).optional()
    }),
});

const tagCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tags" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        cssclasses: z.array(z.enum(cssClassesEnum)).optional()
    }),
});

export const collections = {
    posts: postCollection,
    tags: tagCollection
};
