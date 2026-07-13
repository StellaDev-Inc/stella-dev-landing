import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { locales } from './i18n';

const intlMiddleware = createMiddleware({
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

export default function proxy(request: NextRequest) {
  // 메타데이터 라우트는 로케일 처리에서 제외한다. localePrefix가 'as-needed'라
  // defaultLocale인 /ko/opengraph-image 는 /opengraph-image 로 리다이렉트되는데,
  // 그 경로에는 라우트가 없어 크롤러가 404를 받는다.
  if (request.nextUrl.pathname.endsWith('/opengraph-image')) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ko|en)/:path*']
};
