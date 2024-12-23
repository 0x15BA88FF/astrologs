import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        date_created: z.string(),
        date_modified: z.string(),
        banner_image: z.string().optional(),
        banner_alt: z.string().optional(),
        cssclasses: z.array(z.string()).optional()
    }),
});

export const collections = {
    blog: blogCollection
};
