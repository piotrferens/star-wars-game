import { createContext, Dispatch } from 'react';

import { GameState } from '../gameContextController/GameContextController.types';
import { Action } from '../gameState/actions/gameStateActions';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const dispatchMock: Dispatch<Action> = () => {};
export const GameStateContext = createContext<GameState | null>(null);
export const GameDispatchContext = createContext(dispatchMock);
