import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        site: context.site,
        title: "0x15BA88FF Log",
        description: "0x15BA88FF Logs And Experiences",
        customData: "<language>en-us</language>",
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md"))
    })
}
