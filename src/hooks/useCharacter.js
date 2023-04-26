import { gql, useQuery  } from '@apollo/client';

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
      image
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;

export const useCharacter = (id) => {
    const { data, loading, error } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });

    return { data, loading, error };
};
