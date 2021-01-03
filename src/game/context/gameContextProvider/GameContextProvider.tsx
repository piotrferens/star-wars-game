import { GameDispatchContext, GameStateContext } from '../gameContext/gameContext';

import { GameContextProviderProps } from './GameContextProvider.types';

export const GameContextProvider = ({ state, dispatch, children }: GameContextProviderProps) => (
  <GameStateContext.Provider value={state}>
    <GameDispatchContext.Provider value={dispatch}>{children}</GameDispatchContext.Provider>
  </GameStateContext.Provider>
);
