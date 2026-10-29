import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import {
  UPSERVE_APP_STORE_URL,
  UPSERVE_PLAY_STORE_URL,
  UPSERVE_PRICING_URL,
  UPSERVE_SIGNUP_URL,
  upserveDocsUrl,
} from '@/lib/upserve';

interface FeaturedFeature {
  title: string;
  description: string;
}

/** UpServe 단독 플랫폼 소개 — 섹션 전체 너비를 쓰는 2단 카드. */
function FeaturedServiceCard() {
  const t = useTranslations('Services');
  const locale = useLocale();
  const features = t.raw('upserve.features') as FeaturedFeature[];

  return (
    <div className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-[#7B87FF]/40 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5563D8]/20 via-transparent to-[#7B87FF]/10" />
      <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[#5563D8]/20 blur-3xl" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#7B87FF]/40 bg-[#7B87FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#7B87FF] mb-6">
            {t('featured')}
          </span>

          <div className="flex items-center mb-6">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <Image
                src="/assets/upserve-logo.png"
                alt={`${t('upserve.title')} logo`}
                width={64}
                height={64}
                className="rounded-xl object-contain"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{t('upserve.title')}</h3>
          </div>

          <p className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">
            {t('upserve.tagline')}
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
            {t('upserve.description')}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={UPSERVE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-[#7B87FF] hover:text-white transition-colors"
            >
              {t('startFree')}
              <svg className="ml-2 h-4 w-4 transform group-hover/cta:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={UPSERVE_PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-semibold text-gray-300 hover:border-[#7B87FF]/60 hover:text-white transition-colors"
            >
              {t('pricing')}
            </a>
            <a
              href={upserveDocsUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-semibold text-gray-300 hover:border-[#7B87FF]/60 hover:text-white transition-colors"
            >
              {t('docs')}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span>{t('availableOn')}</span>
            <a href={UPSERVE_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#7B87FF] transition-colors">
              App Store
            </a>
            <a href={UPSERVE_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#7B87FF] transition-colors">
              Google Play
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-[#7B87FF] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="font-semibold text-white">{feature.title}</h4>
              </div>
              <p className="pl-8 text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const t = useTranslations('Services');

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light whitespace-pre-line">
            {t('description')}
          </p>
        </div>

        <FeaturedServiceCard />
      </div>
    </section>
  );
}
