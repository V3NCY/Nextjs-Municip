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
