import { Metadata } from "next";
import TrasyClient from "../components/TrasyClient";

export const metadata: Metadata = {
  title: 'Trasy kajakowe Wieprz & Wisła – Wodna Pasja',
  description: 'Poznaj nasze trasy kajakowe: malowniczy spływ Wieprzem oraz majestatyczny nurt Wisły — Janowiec, Kazimierz Dolny, Puławy. Szczegóły i rezerwacja.',
  keywords: [
    'trasy kajakowe Wieprz',
    'trasy kajakowe Wisła',
    'spływ kajakiem Wieprz',
    'spływ kajakiem Wisła',
    'kajaki Wieprz trasa',
    'kajaki Wisła podstrona trasy'
  ],
  openGraph: {
    title: 'Trasy kajakowe Wieprz & Wisła – Wodna Pasja',
    description: 'Szczegółowy opis tras kajakowych po Wieprzu (Łęczna, Zawieprzyce, Lubartów) i Wiśle (Janowiec–Puławy, Kazimierz Dolny). Zarezerwuj spływ.',
    // url: 'https://www.twojastrona.pl/trasy',
    siteName: 'Wodna Pasja – Kajaki',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mapa tras kajakowych Wieprz i Wisła'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trasy kajakowe Wieprz & Wisła – Wodna Pasja',
    description: 'Spływy kajakowe Wieprzem i Wisłą: trasy rodzinne i dłuższe. Z Janowca przez Kazimierz Dolny do Puław — sprawdź szczegóły.',
    images: ['/images/logo.jpg']
  }
};


export default function TrasyPage() {
  return (
    <TrasyClient />
  )
}
