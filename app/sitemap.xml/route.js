import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://rsdigitalsolutions.in";

  const pages = [
    "",

    // Main Pages
    "/about",
    "/contact",

    // Service Pages – Digital Marketing
    "/services/digital-marketing",
    "/services/seo",
    "/services/smo",

    // Service Pages – Web Development
    "/services/responsive",
    "/services/ecommerce",
    "/services/consultation",

    // Service Pages – Graphic Design
    "/services/logo-design",
    "/services/brochure-design",
    "/services/poster-design",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
