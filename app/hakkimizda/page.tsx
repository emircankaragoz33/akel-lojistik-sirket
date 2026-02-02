'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Hakkimizda() {
    const { t } = useLanguage();

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/coal-embers.jpg)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">
                        {t('about_hero')}
                    </h1>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 coal-texture">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Company Story */}
                        <div className="glass-effect-strong p-10 rounded-2xl mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
                                {t('story_title').split(' ')[0]} <span className="text-[#c41e3a]">{t('story_title').split(' ').slice(1).join(' ')}</span>
                            </h2>
                            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                                <p>
                                    {t('story_p1')}
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#c41e3a] mr-3 mt-1">●</span>
                                        <span>{t('story_li1')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#c41e3a] mr-3 mt-1">●</span>
                                        <span>{t('story_li2')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#c41e3a] mr-3 mt-1">●</span>
                                        <span>{t('story_li3')}</span>
                                    </li>
                                </ul>
                                <p className="pt-4 border-t border-gray-800 italic">
                                    {t('story_footer')}
                                </p>
                            </div>
                        </div>

                        {/* Mission Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="glass-effect-strong p-8 rounded-2xl">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 fire-gradient rounded-full flex items-center justify-center mr-4">
                                        <span className="text-2xl"></span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white uppercase">{t('mission_title')}</h3>
                                </div>
                                <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                                    <p className="italic mb-2">{t('mission_desc')}</p>
                                </div>
                            </div>

                            <div className="glass-effect-strong p-8 rounded-2xl">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 fire-gradient rounded-full flex items-center justify-center mr-4">
                                        <span className="text-2xl"></span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white uppercase">{t('vision_title')}</h3>
                                </div>
                                <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                                    <p>{t('vision_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
