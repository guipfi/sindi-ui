import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {

  if (process.env.NODE_ENV === "development") {
    require("mocks");
  }

  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <meta name="description" content="Aplicativo para gestão do condomínio" />
        <title>Sindi - Seu síndico eficiente</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>

  );
}

export default MyApp;
