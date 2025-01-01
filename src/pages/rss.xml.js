import { getCollection } from "astro:content";
import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    const posts = await getCollection("posts");
    const filteredPosts = posts.filter((item) => !item.data.draft)
    const sortedPostes = filteredPosts.sort((a, b) => {
        return new Date(b.data.date_modified) - new Date(a.data.date_modified)
    })

    return rss({
        site: context.site,
        title: "0x15BA88FF Log",
        description: "0x15BA88FF Logs And Experiences",
        customData: "<language>en-us</language>",
        items: sortedPostes.map(post => ({
            title: post.data.title,
            tags: post.data.tags,
            description: post.data.description,
            date_created: post.data.date_created,
            date_modified: post.data.date_modified,
            link: `/posts/${post.slug}`,
        })),
    })
}
