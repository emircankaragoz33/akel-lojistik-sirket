'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section (Left) */}
                    <div className="flex-1 lg:flex-none">
                        <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
                            <img
                                src={t('logo_nav')}
                                alt="AKEL Logo"
                                className="h-8 md:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            />
                        </Link>
                    </div>

                    {/* Centered Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center space-x-12">
                            <Link
                                href="/"
                                className="text-white hover:text-[#c41e3a] transition-all duration-300 font-medium tracking-widest uppercase text-sm border-b border-transparent hover:border-[#c41e3a]"
                            >
                                {t('nav_home')}
                            </Link>
                            <Link
                                href="/hakkimizda"
                                className="text-white hover:text-[#c41e3a] transition-all duration-300 font-medium tracking-widest uppercase text-sm border-b border-transparent hover:border-[#c41e3a]"
                            >
                                {t('nav_about')}
                            </Link>
                            <Link
                                href="/urunlerimiz"
                                className="text-white hover:text-[#c41e3a] transition-all duration-300 font-medium tracking-widest uppercase text-sm border-b border-transparent hover:border-[#c41e3a]"
                            >
                                {t('nav_products')}
                            </Link>
                            <Link
                                href="/iletisim"
                                className="text-white hover:text-[#c41e3a] transition-all duration-300 font-medium tracking-widest uppercase text-sm border-b border-transparent hover:border-[#c41e3a]"
                            >
                                {t('nav_contact')}
                            </Link>
                        </div>
                    </div>

                    {/* Language Switcher Section (Right) */}
                    <div className="flex-1 lg:flex-none flex justify-end items-center space-x-4">
                        <div className="flex items-center glass-effect-strong rounded-full px-2 py-1">
                            <button
                                onClick={() => setLanguage('TR')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${language === 'TR' ? 'bg-[#c41e3a] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                TR
                            </button>
                            <button
                                onClick={() => setLanguage('EN')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${language === 'EN' ? 'bg-[#c41e3a] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                EN
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-white hover:text-[#c41e3a] transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-8 h-8" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-6 pb-6 space-y-6 animate-fade-in">
                        <Link
                            href="/"
                            className="block text-white hover:text-[#c41e3a] transition-all duration-300 font-bold tracking-widest uppercase text-center py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('nav_home')}
                        </Link>
                        <Link
                            href="/hakkimizda"
                            className="block text-white hover:text-[#c41e3a] transition-all duration-300 font-bold tracking-widest uppercase text-center py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('nav_about')}
                        </Link>
                        <Link
                            href="/urunlerimiz"
                            className="block text-white hover:text-[#c41e3a] transition-all duration-300 font-bold tracking-widest uppercase text-center py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('nav_products')}
                        </Link>
                        <Link
                            href="/iletisim"
                            className="block text-white hover:text-[#c41e3a] transition-all duration-300 font-bold tracking-widest uppercase text-center py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('nav_contact')}
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
