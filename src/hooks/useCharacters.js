import { gql, useQuery  } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

export const useCharacters = (page) => {
    const { data, loading, error } = useQuery(GET_CHARACTERS, {
      variables: {
        page
      }
    });

    return { data, loading, error };
};
