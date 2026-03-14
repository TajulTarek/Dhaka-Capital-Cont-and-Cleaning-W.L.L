import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // এটি সিকিউরিটির জন্য এপিআই রুটগুলোকে হাইড রাখে
    },
    sitemap: "https://www.dhakacapitalcontracting-wll.app/sitemap.xml",
  };
}
