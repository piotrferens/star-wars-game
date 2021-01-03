import { NextPage } from 'next';

export type LayoutProps<T = Record<string, unknown>> = {
  pageProps: T;
  page: JSX.Element;
};

export type PageMeta = {
  renderLayout(layoutProps: LayoutProps): JSX.Element;
};

export type PageProperties = {
  meta?: PageMeta;
};

export type CreatePageComponent<P = unknown> = PageProperties & NextPage<P>;
