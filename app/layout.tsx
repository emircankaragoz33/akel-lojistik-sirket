import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "AKEL Kömür Madencilik | Türkiye'nin Öncü Mangal Kömürü İthalatçısı",
    description: "AKEL Kömür Madencilik, Türkiye'nin ilk mangal kömürü ithalatçısıdır. %100 doğal, yüksek performanslı ve kaliteli mangal kömürü çeşitlerimizle hizmetinizdeyiz. Mersin merkezli güvenilir kömür tedarikçisi.",
    keywords: "akel kömür, akel kömür madencilik, mangal kömürü, ithal mangal kömürü, kaliteli kömür, mersin kömür firmaları, doğal mangal kömürü, charcoal supplier turkey",
    icons: {
        icon: '/favicon.svg',
    },
    openGraph: {
        title: "AKEL Kömür Madencilik | En Kaliteli Mangal Kömürü",
        description: "Türkiye'nin ilk mangal kömürü ithalatçısından %100 doğal ürünler.",
        url: 'https://akelkomurmadencilik.com.tr',
        siteName: 'AKEL Kömür Madencilik',
        locale: 'tr_TR',
        type: 'website',
    },
};

import { Providers } from "./providers";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className={outfit.variable}>
            <body className="font-outfit antialiased">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
