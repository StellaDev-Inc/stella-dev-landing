import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const SITE_URL = 'https://stella-dev.org';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'ko' ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}/${l}`]),
      ),
    },
  }));
}
