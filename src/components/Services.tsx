import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  features: string[];
  logo: string;
}

function ServiceCard({ title, description, url, features, logo }: ServiceCardProps) {
  const t = useTranslations('Services');

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 mr-4 flex-shrink-0">
            <Image
              src={logo}
              alt={`${title} logo`}
              width={48}
              height={48}
              className="rounded-lg object-contain bg-white p-1"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6 whitespace-pre-line">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          className="inline-flex items-center text-white font-semibold group-hover:text-blue-400 transition-colors"
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

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      title: t('upserve.title'),
      description: t('upserve.description'),
      url: "https://upserve.xyz/",
      logo: "/assets/upserve-logo.svg",
      features: [
        t('upserve.features.0'),
        t('upserve.features.1'),
        t('upserve.features.2'),
        t('upserve.features.3')
      ]
    },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}