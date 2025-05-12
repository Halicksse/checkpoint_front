import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query getAllCountries {
    countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const GET_CONTINENTS = gql`
  query getAllContinents {
    continents {
      id
      name
    }
  }
`;
