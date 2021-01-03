import { Player, ResourcePageProps } from 'src/ui/resourcePage/ResourcePage.types';

export type PlayerCardProps = Player & {
  result: ResourcePageProps['battleResult'];
  side: 'left' | 'right';
  isLoading?: boolean;
};

export type UseStylesProps = Pick<PlayerCardProps, 'result' | 'side' | 'isLoading'>;
