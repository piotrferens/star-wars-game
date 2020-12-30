import { AppProps } from 'next/app';
import { useEffect } from 'react';

import { AppProviders } from 'src/AppProviders';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
};

export default MyApp;
