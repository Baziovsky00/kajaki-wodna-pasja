import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Wodna Pasja – Kajaki w Parchatce | Spływy Wieprz & Wisła',
  description: 'Wodna Pasja – kajaki w Parchatce k. Kazimierza Dolnego. Spływy kajakowe po Wieprzu i Wiśle, wypożyczalnia sprzętu, transport, przewodnik – zarezerwuj przygodę!',
  keywords: [
    'kajaki Wieprz',
    'kajaki Wisła',
    'spływ Wieprz',
    'spływ Wisła',
    'wypożyczalnia kajaków Parchatka',
    'kajaki Kazimierz Dolny',
    'kajaki Puławy'
  ],
  openGraph: {
    title: 'Wodna Pasja – Kajaki w Parchatce | Spływy Wieprz & Wisła',
    description: 'Odkryj spływy kajakowe na Wieprzu i Wiśle z Wodną Pasją w Parchatce k. Kazimierza Dolnego. Kajaki, transport, przewodnik – zarezerwuj przygodę!',
    // url: 'https://www.twojastrona.pl',
    siteName: 'Wodna Pasja – Kajaki',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Spływ kajakowy po Wieprzu i Wiśle – Wodna Pasja'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wodna Pasja – Kajaki w Parchatce | Spływy Wieprz & Wisła',
    description: 'Kajaki na Wieprzu i Wiśle – wypożyczalnia w Parchatce. Transport, przewodnik, rezerwacje. Zarezerwuj już dziś!',
    images: ['/images/logo.jpg']
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
