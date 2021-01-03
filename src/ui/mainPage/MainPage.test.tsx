/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import { render, screen } from '@testing-library/react';

import MainPage from 'src/pages/index';

describe('MainPage', () => {
  it('renders main page', () => {
    const page = MainPage.meta!.renderLayout({
      page: <MainPage />,
      pageProps: {},
    });

    render(page);

    expect(screen.getByText('Choose a resource you want to play')).toBeInTheDocument();
    expect(screen.getByText('People')).toBeInTheDocument();
    expect(screen.getByText('Starships')).toBeInTheDocument();
  });
});
