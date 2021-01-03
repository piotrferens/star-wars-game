import { fetchResource } from 'src/api/resources/resources';
import { Resource, ResourceURL } from 'src/api/resources/resources.types';

import { fightBattle, getUniqueRandomNumbers } from './fightNewBattle.utils';

export const fightNewBattle = async <T extends ResourceURL>(url: T, count: number, attribute: keyof Resource<T>) => {
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
