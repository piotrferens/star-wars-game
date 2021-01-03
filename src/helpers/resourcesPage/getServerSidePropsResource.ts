import { fetchPlayers, fetchResourceList } from 'src/api/resources/resources';
import { Resource, ResourceURL } from 'src/api/resources/resources.types';

export const getServerSidePropsResource = <T extends ResourceURL>(url: T, attribute: keyof Resource<T>) => async () => {
  try {
    const { count } = await fetchResourceList(url);
    const { players, fightResult } = await fetchPlayers(url, count, attribute);

    return {
      props: {
        count,
        gameContextInitialData: {
          players,
          fightResult,
          resource: url,
        },
      },
    };
  } catch {
    return {
      props: { count: null, gameContextInitialData: null },
    };
  }
};
