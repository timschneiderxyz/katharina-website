/*  ========================================================================
    # Layout
    ========================================================================  */

import '@/styles/main.scss';
import type { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://katharina.xyz'),
  title: 'Katharina',
  description: '',
  icons: {
    icon: [
      {
        url: '/favicons/favicon.ico',
        sizes: '32x32'
      },
      {
        url: '/favicons/favicon.svg',
        type: 'image/svg+xml'
      }
    ],
    apple: {
      url: '/favicons/apple-touch-icon.png',
      type: 'image/png'
    }
  },
  manifest: '/favicons/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    title: 'Katharina',
    description: '',
    url: 'https://katharina.xyz'
  }
};

// Viewport
export const viewport: Viewport = {
  themeColor: '#ffffff'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='de'>
      <body
        className={clsx(
          'bg-emerald-950 font-sans text-white overflow-x-hidden selection:bg-white selection:text-black'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
