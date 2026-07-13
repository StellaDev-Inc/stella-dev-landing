import type { Metadata } from "next";
import { Nanum_Gothic_Coding } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Background from '@/components/Background';
import "../globals.css";

const nanumGothicCoding = Nanum_Gothic_Coding({
  variable: "--font-nanum-gothic-coding",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// 브랜드 락업의 워드마크 폰트. OG 이미지도 같은 파일을 쓴다.
const sora = localFont({
  variable: "--font-sora",
  src: [
    { path: "../fonts/Sora-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Sora-Bold.ttf", weight: "700", style: "normal" },
  ],
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
      <body className={`${nanumGothicCoding.variable} ${sora.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Background />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
