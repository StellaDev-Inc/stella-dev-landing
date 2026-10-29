import { useLocale, useTranslations } from 'next-intl';
import { StellaLockup } from './Logo';
import {
  UPSERVE_APP_STORE_URL,
  UPSERVE_PLAY_STORE_URL,
  UPSERVE_PRICING_URL,
  UPSERVE_SIGNUP_URL,
  UPSERVE_URL,
  upserveDocsUrl,
} from '@/lib/upserve';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  const links = [
    { href: UPSERVE_URL, label: t('upserveFooter') },
    { href: UPSERVE_SIGNUP_URL, label: t('upserveStart') },
    { href: UPSERVE_PRICING_URL, label: t('upservePricing') },
    { href: upserveDocsUrl(locale), label: t('upserveDocs') },
    { href: UPSERVE_APP_STORE_URL, label: 'App Store' },
    { href: UPSERVE_PLAY_STORE_URL, label: 'Google Play' },
  ];

  return (
    <footer id="footer" className="bg-black text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6">
              <StellaLockup
                symbolClassName="h-10 w-10"
                wordmarkClassName="text-2xl text-white"
              />
              <span className="sr-only">{t('companyName')}</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed font-light">
              {t('mission')}
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold text-white">{t('email')}</span> support@stella-dev.org
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">{t('services')}</h4>
            <div className="space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-12 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-gray-500 text-sm font-light">
            <span>{t('legalName')}</span>
            <span className="hidden sm:inline text-gray-800">|</span>
            <span>{t('ceo')}</span>
            <span className="hidden sm:inline text-gray-800">|</span>
            <span>{t('businessRegistration')}</span>
            <span className="hidden sm:inline text-gray-800">|</span>
            <span>{t('address')}</span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2026 StellaDev, {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}