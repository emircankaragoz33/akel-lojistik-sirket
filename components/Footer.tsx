'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#1a1a1a] border-t border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#c41e3a] mb-4">AKEL</h3>
                        <p className="text-gray-400 mb-4 font-medium">
                            Kömür Madencilik
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-tighter">
                            AKEL KÖMÜR MADENCİLİK İTHALAT İHRACAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:text-center">
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">{t('nav_home')} & {t('nav_about')}</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-[#c41e3a] transition-colors duration-300">
                                    {t('nav_home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/hakkimizda" className="text-gray-400 hover:text-[#c41e3a] transition-colors duration-300">
                                    {t('nav_about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/iletisim" className="text-gray-400 hover:text-[#c41e3a] transition-colors duration-300">
                                    {t('nav_contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:text-right">
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">{t('nav_contact')}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <strong className="text-white block mb-1">{t('address')}</strong>
                                Limonluk Mah. 2453 SK.<br />
                                Ofis Çözümleri Kapı No:3 C Yenişehir/MERSİN
                            </li>
                            <li>
                                <strong className="text-white block mb-1">{t('phone')}</strong>
                                0546 280 95 33<br />0533 087 6668
                            </li>
                            <li>
                                <strong className="text-white block mb-1">{t('email')}</strong>
                                akkurdsenol@gmail.com<br />akel.charcoal@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {t('footer_copy')}</p>
                </div>
            </div>
        </footer>
    );
}
