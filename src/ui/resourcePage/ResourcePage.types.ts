import { FightResult, Resource, ResourceURL } from 'src/api/resources/resources.types';

export type Player = {
  name: string;
  value: string;
};

export type StatusState = 'idle' | 'loading' | 'success' | 'error';

export type ResourcePageProps = {
  leftSidePlayer: Player;
  rightSidePlayer: Player;
  refetch: () => void;
  battleResult: FightResult;
  leftSidePlayerScore: number;
  rightSidePlayerScore: number;
  isLoading?: boolean;
};

export type ResourcePageContainerProps<T extends ResourceURL> = {
  count: number;
  resource: T;
  attribute: keyof Resource<T>;
};
