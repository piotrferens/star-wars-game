import { LayoutProps } from 'src/helpers/createPage/createPage.types';

import { GameContextController } from './context/gameContextController/GameContextController';
import { InitialResourceData } from './context/gameContextController/GameContextController.types';

type Props = LayoutProps<{
  gameContextInitialData: InitialResourceData | null;
}>;

export const GameLayout = ({ page, pageProps: { gameContextInitialData } }: Props) => (
  <GameContextController initialData={gameContextInitialData}>{page}</GameContextController>
);

export const getGameLayout = (layoutProps: Props) => <GameLayout {...layoutProps} />;
