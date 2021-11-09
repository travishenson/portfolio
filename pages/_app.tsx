import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { LoadingOverlayProvider } from '../context/loading-overlay-context';

// Sass import
import '../sass/app.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Travis Henson | Web Developer</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
    <LoadingOverlayProvider>
      <Component {...pageProps}  />
    </LoadingOverlayProvider>
  </>
);

export default App;
