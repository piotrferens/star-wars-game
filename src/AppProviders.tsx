import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from './theme/Theme';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider>
    {children}
    <ToastContainer />
  </ThemeProvider>
);
