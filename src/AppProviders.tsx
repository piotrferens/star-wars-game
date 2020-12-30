import { ReactNode } from 'react';

import { ThemeProvider } from './theme/Theme';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => <ThemeProvider>{children}</ThemeProvider>;
