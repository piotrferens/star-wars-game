import { MainPageLayout } from './layout/Layout';
import { resources } from './MainPage.utils';
import { MainPageResources } from './resources/Resources';
import { MainPageTitle } from './title/Title';

export const MainPage = () => (
  <MainPageLayout>
    <MainPageTitle title="Choose a resource you want to play" />
    <MainPageResources resources={resources} />
  </MainPageLayout>
);
