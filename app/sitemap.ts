import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...products.map((product) => ({
      url: `${siteConfig.url}/productos/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: product.featured ? 0.9 : 0.7,
    })),
  ];
}
