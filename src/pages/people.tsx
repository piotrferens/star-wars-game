import { getGameLayout } from 'src/game/Layout';
import { createPage } from 'src/helpers/createPage/createPage';
import { getServerSidePropsResource } from 'src/helpers/resourcesPage/getServerSidePropsResource';
import { ResourcePageProps } from 'src/helpers/resourcesPage/resourcePage.types';
import { ResourcePageContainer } from 'src/ui/resourcePage/ResourcePageContainer';

const People = createPage(({ count }: ResourcePageProps) => (
  <ResourcePageContainer count={count} resource="people" attribute="mass" />
));

People.meta = {
  renderLayout: getGameLayout,
};

export const getServerSideProps = getServerSidePropsResource('people', 'mass');

export default People;
