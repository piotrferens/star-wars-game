import { InitialResourceData } from 'src/game/context/gameContextController/GameContextController.types';

export type Action = {
  type: 'BATTLE_FINISHED';
  payload: InitialResourceData;
};
