
import { gql } from '@apollo/client'

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
`;

export const LOGOUT = gql`
mutation Logout {
  logout {
    _id
  }
}
`;
export const REGISTER = gql`
  mutation Register($input: UserInput!) {
    registerUser(input: $input)
  }
`;
export const CREATE_HOTEL = gql`
  mutation CreateHotel($input: CreateHotelInput!) {
    createHotel(input: $input) {
      _id
      title
      description
      extras
      rating
      image
    }
  }
`;
export const CREATE_RESTAURANT = gql`
  mutation CreateRestaurant($input: CreateRestaurantInput!) {
    createRestaurant(input: $input) {
      _id
      title
      description
      extras
      rating
      image
    }
  }
`;