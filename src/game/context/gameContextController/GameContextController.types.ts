import { ReactNode } from 'react';

import { FightResult } from 'src/api/resources/resources.types';
import { Player } from 'src/ui/resourcePage/ResourcePage.types';

export type Resource = 'people' | 'starships';

type ResourcePlayerState = {
  players: { left: Player; right: Player };
  leftSideWins: number;
  rightSideWins: number;
  fightResult: FightResult;
};

export type GameState = {
  people: ResourcePlayerState | null;
  starships: ResourcePlayerState | null;
};

export type InitialResourceData = Pick<ResourcePlayerState, 'players' | 'fightResult'> & {
  resource: Resource;
};

export type GameContextControllerProps = {
  children: ReactNode;
  initialData: InitialResourceData | null;
};
