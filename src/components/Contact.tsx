'use client';

import { useLocale, useTranslations } from 'next-intl';
import { StellaSymbol } from './Logo';
import { UPSERVE_SIGNUP_URL, upserveDocsUrl } from '@/lib/upserve';

export default function Contact() {
  const t = useTranslations('Contact');
  const locale = useLocale();

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto whitespace-pre-line">{t('description')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('info.title')}</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5563D8]/15 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg className="w-6 h-6 text-[#7B87FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('info.email')}</h4>
                  <p className="text-gray-400">support@stella-dev.org</p>
                </div>
              </div>


              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5563D8]/15 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg className="w-6 h-6 text-[#7B87FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('info.responseTime')}</h4>
                  <p className="text-gray-400">{t('info.responseTimeValue')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5563D8]/15 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg className="w-6 h-6 text-[#7B87FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('info.docs')}</h4>
                  <a
                    href={upserveDocsUrl(locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#7B87FF] transition-colors"
                  >
                    {t('info.docsValue')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center text-center h-full min-h-[400px]">
            <div className="w-20 h-20 rounded-full bg-[#5563D8]/15 flex items-center justify-center mb-6">
              <StellaSymbol className="w-11 h-11" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('startCard.title')}</h3>
            <p className="text-gray-400 mb-8 max-w-sm whitespace-pre-line">
              {t('startCard.description')}
            </p>
            <a
              href={UPSERVE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-[#5563D8] text-white font-medium overflow-hidden transition-all hover:bg-[#7B87FF] hover:scale-105 shadow-lg shadow-[#5563D8]/30"
            >
              <span className="relative z-10 flex items-center">
                {t('startCard.button')}
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            <a
              href="mailto:support@stella-dev.org"
              className="mt-6 text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t('startCard.emailLink')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}