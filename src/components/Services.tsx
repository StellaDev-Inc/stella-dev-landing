import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  features: string[];
  logo: string;
  /** 배경이 투명한 로고는 다크 카드 위에서 묻히므로 흰 판을 깔아준다.
   *  자체 배경을 가진 로고(UpServe·슬러)에 깔면 흰 테두리만 삐져나온다. */
  logoBackdrop?: boolean;
}

function ServiceCard({ title, description, url, features, logo, logoBackdrop }: ServiceCardProps) {
  const t = useTranslations('Services');

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#7B87FF]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#5563D8]/20 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5563D8]/10 to-[#7B87FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 mr-4 flex-shrink-0">
            <Image
              src={logo}
              alt={`${title} logo`}
              width={48}
              height={48}
              className={`rounded-lg object-contain ${logoBackdrop ? 'bg-white p-1' : ''}`}
            />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6 whitespace-pre-line">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <svg className="h-5 w-5 text-[#7B87FF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white font-semibold group-hover:text-[#7B87FF] transition-colors"
        >
          {t('visitWebsite')}
          <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

interface FeaturedFeature {
  title: string;
  description: string;
}

/** 대표 서비스(UpServe)는 섹션 전체 너비를 쓰는 2단 카드로 강조한다. */
function FeaturedServiceCard() {
  const t = useTranslations('Services');
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
          <p className="text-gray-400 mb-6 leading-relaxed whitespace-pre-line">
            {t('upserve.description')}
          </p>

          <div className="mb-8">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
              {t('upserve.models')}
            </span>
          </div>

          <a
            href="https://upserve.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-[#7B87FF] hover:text-white transition-colors"
          >
            {t('visitWebsite')}
            <svg className="ml-2 h-4 w-4 transform group-hover/cta:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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

  const services = [
    {
      title: t('slur.title'),
      description: t('slur.description'),
      url: "https://slur.stella-dev.org/",
      logo: "/assets/slur-logo.png",
      features: [
        t('slur.features.0'),
        t('slur.features.1'),
        t('slur.features.2'),
        t('slur.features.3')
      ]
    },
    {
      title: t('abohaeng.title'),
      description: t('abohaeng.description'),
      url: "https://abohaeng.stella-dev.org/",
      logo: "/assets/abohaeng-logo.png",
      logoBackdrop: true,
      features: [
        t('abohaeng.features.0'),
        t('abohaeng.features.1'),
        t('abohaeng.features.2'),
        t('abohaeng.features.3')
      ]
    },
    {
      title: t('day100.title'),
      description: t('day100.description'),
      url: "https://day100.stella-dev.org/",
      logo: "/assets/day100-logo.png",
      logoBackdrop: true,
      features: [
        t('day100.features.0'),
        t('day100.features.1'),
        t('day100.features.2'),
        t('day100.features.3')
      ]
    }
  ];

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

        <div className="mb-12">
          <FeaturedServiceCard />
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">
          {t('otherServices')}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
