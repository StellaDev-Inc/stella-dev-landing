import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://stella-dev.org/sitemap.xml',
    host: 'https://stella-dev.org',
  };
}
