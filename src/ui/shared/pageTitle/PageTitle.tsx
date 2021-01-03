import Head from 'next/head';

import { PageTitleProps } from './PageTitle.types';

export const PageTitle = ({ title }: PageTitleProps) => (
  <Head>
    <title>{title}</title>
  </Head>
);
