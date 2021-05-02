
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

export const REGISTER_USER = gql`
mutation register(
  $username: String!
  $email: String!
  $password: String!
  $confirmPassword: String!
) {
  register (
    registerInput: {
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    }
  ) {
    id email username createdAt token
  }
}

`
