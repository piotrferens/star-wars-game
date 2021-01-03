import { Person } from './resources.types';

export const personFactory = (person: Partial<Person>): Person => ({
  name: 'Anakin Skywalker',
  height: '188',
  mass: '84',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '41.9BBY',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/1/',
  films: ['http://swapi.dev/api/films/4/', 'http://swapi.dev/api/films/5/', 'http://swapi.dev/api/films/6/'],
  species: [],
  vehicles: ['http://swapi.dev/api/vehicles/44/', 'http://swapi.dev/api/vehicles/46/'],
  starships: [
    'http://swapi.dev/api/starships/39/',
    'http://swapi.dev/api/starships/59/',
    'http://swapi.dev/api/starships/65/',
  ],
  created: new Date('2021-01-01'),
  edited: new Date('2021-01-02'),
  url: 'http://swapi.dev/api/people/11/',
  ...person,
});
