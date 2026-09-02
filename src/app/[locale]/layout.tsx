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

const SITE_URL = 'https://stella-dev.org';

const ogContent = {
  ko: {
    title: "스텔라데브",
    // 검색 스니펫에 그대로 실릴 문장. 브랜드 원칙(Think, Build, Innovate) →
    // 팀 소개 → 대표 서비스(UpServe) 순으로, 잘려도 앞부분만으로 회사가 설명되게 둔다.
    description: "스텔라데브는 Think, Build, Innovate를 원칙으로 움직입니다. 문제를 능동적으로 발굴하고 해결하며, 온톨로지 기반으로 업무를 자동화하는 에이전트 플랫폼 UpServe를 만들고 운영합니다.",
  },
  en: {
    title: "StellaDev",
    description: "StellaDev operates on Think, Build, Innovate. We proactively find and solve problems, and we build and run UpServe — an ontology-driven agent platform that automates everyday work.",
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
    metadataBase: new URL(SITE_URL),
    title: content.title,
    description: content.description,
    // 두 로케일이 같은 회사를 설명하는 중복 페이지로 잡히지 않게 짝을 명시한다.
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ko: '/ko',
        en: '/en',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      siteName: content.title,
      url: `${SITE_URL}/${locale}`,
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

  const content = ogContent[locale as keyof typeof ogContent] || ogContent.en;

  // 구글이 본문 문단 대신 회사 정보를 스니펫/지식패널로 쓰게 하는 근거 데이터.
  // 대표 서비스(UpServe)까지 Organization 에 매달아 함께 노출되도록 둔다.
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: content.title,
    alternateName: locale === 'ko' ? ['StellaDev', '주식회사 스텔라데브'] : ['스텔라데브'],
    legalName: locale === 'ko' ? '주식회사 스텔라데브' : 'StellaDev Inc.',
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/assets/brand/StellaDev-Woven-lockup.svg`,
    description: content.description,
    slogan: 'Think, Build, Innovate',
    email: 'support@stella-dev.org',
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      streetAddress: locale === 'ko' ? '부산진구 서전로 8, 8층' : '8F, 8 Seojeon-ro, Busanjin-gu',
      addressLocality: locale === 'ko' ? '부산광역시' : 'Busan',
      addressCountry: 'KR',
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        name: 'UpServe',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        url: 'https://upserve.app',
        description:
          locale === 'ko'
            ? '구축부터 운영까지 맡아 드리는 매니지드 AI 직원입니다. 상품 DB 관리, 예약 응대, 주문 접수, 서류 검수 같은 반복 업무를 AI가 대신 처리합니다.'
            : 'A managed AI employee, set up and operated for you. It handles repetitive work such as product database upkeep, booking replies, order intake, and document review.',
      },
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: `${SITE_URL}/${locale}`,
    name: content.title,
    inLanguage: locale === 'ko' ? 'ko-KR' : 'en-US',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <Background />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
