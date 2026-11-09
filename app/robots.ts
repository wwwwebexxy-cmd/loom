import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allowing Answer Engines and AI Bots for AEO
      {
        userAgent: [
          "GPTBot", 
          "ChatGPT-User", 
          "Google-Extended", 
          "Anthropic-ai", 
          "PerplexityBot",
          "ClaudeBot"
        ],
        allow: "/",
      }
    ],
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
