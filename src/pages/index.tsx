import { getGameLayout } from 'src/game/Layout';
import { createPage } from 'src/helpers/createPage/createPage';
import { MainPage } from 'src/ui/mainPage/MainPage';

import { PageTitle } from '../ui/shared';

const Main = createPage(() => (
  <>
    <PageTitle title="Star wars - game" />
    <MainPage />
  </>
));

Main.meta = {
  renderLayout: getGameLayout,
};

export default Main;
