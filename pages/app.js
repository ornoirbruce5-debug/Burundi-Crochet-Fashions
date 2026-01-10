import '../styles/globals.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('ki');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('bcf_lang') : null;
    if (saved) setLang(saved);
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').catch(() => {});
    }
  }, []);

  const toggleLang = (l) => {
    setLang(l);
    localStorage.setItem('bcf_lang', l);
  };

  return (
    <>
      <Head>
        <meta name="theme-color" content="#2E7D32" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Burundi Crochet Fashions — Imideri ya crochet mu Burundi" />
        <meta name="keywords" content="crochet, Burundi, imideri, Rasta, Héritage, Festival" />
      </Head>
      <Layout lang={lang} onToggleLang={toggleLang}>
        <Component {...pageProps} lang={lang} />
      </Layout>
    </>
  );
}

export default MyApp;
