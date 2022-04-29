import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from 'layout/Main';

import '../styles/globals.scss';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  require('mocks');

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta
          name="description"
          content="Aplicativo para gestão do condomínio"
        />
        <title>Sindi - Seu síndico eficiente</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
