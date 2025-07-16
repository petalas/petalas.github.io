#!/usr/bin/env node

import { writeFileSync } from "fs";
import { join } from "path";

const baseUrl = "https://petalas.dev";
const currentDate = new Date().toISOString().split("T")[0];

// Define the pages/sections with their metadata
const pages = [
  {
    url: "/",
    lastmod: currentDate,
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    url: "/#about",
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    url: "/#experience",
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    url: "/#projects",
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    url: "/#contact",
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    url: "/Nick_Petalas_CV.pdf",
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.8",
  },
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

// Write sitemap to public directory
const sitemapPath = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(sitemapPath, sitemap);

console.log("✅ Sitemap generated successfully at:", sitemapPath);
console.log(`📊 Generated ${pages.length} URLs`);
