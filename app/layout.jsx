import '@/styles/globals.css';
import localFont from '@next/font/local';
import clsx from 'clsx';

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
      className={clsx(
        'text-4xl font-bold text-neutral-900',
        spaceGrotesk.variable
      )}
    >
      <body className="antialiased mx-auto w-3/4 mb-40 mt-32">
        <main>{children}</main>
      </body>
    </html>
  );
}
