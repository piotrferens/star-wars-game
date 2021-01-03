import { GameState } from 'src/game/context/gameContextController/GameContextController.types';

import { Action } from '../actions/gameStateActions';

export const gameStateReducer = (state: GameState, action: Action) => {
  switch (action.type) {
    case 'BATTLE_FINISHED': {
      const resource = {
        players: action.payload.players,
        fightResult: action.payload.fightResult,
        leftSideWins: state[action.payload.resource]?.leftSideWins || 0,
        rightSideWins: state[action.payload.resource]?.rightSideWins || 0,
      };
      if (action.payload.fightResult === 'left') {
        resource.leftSideWins++;
      } else if (action.payload.fightResult === 'right') {
        resource.rightSideWins++;
      }
      state[action.payload.resource] = resource;
      break;
    }
  }
};
