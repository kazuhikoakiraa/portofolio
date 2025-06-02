import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Captain\'s Portfolio - Digital Pirate Developer',
  description: 'Portfolio website of a skilled full-stack developer with pirate theme. Explore projects, skills, and adventures in the digital seas.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Captain Developer' }],
  openGraph: {
    title: 'Captain\'s Portfolio - Digital Pirate Developer',
    description: 'Ahoy! Welcome to the digital adventures of a skilled developer',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Captain\'s Portfolio',
    description: 'Digital Pirate Developer Portfolio',
  },
  // Hapus viewport dari sini
  robots: 'index, follow',
};

// Tambahkan export viewport terpisah
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}