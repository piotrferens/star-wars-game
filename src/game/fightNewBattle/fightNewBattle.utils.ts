import { FightResult } from 'src/api/resources/resources.types';

export const formatToNumber = (num: string) => Number(num.replace(/,|-/, '.'));

export const fightBattle = (leftPlayerAttribute: string, rightPlayerAttribute: string): FightResult => {
  const leftPlayerAttributeValue = formatToNumber(leftPlayerAttribute);
  const rightPlayerAttributeValue = formatToNumber(rightPlayerAttribute);

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
