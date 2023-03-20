import localFont from '@next/font/local';
// import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import clsx from 'clsx';
import '@/styles/globals.css';

const spaceGrotesk = localFont({
  src: '../public/fonts/SpaceGrotesk-latin-var.woff2',
  weight: '400 700',
  variable: '--font-spaceGrotesk',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Oscar Jané',
    template: '%s | Oscar Jané',
  },
  description: 'Self-taught frontend developer.',
  openGraph: {
    title: 'Oscar Jané',
    description: 'Self-taught frontend developer.',
    url: 'https://oscar-jane.com',
    siteName: 'Oscar Jané',
    // images: [
    //   {
    //     url: '',
    //     width: ,
    //     height: ,
    //   },
    // ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('text-lg text-neutral-900', spaceGrotesk.variable)}
    >
      <body className="antialiased h-full mx-auto w-1/2 mb-32">
        <Navigation />
        <main className="mt-24">{children}</main>
      </body>
    </html>
  );
}
