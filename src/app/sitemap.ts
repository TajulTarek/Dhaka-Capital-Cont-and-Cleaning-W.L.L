import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";

// আপনার নতুন লাইভ ডোমেইন
const BASE_URL = "https://www.dhakacapitalcontracting-wll.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // স্ট্যাটিক পেজগুলোর লিস্ট
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // আপনার সার্ভিস ডাটা থেকে ডাইনামিক ইউআরএল জেনারেট করা
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`, // সাধারণত সার্ভিস পেজগুলো /services/slug ফরম্যাটে থাকে
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
