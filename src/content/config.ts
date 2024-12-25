import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
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
        cssclasses: z.array(z.string()).optional()
    }),
});

const tagCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        cssclasses: z.array(z.string()).optional()
    }),
});

export const collections = {
    posts: postCollection,
    tags: tagCollection
};
