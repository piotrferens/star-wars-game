import { api } from 'src/api';

import { fightBattle, getUniqueRandomNumbers } from './resource.utils';
import { ResourceList, Resource, ResourceURL } from './resources.types';

export const fetchResourceList = <T extends ResourceURL>(url: T) =>
  api.get<ResourceList<T>>(`/${url}/`).then(({ data }) => data);

export const fetchResource = <T extends ResourceURL>(url: T, id: number) =>
  api.get<Resource<T>>(`/${url}/${id}`).then(({ data }) => data);

export const fetchPlayers = async <T extends ResourceURL>(url: T, count: number, attribute: keyof Resource<T>) => {
  const [leftSidePlayerNumber, rightSidePlayerNumber] = getUniqueRandomNumbers(count);

  const [left, right] = await Promise.all([
    fetchResource(url, leftSidePlayerNumber),
    fetchResource(url, rightSidePlayerNumber),
  ]);

  const leftValue = `${left[attribute]}`;
  const rightValue = `${right[attribute]}`;

  const players = {
    left: {
      name: left.name,
      value: leftValue,
    },
    right: {
      name: right.name,
      value: rightValue,
    },
  };

  const fightResult = fightBattle(leftValue, rightValue);

  return {
    players,
    fightResult,
  };
};
