import localFont from '@next/font/local';
import '../styles/globals.css';

const spaceGrotesk = localFont({
  src: '../public/fonts/SpaceGrotesk-latin-var.woff2',
  weight: '400 700',
  variable: '--font-spaceGrotesk',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${spaceGrotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
