import { useEffect, useRef } from 'react';
import { useImmerReducer } from 'use-immer';

import { GameContextProvider } from '../gameContextProvider/GameContextProvider';
import { gameStateReducer } from '../gameState/reducer/gameStateReducer';

import { GameContextControllerProps, GameState } from './GameContextController.types';
import { initialState } from './GameContextController.utils';

export const GameContextController = ({ initialData, children }: GameContextControllerProps) => {
  const [state, dispatch] = useImmerReducer<GameState>(gameStateReducer, initialState, (initState) => {
    if (!initialData) {
      return initState;
    }

    const { fightResult, players } = initialData;

    const resource = {
      players: players,
      fightResult: fightResult,
      leftSideWins: fightResult === 'left' ? 1 : 0,
      rightSideWins: fightResult === 'right' ? 1 : 0,
    };

    initState[initialData.resource] = resource;

    return initState;
  });

  const firstMount = useRef(true);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    if (initialData) {
      dispatch({ type: 'BATTLE_FINISHED', payload: initialData });
    }
  }, [initialData]);

  return (
    <GameContextProvider state={state} dispatch={dispatch}>
      {children}
    </GameContextProvider>
  );
};
