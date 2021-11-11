import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { LoadingOverlayProvider } from '../context/loading-overlay-context';

// Sass import
import '../sass/app.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Travis Henson | JavaScript Developer</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
    <LoadingOverlayProvider>
      <Component {...pageProps} />
    </LoadingOverlayProvider>
  </>
);

export default App;
