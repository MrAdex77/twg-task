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

const SEND_MESSAGE = gql(`
  mutation SendMessage($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      id
      body
      insertedAt
      user {
        id    
        email
        firstName
        lastName
        role
      }
    }
  }
`);

const MESSAGE_ADDED = gql(`
  subscription MessageAdded($roomId: String!) {
    messageAdded(roomId: $roomId) {
      id
      body
      insertedAt
      user {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`);

const GET_ROOMS = gql(`
  query UsersRooms {
    usersRooms {
      user {
        email
        firstName
        lastName
        id
        role  
      }
        rooms {
        id
        name
      }
    }
  }
`);

const GET_ROOM = gql(`
  query Room($id: ID!) {
    room(id: $id) {
      id
      name
      user {
        id
        email
        firstName
        lastName
        role
        }
      messages {
        id
        body
        insertedAt
        user {
          id
          email
          firstName
          lastName
          role
        }
      }
    }
  }
`);

export { GET_ROOM, GET_ROOMS, LOGIN_USER, MESSAGE_ADDED, REGISTER_USER, SEND_MESSAGE };
