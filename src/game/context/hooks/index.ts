import { useContext } from 'react';

import { GameDispatchContext, GameStateContext } from '../gameContext/gameContext';

export const useGameState = () => {
  const state = useContext(GameStateContext);
  if (!state) {
    throw new Error('useGameState must be used within Game');
  }
  return state;
};

export const useGameDispatch = () => {
  const dispatch = useContext(GameDispatchContext);
  if (!dispatch) {
    throw new Error('useGameDispatch must be used within Game');
  }
  return dispatch;
};
