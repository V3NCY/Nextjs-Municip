import { gql } from '@apollo/client';

export const GET_HOTELS = gql`
  query getHotels {
    hotels {
      _id
      title
      description
      extras
      image
      rating
    }
  }
`;

export const GET_HARDCODED_HOTELS = gql`
query getHardcodedHotels {
  hardcodedHotels 
}
`;


