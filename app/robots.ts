import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://grahaimpex.com" // Replace with your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/_next/", "/scripts/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
