import '@/styles/globals.css';
import localFont from '@next/font/local';
import clsx from 'clsx';
import Navigation from '@/components/navigation';

const spaceGrotesk = localFont({
  src: '../public/fonts/SpaceGrotesk-latin-var.woff2',
  weight: '400 700',
  variable: '--font-spaceGrotesk',
  display: 'swap',
});

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
