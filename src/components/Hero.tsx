import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Abstract Planet Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-[100px] rounded-full border border-white/20 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute inset-[200px] rounded-full border border-white/30 animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-gradient drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {t('title')}
          </span>
        </h1>
        <p className="text-2xl md:text-4xl mb-8 text-gray-300 font-light tracking-wide drop-shadow-lg">
          {t('subtitle')}
        </p>
        <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-4xl mx-auto font-light leading-relaxed whitespace-pre-line break-keep">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#services"
            className="group relative px-8 py-4 rounded-full bg-white/10 text-white font-medium overflow-hidden transition-all hover:bg-white/20 hover:scale-105 backdrop-blur-sm border border-white/20"
          >
            <span className="relative z-10">{t('exploreServices')}</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 text-gray-300 hover:border-white/50 hover:text-white transition-all hover:scale-105 glass"
          >
            {t('contactUs')}
          </a>
        </div>
      </div>
    </section>
  );
}