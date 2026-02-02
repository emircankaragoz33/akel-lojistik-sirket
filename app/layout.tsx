import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "AKEL Kömür Madencilik",
    description: "Türkiye'nin ilk mangal kömürü ithalatçısı, yüksek performans ve %100 doğalık AKEL Kömür Madencilik",
    icons: {
        icon: '/favicon.svg',
    },
};

import { Providers } from "./providers";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
