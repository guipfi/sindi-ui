import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Aplicativo para gestão do condomínio" />
        <title>Sindi - Seu síndico eficiente</title>
      </Head>
      <Component {...pageProps} />
    </>

  );
}

export default MyApp;
