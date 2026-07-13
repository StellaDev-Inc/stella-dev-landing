import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Background from '@/components/Background';
import "../globals.css";

// 브랜드 락업의 워드마크 폰트. 400~700을 담은 가변 woff2 하나로 끝난다.
// (OG 이미지는 woff2 를 못 읽어 같은 폴더의 정적 TTF 를 따로 쓴다.)
const sora = localFont({
  variable: "--font-sora",
  src: "../fonts/Sora-Variable.woff2",
  weight: "400 700",
  display: "swap",
});

const ogContent = {
  ko: {
    title: "스텔라 데브",
    description: "스텔라 데브는 혁신적인 솔루션으로 문제를 해결하는 기술 회사입니다.",
  },
  en: {
    title: "Stella Dev",
    description: "Stella Dev is a technology company that solves problems through innovative solutions.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = ogContent[locale as keyof typeof ogContent] || ogContent.en;

  return {
    metadataBase: new URL('https://stella-dev.org'),
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      // 이미지는 opengraph-image.tsx 가 자동으로 붙인다.
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Make sure to populate the request locale for static rendering
  setRequestLocale(locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* 본문 폰트는 CSS @import 가 아니라 여기서 링크한다. @import 는 앱 CSS 를
            받은 뒤에야 요청이 나가는 직렬 체인이라 첫 렌더가 그만큼 밀린다. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Asta+Sans:wght@400;700&family=42dot+Sans:wght@400;700&display=swap"
        />
      </head>
      <body className={`${sora.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Background />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
