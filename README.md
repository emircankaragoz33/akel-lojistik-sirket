# AKEL Kömür Madencilik Web Sitesi

Modern, karanlık temalı Next.js web sitesi - Gerçek mangal kömürü görselleriyle.

## ✨ Özellikler

- 🎨 Modern ve premium tasarım
- 🌑 Karanlık tema (dark mode)
- 📱 Responsive tasarım (mobil uyumlu)
- 💎 Glassmorphism efektleri
- 🔥 Gerçek mangal kömürü arka plan görselleri
- ⚡ Next.js 14 ile yüksek performans
- 🎯 TypeScript desteği
- 💅 Tailwind CSS ile styling
- 🎭 Animasyonlu kömür ve ateş efektleri

## 📄 Sayfalar

### 1. Anasayfa → `http://localhost:3000`
- Hero section (Yanan mangal kömürü arka planı)
- "Madenin Gücü, Ateşin Ruhu"
- Özellikler bölümü (Yüksek Performans, Doğallık, Kaliteli Kömür)
- Harita ve iletişim bilgileri

### 2. Hakkımızda → `http://localhost:3000/hakkimizda`
- Közleşmiş kömür arka planı
- Şirket hikayesi
- Misyon ve vizyon
- Değerler
- İstatistikler

### 3. İletişim → `http://localhost:3000/iletisim`
- Mangal kömürü arka planı
- İletişim formu
- Adres, telefon, e-posta bilgileri
- Harita

## 🚀 Kurulum

### PowerShell Execution Policy Sorunu Çözümü

Eğer npm komutları çalışmıyorsa, PowerShell'i **Yönetici olarak** açın ve şu komutu çalıştırın:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Paketleri Yükleme

```bash
npm install
```

### Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🖼️ Arka Plan Görselleri

Projede kullanılan gerçek mangal kömürü görselleri:

- **coal-fire-hero.jpg** - Anasayfa ve İletişim sayfası hero bölümü
  - Yanan mangal kömürü, turuncu-kırmızı alevler
  
- **coal-embers.jpg** - Hakkımızda sayfası hero bölümü
  - Közleşmiş mangal kömürü, siyah tonlar

Görseller `public/` klasöründe bulunmaktadır.

## 🎨 Tasarım Özellikleri

### Renk Paleti
- 🖤 **Arka Plan**: Siyah (#0a0a0a, #1a1a1a)
- 🔴 **Vurgu Rengi**: AKEL Kırmızısı (#c41e3a)
- ⚪ **Metin**: Beyaz ve gri tonları

### CSS Efektleri
- **coal-texture**: Kömür dokusu deseni
- **fire-embers**: Ateş közü efekti (animasyonlu)
- **hero-coal-bg**: Hero bölümü ateş efekti
- **glass-effect**: Cam efekti (blur)
- **glass-effect-strong**: Güçlü cam efekti
- **fire-gradient**: Kırmızı gradyan
- **fire-gradient-hover**: Hover efektli gradyan

## 📁 Proje Yapısı

```
akel-komur/
├── app/
│   ├── hakkimizda/
│   │   └── page.tsx
│   ├── iletisim/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   ├── coal-fire-hero.jpg
│   ├── coal-embers.jpg
│   └── favicon.svg
├── package.json
└── tailwind.config.ts
```

## 🛠️ Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React** - UI library

## 📞 İletişim Bilgileri

- **Adres:** Limonluk Mah. 2469 SK. ÇFB ÇÖZÜM BİZ KAT NO:35 YENİŞEHİR/MERSİN
- **Telefon:** 0530 678 58
- **E-posta:** akelurdanata@gmail.com

## 📦 Production Build

Production için build almak isterseniz:

```bash
npm run build
npm start
```

## 📝 Lisans

© 2024 AKEL Kömür Madencilik. Tüm hakları saklıdır.
