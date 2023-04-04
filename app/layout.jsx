import localFont from '@next/font/local';
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  verification: {
    google: 'ma0oGs2JcLT3Ag0q5OJRfZsAbx1u7d8az4pHGbiwTUY',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('text-lg text-neutral-900', spaceGrotesk.variable)}
    >
      <body className="antialiased md:w-3/4 lg:w-1/2 mx-4 mt-8 mb-32 md:mx-auto">
        <Navigation />
        <main className="mt-6 md:mt-10 lg:mt-24">{children}</main>
      </body>
    </html>
  );
}
