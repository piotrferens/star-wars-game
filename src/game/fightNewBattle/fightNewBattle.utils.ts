import { FightResult } from 'src/api/resources/resources.types';

export const fightBattle = (leftPlayerAttribute: string, rightPlayerAttribute: string): FightResult => {
  const leftPlayerAttributeValue = Number(leftPlayerAttribute);
  const rightPlayerAttributeValue = Number(rightPlayerAttribute);

  if (leftPlayerAttributeValue > rightPlayerAttributeValue) {
    return 'left';
  } else if (leftPlayerAttributeValue < rightPlayerAttributeValue) {
    return 'right';
  }

  return 'draw';
};

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const getUniqueRandomNumbers = (count: number, limit = 2, uniqueRandoms: number[] = []): number[] => {
  const elem = getRandomNumber(1, count);

  if (uniqueRandoms.includes(elem)) {
    return getUniqueRandomNumbers(count, limit, uniqueRandoms);
  } else {
    uniqueRandoms.push(elem);
  }

  if (uniqueRandoms.length === limit) {
    return uniqueRandoms;
  }

  return getUniqueRandomNumbers(count, limit, uniqueRandoms);
};
