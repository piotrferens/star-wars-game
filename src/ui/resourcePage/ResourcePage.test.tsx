/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { personFactory } from 'src/api/resources/resource.mocks';
import * as resources from 'src/api/resources/resources';
import PeoplePage from 'src/pages/people';

jest.mock('next/link', () => ({ children }: { children: ReactNode }) => children);

describe('ResourcePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render resource page', () => {
    const pageProps = {
      count: 2,
      gameContextInitialData: {
        players: { left: { name: 'Adam', value: '21' }, right: { name: 'Rob', value: '123' } },
        fightResult: 'right' as const,
        resource: 'people' as const,
      },
    };
    const page = PeoplePage.meta!.renderLayout({
      page: <PeoplePage {...pageProps} />,
      pageProps,
    });

    render(page);

    expect(screen.getByText('Rob')).toBeInTheDocument();
    expect(screen.getByText('21')).toBeInTheDocument();
    expect(screen.getByText('Right side won!')).toBeInTheDocument();
    expect(screen.getByText('Play again')).toBeInTheDocument();
  });

  it('render result of new battle', async () => {
    const pageProps = {
      count: 2,
      gameContextInitialData: {
        players: { left: { name: 'Luke', value: '21' }, right: { name: 'Bob', value: '123' } },
        fightResult: 'right' as const,
        resource: 'people' as const,
      },
    };
    const page = PeoplePage.meta!.renderLayout({
      page: <PeoplePage {...pageProps} />,
      pageProps,
    });

    render(page);

    jest
      .spyOn(resources, 'fetchResource')
      .mockResolvedValueOnce(personFactory({ name: 'Joe', mass: '13' }))
      .mockResolvedValueOnce(personFactory({ name: 'Vader', mass: '12' }));

    const playAgain = screen.getByText('Play again');

    fireEvent.click(playAgain);

    expect(await screen.findByText('Joe')).toBeInTheDocument();
    expect(await screen.findByText('12')).toBeInTheDocument();
    expect(await screen.findByText('Left side won!')).toBeInTheDocument();
    expect(await screen.findByText('Play again')).toBeInTheDocument();
  });

  it('render error message if there is no players', () => {
    const pageProps = { count: null, gameContextInitialData: null };
    const page = PeoplePage.meta!.renderLayout({
      page: <PeoplePage {...pageProps} />,
      pageProps,
    });

    render(page);

    expect(screen.getByText('Cannot find players')).toBeInTheDocument();
  });

  it('render notification message if api is not responding', async () => {
    const pageProps = { count: 32, gameContextInitialData: null };
    const page = PeoplePage.meta!.renderLayout({
      page: (
        <>
          <PeoplePage {...pageProps} />
          <ToastContainer />
        </>
      ),
      pageProps,
    });

    render(page);

    expect(screen.getByText('Cannot find players')).toBeInTheDocument();

    const resourceListSpy = jest.spyOn(resources, 'fetchResourceList');

    jest
      .spyOn(resources, 'fetchResource')
      .mockRejectedValueOnce('There was an error')
      .mockResolvedValueOnce(personFactory({ name: 'Vader', mass: '12' }));

    const playAgain = screen.getByText('Try again');

    fireEvent.click(playAgain);

    expect(await screen.findByText('Something went wrong, looks like swapi.dev is not responding')).toBeInTheDocument();
    expect(resourceListSpy).not.toHaveBeenCalled();
  });

  it('render notification message if count is empty', async () => {
    const pageProps = { count: null, gameContextInitialData: null };
    const page = PeoplePage.meta!.renderLayout({
      page: (
        <>
          <PeoplePage {...pageProps} />
          <ToastContainer />
        </>
      ),
      pageProps,
    });

    render(page);

    jest.spyOn(resources, 'fetchResourceList').mockRejectedValueOnce('There was an error');

    const playersSpy = jest
      .spyOn(resources, 'fetchResource')
      .mockResolvedValueOnce(personFactory({ name: 'Jankos', mass: '122' }))
      .mockResolvedValueOnce(personFactory({ name: 'Vader', mass: '12' }));

    const playAgain = screen.getByText('Try again');

    fireEvent.click(playAgain);

    expect(await screen.findByText('Something went wrong, looks like swapi.dev is not responding')).toBeInTheDocument();
    expect(playersSpy).not.toHaveBeenCalled();
  });

  it('calls fetchResourceList when count is empty', async () => {
    const pageProps = { count: null, gameContextInitialData: null };
    const page = PeoplePage.meta!.renderLayout({
      page: <PeoplePage {...pageProps} />,
      pageProps,
    });

    render(page);

    const resourceListSpy = jest
      .spyOn(resources, 'fetchResourceList')
      .mockResolvedValueOnce({ count: 2, next: null, previous: null, results: [] });

    jest
      .spyOn(resources, 'fetchResource')
      .mockResolvedValueOnce(personFactory({ name: 'Jankos', mass: '122' }))
      .mockResolvedValueOnce(personFactory({ name: 'Vader', mass: '12' }));

    const playAgain = screen.getByText('Try again');

    fireEvent.click(playAgain);

    await waitFor(() => screen.getByText('Jankos'));

    expect(resourceListSpy).toHaveBeenCalled();
  });

  it('renders loading layout when new players are called', async () => {
    const pageProps = {
      count: 2,
      gameContextInitialData: {
        players: { left: { name: 'Luke', value: '21' }, right: { name: 'Bob', value: '123' } },
        fightResult: 'right' as const,
        resource: 'people' as const,
      },
    };

    const page = PeoplePage.meta!.renderLayout({
      page: <PeoplePage {...pageProps} />,
      pageProps,
    });

    render(page);

    expect(screen.getByText('Right side won!')).toBeInTheDocument();
    expect(screen.getByText('Luke')).toBeInTheDocument();

    jest
      .spyOn(resources, 'fetchResource')
      .mockResolvedValueOnce(personFactory({ name: 'Jankos', mass: '122' }))
      .mockResolvedValueOnce(personFactory({ name: 'Vader', mass: '12' }));

    const playAgain = screen.getByText('Play again');

    fireEvent.click(playAgain);

    expect(screen.getByTestId('loadingIndicator')).toBeInTheDocument();
    await waitFor(() => screen.getByText('Jankos'));
  });
});
