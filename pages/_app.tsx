import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';

// Global css stylesheets
import '../styles/reset.css';
import '../styles/app.css';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;