'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-coal-bg">
                {/* Ultra HD / 4K Visual Treatment */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{
                        backgroundImage: 'url(/coal-fire-hero-v2.jpg)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        filter: 'contrast(1.15) brightness(0.85) saturate(1.1)',
                    }}
                />
                {/* Advanced Light/Shadow Layer for HD Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

                {/* Micro-texture Overlay for Sharpness Feeling */}
                <div className="absolute inset-0 coal-pattern opacity-15 mix-blend-overlay" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <div className="inline-block transform hover:scale-105 transition-all duration-500 mb-2">
                            <img
                                src={t('logo_home')}
                                alt="AKEL Logo"
                                className="h-48 sm:h-64 md:h-[450px] lg:h-[550px] w-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                            />
                        </div>

                        <div className="-mt-4 sm:-mt-8 md:-mt-16 lg:-mt-24 lg:hidden px-4">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white text-glow shadow-black drop-shadow-lg">
                                {t('hero_title')}
                            </h2>

                            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
                                {t('hero_desc')}
                            </p>

                            {/* Elegant Corporate Name Section - Mobile Responsive */}
                            <div className="flex items-center justify-center gap-3 md:gap-4 mb-10 opacity-90">
                                <div className="hidden sm:block h-[1px] w-8 md:w-20 bg-gradient-to-r from-transparent to-[#c41e3a]" />
                                <p className="text-[8px] sm:text-[10px] md:text-[11px] text-white font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase leading-relaxed max-w-[280px] sm:max-w-none shadow-black drop-shadow-sm">
                                    AKEL KÖMÜR MADENCİLİK İTHALAT İHRACAT SANAYİ VE TİCARET LTD. ŞTİ.
                                </p>
                                <div className="hidden sm:block h-[1px] w-8 md:w-20 bg-gradient-to-l from-transparent to-[#c41e3a]" />
                            </div>

                            <div>
                                <Link
                                    href="/iletisim"
                                    className="inline-block fire-gradient-hover text-white font-bold px-12 py-4 rounded-full text-lg shadow-2xl transition-all hover:scale-110"
                                >
                                    {t('hero_btn')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                    <svg className="w-6 h-6 text-[#c41e3a]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 coal-texture">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wider">
                        {t('why_title').split(' ')[0]} <span className="text-[#c41e3a]">{t('why_title').split(' ')[1]}</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <div className="text-[#c41e3a] text-5xl mb-4"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{t('feat_perf_title')}</h3>
                            <p className="text-gray-400">
                                {t('feat_perf_desc')}
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <div className="text-[#c41e3a] text-5xl mb-4"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{t('feat_nat_title')}</h3>
                            <p className="text-gray-400">
                                {t('feat_nat_desc')}
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <div className="text-[#c41e3a] text-5xl mb-4"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{t('feat_easy_title')}</h3>
                            <p className="text-gray-400">
                                {t('feat_easy_desc')}
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <div className="text-[#c41e3a] text-5xl mb-4"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{t('feat_div_title')}</h3>
                            <p className="text-gray-400">
                                {t('feat_div_desc')}
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1 border-2 border-[#c41e3a]/30">
                            <div className="text-[#c41e3a] text-5xl mb-4"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{t('feat_source_title')}</h3>
                            <p className="text-gray-400">
                                {t('feat_source_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 fire-embers">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wider">
                        {t('visit_us')}
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="glass-effect p-8 rounded-2xl">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-4">Akel Kömür Madencilik</h3>
                                <div className="space-y-2 text-gray-300">
                                    <p><strong className="text-white">{t('address')}:</strong> Limonluk Mah. 2453 SK. Ofis Çözümleri Kapı No:3 C Yenişehir/Mersin</p>
                                    <p><strong className="text-white">{t('phone')}:</strong> 0546 280 95 33 / 0533 087 6668</p>
                                    <p><strong className="text-white">{t('email')}:</strong> akkurdsenol@gmail.com<br />akel.charcoal@gmail.com</p>
                                </div>
                            </div>

                            {/* Live Google Map */}
                            <div className="w-full h-96 rounded-lg overflow-hidden glass-effect">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.4293!2d34.5824!3d36.7946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ3JzQwLjYiTiAzNMKwMzQnNTYuNiJF!5e0!3m2!1str!2str!4v1700000000000!q=Limonluk%20Mah.%202453%20Sk.%20Ofis%20Çözümleri%20Yenişehir%20Mersin"
                                    title="AKEL Kömür Madencilik Konum"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
