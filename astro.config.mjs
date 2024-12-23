// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkCapitalize from "remark-capitalize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import react from "@astrojs/react";

export default defineConfig({
    site: "https://0x15ba88ff.github.io",
    base: "maze",
    markdown: {
        shikiConfig: {
            wrap: false,
            themes: {
                light: "catppuccin-latte",
                dark: "catppuccin-mocha"
            },
        },
        remarkPlugins: [
            remarkMath,
            remarkCapitalize,
        ],
        rehypePlugins: [
            rehypeSlug,
            rehypeKatex,
            rehypeAccessibleEmojis,
            [
                rehypeAutolinkHeadings,
                { behavior: "wrap", properties: { className: "heading-anchor" }}
            ],
        ]
    },
    integrations: [tailwind(), react()]
});