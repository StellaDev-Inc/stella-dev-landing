import React from 'react';
import { useTranslations } from 'next-intl';

export default function Build() {
  const t = useTranslations('Build');

  return (
    <section id="build" className="py-24 bg-black relative">
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
                  {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                  {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                  {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
                  {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
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