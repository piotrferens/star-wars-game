import { AppProps } from 'next/app';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

import { AppProviders } from 'src/AppProviders';
import { defaultPageMeta } from 'src/helpers/createPage/createPage';
import { CreatePageComponent } from 'src/helpers/createPage/createPage.types';

export type OwnAppProps = AppProps & { Component: CreatePageComponent };

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: OwnAppProps) => {
  const pageMeta = Component.meta || defaultPageMeta;

  const page = pageMeta.renderLayout({
    page: <Component {...pageProps} />,
    pageProps: pageProps,
  });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <AppProviders>{page}</AppProviders>
    </>
  );
};

export default MyApp;
