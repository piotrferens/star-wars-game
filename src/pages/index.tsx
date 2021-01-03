import { getGameLayout } from 'src/game/Layout';
import { createPage } from 'src/helpers/createPage/createPage';
import { MainPage } from 'src/ui/mainPage/MainPage';

const Main = createPage(() => <MainPage />);

Main.meta = {
  renderLayout: getGameLayout,
};

export default Main;
