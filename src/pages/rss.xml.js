import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        site: context.site,
        title: "ZxMaze | LifeLog",
        description: "0x15BA88FF LifeLog",
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-us</language>`,
    })
}
