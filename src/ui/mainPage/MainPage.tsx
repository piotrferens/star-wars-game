import { MainLayout } from '../layouts/main/Main';

import { resources } from './MainPage.utils';
import { MainPageResources } from './resources/Resources';
import { MainPageTitle } from './title/Title';

export const MainPage = () => (
  <MainLayout>
    <MainPageTitle title="Choose a resource you want to play" />
    <MainPageResources resources={resources} />
  </MainLayout>
);
