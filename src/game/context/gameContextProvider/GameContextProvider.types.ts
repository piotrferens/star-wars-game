import { ReactNode, Dispatch } from 'react';

import { GameState } from '../gameContextController/GameContextController.types';
import { Action } from '../gameState/actions/gameStateActions';

export type GameContextProviderProps = {
  state: GameState | null;
  dispatch: Dispatch<Action>;
  children: ReactNode;
};
