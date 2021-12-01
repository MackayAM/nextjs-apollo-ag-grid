import { gql } from '@apollo/client';

export const CHARACTER_QUERY = gql`
  query GetCharacters($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        created
      }
      location {
        id
        name
        type
        dimension
        created
      }
      created
    }
  }
`;
