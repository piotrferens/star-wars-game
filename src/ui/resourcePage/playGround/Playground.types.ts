import { ResourcePageProps } from '../ResourcePage.types';

export type PlaygroundProps = Omit<ResourcePageProps, 'refetch'>;
