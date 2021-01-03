import { InitialResourceData } from 'src/game/context/gameContextController/GameContextController.types';

export type ResourcePageProps = {
  count: number | null;
  gameContextInitialData: InitialResourceData | null;
};
