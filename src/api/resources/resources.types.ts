export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
};

export type People = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
};

export type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
};

export type Starships = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
};

export type ResourceURL = 'people' | 'starships';
export type ResourceList<T> = T extends 'people' ? People : Starships;
export type Resource<T> = T extends 'people' ? Person : Starship;

export type FightResult = 'left' | 'right' | 'draw';
