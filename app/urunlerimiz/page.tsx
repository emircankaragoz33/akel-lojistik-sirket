'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Urunlerimiz() {
    const { t } = useLanguage();

    const charcoalFeatures = [
        t('product_feat_1'),
        t('product_feat_2'),
        t('product_feat_3'),
        t('product_feat_4')
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/mangal-komuru-2.jpg)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                />
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">
                        {t('products_hero')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        {t('products_desc')}
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 coal-texture">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
                            {/* Product Image Gallery */}
                            <div className="space-y-6">
                                <div className="glass-effect p-2 rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                                    <img
                                        src="/mangal-komuru-1.jpg"
                                        alt="AKEL Mangal Kömürü"
                                        className="w-full h-[400px] object-cover rounded-xl"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="glass-effect p-2 rounded-xl overflow-hidden">
                                        <img
                                            src="/mangal-komuru-2.jpg"
                                            alt="Mangal Kömürü Köz"
                                            className="w-full h-32 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="glass-effect p-2 rounded-xl overflow-hidden bg-gradient-to-br from-[#c41e3a]/20 to-transparent flex items-center justify-center text-white font-bold text-center">
                                        %100<br />Premium Quality
                                    </div>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    {t('product_charcoal_title')}
                                </h2>
                                <p className="text-xl text-gray-300 leading-relaxed mb-10">
                                    {t('product_charcoal_desc')}
                                </p>

                                <div className="glass-effect-strong p-8 rounded-2xl border-l-4 border-[#c41e3a]">
                                    <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">
                                        {t('product_features_title')}
                                    </h3>
                                    <ul className="space-y-4">
                                        {charcoalFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-200">
                                                <span className="w-8 h-8 rounded-full fire-gradient flex items-center justify-center mr-4 text-xs"></span>
                                                <span className="text-lg">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-12">
                                    <a
                                        href="/iletisim"
                                        className="inline-block fire-gradient-hover text-white font-bold px-12 py-5 rounded-full text-lg shadow-2xl uppercase tracking-widest transition-all hover:scale-105"
                                    >
                                        {t('nav_contact')}
                                    </a>
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
