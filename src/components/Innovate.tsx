import React from 'react';
import { useTranslations } from 'next-intl';

export default function Innovate() {
  const t = useTranslations('Innovate');

  return (
    <section id="innovate" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-400 mb-8 font-light">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {(t.raw('features') as string[]).map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#7B87FF]/40 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-[#5563D8]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7B87FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                  {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                  {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                  {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />}
                </svg>
              </div>
              <p className="text-gray-300 font-medium">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}