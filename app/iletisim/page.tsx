'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Iletisim() {
    const { t } = useLanguage();

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/coal-fire-hero.jpg)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                />
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-2xl sm:text-6xl md:text-8xl font-bold mb-6 text-white uppercase tracking-[0.05em] sm:tracking-[0.15em] drop-shadow-2xl">
                        {t('contact_hero')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        {t('contact_desc')}
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 coal-texture">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                                    {t('contact_info').split(' ')[0]} <span className="text-[#c41e3a]">{t('contact_info').split(' ').slice(1).join(' ')}</span>
                                </h2>

                                {/* Address */}
                                <div className="glass-effect-strong p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 fire-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{t('address')}</h3>
                                            <p className="text-gray-300">
                                                Limonluk Mah. 2453 SK. Ofis Çözümleri<br />
                                                Kapı No:3 C Yenişehir/Mersin
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="glass-effect-strong p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 fire-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{t('phone')}</h3>
                                            <p className="text-gray-300">0546 280 95 33<br />0533 087 6668</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="glass-effect-strong p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 fire-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{t('email')}</h3>
                                            <p className="text-gray-300">akkurdsenol@gmail.com<br />akel.charcoal@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Live Map */}
                            <div className="flex flex-col justify-end">
                                <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-700 shadow-2xl glass-effect">
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
                </div>
            </section>

            <Footer />
        </>
    );
}
