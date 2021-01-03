import { CreatePageComponent, PageMeta } from './createPage.types';

export const defaultPageMeta: PageMeta = {
  renderLayout: (layoutProps) => layoutProps.page,
};

export const createPage = <P>(page: (props: P) => JSX.Element): CreatePageComponent<P> => page;
