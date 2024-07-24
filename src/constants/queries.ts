import { gql } from "../types/generated/gql";

const LOGIN_USER = gql(`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`);

const REGISTER_USER = gql(`
  mutation RegisterUser($email: String!, $firstName: String!, $lastName: String!, $password: String!, $passwordConfirmation: String!) {
    registerUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, passwordConfirmation: $passwordConfirmation) {
      email, firstName, id, lastName, role
    }
  }
`);

export { LOGIN_USER, REGISTER_USER };
