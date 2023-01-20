import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import { Galindo } from '@next/font/google';
import Head from 'next/head';
import Footer from '@/components/Footer';
const galindoFont = Galindo({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={galindoFont.className}>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Simple todo list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
