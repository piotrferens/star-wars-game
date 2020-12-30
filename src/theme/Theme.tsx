import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MaterialThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { ThemeProviderProps } from './Theme.types';

const theme = createMuiTheme();

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MaterialThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MaterialThemeProvider>
);
