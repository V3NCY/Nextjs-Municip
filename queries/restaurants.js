import { gql } from '@apollo/client';

export const GET_RESTAURANTS = gql`
  query getRestaurants {
    restaurants {
      _id
      title
      description
      extras
      image
      rating
    }
  }
`;

export const GET_HARDCODED_RESTAURANTS = gql`
query getHardcodedRestaurants {
  hardcodedRestaurants
}
`;


