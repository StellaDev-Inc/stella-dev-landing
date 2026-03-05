import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'ko',

  // The locale detection is based on the `Accept-Language` header
  // and can be overridden by setting the `NEXT_LOCALE` cookie
  localeDetection: true,

  // Configure locale prefix
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ko|en)/:path*']
};