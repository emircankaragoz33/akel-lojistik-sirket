'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'TR' | 'EN';

interface Translations {
    [key: string]: {
        TR: string;
        EN: string;
    };
}

export const translations: Translations = {
    // Header
    nav_home: { TR: 'Anasayfa', EN: 'Home' },
    nav_about: { TR: 'Hakkımızda', EN: 'About Us' },
    nav_products: { TR: 'Ürünlerimiz', EN: 'Our Products' },
    nav_contact: { TR: 'İletişim', EN: 'Contact' },

    // Home Page
    hero_title: { TR: 'Madenin Gücü, Ateşin Ruhu', EN: 'Power of Minning, Soul of Fire' },
    hero_desc: { TR: "Türkiye'nin ilk mangal kömürü ithalatçısı, yüksek performans ve %100 doğalık AKEL Kömür Madencilik'te!", EN: "Turkey's first charcoal importer, high performance and 100% naturalness at AKEL Coal Mining!" },
    hero_btn: { TR: 'Daha fazla bilgi', EN: 'Learn More' },
    why_title: { TR: 'Neden AKEL?', EN: 'Why AKEL?' },
    feat_perf_title: { TR: 'Yüksek Performans', EN: 'High Performance' },
    feat_perf_desc: { TR: 'Uzun süreli yanma ve dengeli ısı dağılımı sayesinde yemekleriniz tam kıvamında pişer.', EN: 'Thanks to long burning time and balanced heat distribution, your meals are cooked perfectly.' },
    feat_nat_title: { TR: 'Doğallık', EN: 'Naturalness' },
    feat_nat_desc: { TR: 'Kimyasal katkı maddesi içermez, tamamen doğal ağaçlardan üretilmiştir.', EN: 'Contains no chemical additives, produced from entirely natural trees.' },
    feat_easy_title: { TR: 'Kolay Kullanım', EN: 'Easy Use' },
    feat_easy_desc: { TR: 'Hızlı tutuşma özelliği ile pratik ve zahmetsiz mangal keyfi sağlar.', EN: 'Provides practical and effortless BBQ pleasure with its fast ignition feature.' },
    feat_div_title: { TR: 'Çeşitlilik', EN: 'Diversity' },
    feat_div_desc: { TR: 'Farklı ambalaj seçenekleri ve kullanım alanlarına uygun ürün çeşitleri mevcuttur.', EN: 'Different packaging options and product varieties suitable for different areas of use are available.' },
    feat_source_title: { TR: 'Güvenilir Kaynak', EN: 'Reliable Source' },
    feat_source_desc: { TR: 'Dünyanın farklı ülkelerinden ithal edilen kömürlerimiz, kalite standartlarına uygun olarak seçilir.', EN: 'Our coals imported from different countries of the world are selected in accordance with quality standards.' },
    visit_us: { TR: 'Bizi Ziyaret Edin', EN: 'Visit Us' },

    // About Page
    about_hero: { TR: 'Hakkımızda', EN: 'About Us' },
    story_title: { TR: 'Geçmişten Güç Alarak Geleceğe Yön Veriyoruz', EN: 'Powering from the Past, Shaping the Future' },
    story_p1: { TR: "AKEL Kömür Madencilik olarak köklerimiz, 2008 yılı ve öncesine dayanan derin bir lojistik ve ithalat-ihracat tecrübesine dayanmaktadır. Henüz 2008 yılına kadar edindiğimiz bu güçlü bilgi birikimi ve operasyonel yetkinlik ile Türkiye'de mangal kömürü ithalatını ilk kez gerçekleştiren ekip olarak sektörde devrim niteliğinde bir rol üstlendik.", EN: "As AKEL Coal Mining, our roots are based on a deep logistics and import-export experience dating back to 2008 and earlier. With this strong knowledge and operational competence we gained by 2008, we took on a revolutionary role in the sector as the team that carried out the first charcoal import in Turkey." },
    story_li1: { TR: 'Bu deneyim, bize yenilikçi bakış açısı ve pazar dinamiklerini anlama konusunda güç bir avantaj sağladı.', EN: 'This experience gave us a strong advantage in understanding innovative perspective and market dynamics.' },
    story_li2: { TR: 'İthalat süreçlerinde edindiğimiz bilgi birikimi, bugün sunduğumuz hizmetlerde güvenilirlik ve sürdürülebilirlik temelini oluşturuyor.', EN: 'The knowledge we gained in import processes forms the basis of reliability and sustainability in the services we offer today.' },
    story_li3: { TR: 'İlk olmanın getirdiği sorumlulukla, her zaman kaliteyi, müşteri memnuniyetini ve sektöre değer katmayı öncelik haline getirdik.', EN: 'With the responsibility of being the first, we have always prioritized quality, customer satisfaction, and adding value to the sector.' },
    story_footer: { TR: 'Bugün, geçmişteki bu öncü adımlarımızı yeni sektörümüzde daha da ileriye taşıyarak müşterilerimize farklı ve güçlü çözümler sunmaya devam ediyoruz.', EN: 'Today, we continue to offer different and powerful solutions to our customers by taking these pioneering steps of the past even further in our new sector.' },
    mission_title: { TR: 'Misyonumuz', EN: 'Our Mission' },
    mission_desc: { TR: 'Bizim için misyon, yalnızca bugünü değil geleceği de şekillendiren bir yol haritasıdır.', EN: 'For us, mission is a roadmap that shapes not only today but also the future.' },
    vision_title: { TR: 'Vizyonumuz', EN: 'Our Vision' },
    vision_desc: { TR: 'Bizim vizyonumuz; geçmişteki öncü deneyimlerimizi geleceğin ihtiyaçlarıyla birleştirerek, sektörde yenilikçi, güvenilir ve sürdürülebilir çözümlerle lider bir marka olmaktır.', EN: 'Our vision is to be a leading brand in the sector with innovative, reliable, and sustainable solutions by combining our past pioneering experiences with the needs of the future.' },

    // Contact Page
    contact_hero: { TR: 'İletişim', EN: 'Contact' },
    contact_desc: { TR: 'Bizimle iletişime geçin, sorularınızı yanıtlayalım', EN: 'Get in touch with us, let us answer your questions' },
    contact_info: { TR: 'İletişim Bilgileri', EN: 'Contact Information' },
    address: { TR: 'Adres', EN: 'Address' },
    phone: { TR: 'Telefon', EN: 'Phone' },
    email: { TR: 'E-posta', EN: 'Email' },
    contact_form_title: { TR: 'Bize Ulaşın', EN: 'Contact Us' },
    form_name: { TR: 'Ad Soyad', EN: 'Full Name' },
    form_email: { TR: 'E-posta', EN: 'Email' },
    form_phone: { TR: 'Telefon', EN: 'Phone' },
    form_message: { TR: 'Mesajınız', EN: 'Your Message' },
    form_submit: { TR: 'Gönder', EN: 'Send' },
    form_success: { TR: 'Mesajınız başarıyla gönderildi!', EN: 'Your message has been sent successfully!' },

    // Products Page
    products_hero: { TR: 'Ürünlerimiz', EN: 'Our Products' },
    products_desc: { TR: 'En kaliteli ve doğal mangal kömürü çeşitlerimizle hizmetinizdeyiz.', EN: 'We are at your service with our highest quality and natural charcoal varieties.' },
    product_charcoal_title: { TR: 'Premium Mangal Kömürü', EN: 'Premium BBQ Charcoal' },
    product_charcoal_desc: { TR: '%100 doğal ağaçlardan üretilen, yüksek kalori değerine sahip ve uzun süre yanma kapasitesi olan birinci sınıf mangal kömürümüz.', EN: 'Our first-class charcoal produced from 100% natural trees, with high calorie value and long burning capacity.' },
    product_features_title: { TR: 'Ürün Özellikleri', EN: 'Product Features' },
    product_feat_1: { TR: 'Yüksek Isı Verimliliği', EN: 'High Heat Efficiency' },
    product_feat_2: { TR: 'Sıfır Kimyasal Katkı', EN: 'Zero Chemical Additives' },
    product_feat_3: { TR: 'Minimal Kül Oranı', EN: 'Minimal Ash Content' },
    product_feat_4: { TR: 'Dumansız ve Kokusuz Yanma', EN: 'Smokeless and Odorless Burning' },

    // Footer
    footer_copy: { TR: 'AKEL Kömür Madencilik. Tüm hakları saklıdır.', EN: 'AKEL Coal Mining. All rights reserved.' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('TR');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang) setLanguageState(savedLang);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string) => {
        if (!translations[key]) return key;
        return translations[key][language];
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
