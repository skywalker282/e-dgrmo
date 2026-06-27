import { type MetadataRoute } from 'next'

export async function GET() {
  // Define your site URLs
  const urls = [
    { loc: 'https://dgrmo.cd/', lastmod: '2026-06-27', changefreq: 'daily', priority: 1.0 },
    { loc: 'https://dgrmo.cd/about', lastmod: '2026-06-27', changefreq: 'monthly', priority: 0.8 },
    { loc: 'https://dgrmo.cd/services', lastmod: '2026-06-27', changefreq: 'monthly', priority: 0.9 },
    { loc: 'https://dgrmo.cd/news', lastmod: '2026-06-27', changefreq: 'weekly', priority: 0.7 },
    { loc: 'https://dgrmo.cd/contact', lastmod: '2026-06-27', changefreq: 'yearly', priority: 0.6 },
    { loc: 'https://dgrmo.cd/payment', lastmod: '2026-06-27', changefreq: 'monthly', priority: 0.9 },
    { loc: 'https://dgrmo.cd/verification', lastmod: '2026-06-27', changefreq: 'monthly', priority: 0.8 },
    { loc: 'https://dgrmo.cd/complaint', lastmod: '2026-06-27', changefreq: 'monthly', priority: 0.7 },
    { loc: 'https://dgrmo.cd/login', lastmod: '2026-06-27', changefreq: 'yearly', priority: 0.5 },
    { loc: 'https://dgrmo.cd/register', lastmod: '2026-06-27', changefreq: 'yearly', priority: 0.5 },
    { loc: 'https://dgrmo.cd/privacy', lastmod: '2026-06-27', changefreq: 'yearly', priority: 0.3 },
    { loc: 'https://dgrmo.cd/terms', lastmod: '2026-06-27', changefreq: 'yearly', priority: 0.3 },
  ]

  // Generate the XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}