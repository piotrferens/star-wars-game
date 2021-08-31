import { personFactory } from 'src/api/resources/resource.mocks';
import * as resources from 'src/api/resources/resources';

import { fightNewBattle } from './fightNewBattle';
import { fightBattle, getUniqueRandomNumbers, formatToNumber } from './fightNewBattle.utils';

describe('formatToNumber', () => {
  it('formats number with coma', () => {
    expect(formatToNumber('3,123123')).toBe(3.123123);
  });

  it('formats number with dash', () => {
    expect(formatToNumber('213-123')).toBe(213.123);
  });
});

describe('fightBattle', () => {
  it('returns won for left player', () => {
    expect(fightBattle('3', '2')).toBe('left');
    expect(fightBattle('123,123', '12-12')).toBe('left');
  });

  it('returns won for right player', () => {
    expect(fightBattle('21', '123')).toBe('right');
    expect(fightBattle('34-32', '824,57')).toBe('right');
  });

  it('returns draw', () => {
    expect(fightBattle('32', '32')).toBe('draw');
  });
});

describe('getUniqueRandomNumbers', () => {
  it('returns random number', () => {
    const [firstNumber, secondNumber] = getUniqueRandomNumbers(2);
    expect(firstNumber).not.toEqual(secondNumber);
  });
});

describe('fightNewBattle', () => {
  it('returns state of battle', async () => {
    jest
      .spyOn(resources, 'fetchResource')
      .mockResolvedValueOnce(personFactory({ name: 'Luke', mass: '11' }))
      .mockResolvedValueOnce(personFactory({ name: 'Vader', mass: '12' }));

    const {
      players: { left, right },
      fightResult,
    } = await fightNewBattle('people', 20, 'mass');

    expect(left.name).toBe('Luke');
    expect(right.value).toBe('12');
    expect(fightResult).toBe('right');
  });
});
