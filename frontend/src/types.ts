export type Country = {
  id: number;
  name: string;
  code: string;
  emoji: string;
  continent?: {
    id: number;
    name: string;
  };
};

export type NewCountryInput = {
  name: string;
  code: string;
  emoji: string;
  continent?: string;
};

export type Continent = {
  id: string | number;
  name: string;
};

export type ContinentsData = {
  continents: Continent[];
};
