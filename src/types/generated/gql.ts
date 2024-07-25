/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation RegisterUser($email: String!, $firstName: String!, $lastName: String!, $password: String!, $passwordConfirmation: String!) {\n    registerUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, passwordConfirmation: $passwordConfirmation) {\n      email, firstName, id, lastName, role\n    }\n  }\n": types.RegisterUserDocument,
    "\n  mutation SendMessage($body: String!, $roomId: String!) {\n    sendMessage(body: $body, roomId: $roomId) {\n      id\n      body\n      insertedAt\n      user {\n        id    \n        email\n        firstName\n        lastName\n        role\n      }\n    }\n  }\n": types.SendMessageDocument,
    "\n  subscription MessageAdded($roomId: String!) {\n    messageAdded(roomId: $roomId) {\n      id\n      body\n      insertedAt\n      user {\n        id\n        email\n        firstName\n        lastName\n        role\n      }\n    }\n  }\n": types.MessageAddedDocument,
    "\n  query UsersRooms {\n    usersRooms {\n      user {\n        email\n        firstName\n        lastName\n        id\n        role  \n      }\n        rooms {\n        id\n        name\n      }\n    }\n  }\n": types.UsersRoomsDocument,
    "\n  query Room($id: ID!) {\n    room(id: $id) {\n      id\n      name\n      user {\n        id\n        email\n        firstName\n        lastName\n        role\n        }\n      messages {\n        id\n        body\n        insertedAt\n        user {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  }\n": types.RoomDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RegisterUser($email: String!, $firstName: String!, $lastName: String!, $password: String!, $passwordConfirmation: String!) {\n    registerUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, passwordConfirmation: $passwordConfirmation) {\n      email, firstName, id, lastName, role\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser($email: String!, $firstName: String!, $lastName: String!, $password: String!, $passwordConfirmation: String!) {\n    registerUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, passwordConfirmation: $passwordConfirmation) {\n      email, firstName, id, lastName, role\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SendMessage($body: String!, $roomId: String!) {\n    sendMessage(body: $body, roomId: $roomId) {\n      id\n      body\n      insertedAt\n      user {\n        id    \n        email\n        firstName\n        lastName\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SendMessage($body: String!, $roomId: String!) {\n    sendMessage(body: $body, roomId: $roomId) {\n      id\n      body\n      insertedAt\n      user {\n        id    \n        email\n        firstName\n        lastName\n        role\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription MessageAdded($roomId: String!) {\n    messageAdded(roomId: $roomId) {\n      id\n      body\n      insertedAt\n      user {\n        id\n        email\n        firstName\n        lastName\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription MessageAdded($roomId: String!) {\n    messageAdded(roomId: $roomId) {\n      id\n      body\n      insertedAt\n      user {\n        id\n        email\n        firstName\n        lastName\n        role\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UsersRooms {\n    usersRooms {\n      user {\n        email\n        firstName\n        lastName\n        id\n        role  \n      }\n        rooms {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query UsersRooms {\n    usersRooms {\n      user {\n        email\n        firstName\n        lastName\n        id\n        role  \n      }\n        rooms {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Room($id: ID!) {\n    room(id: $id) {\n      id\n      name\n      user {\n        id\n        email\n        firstName\n        lastName\n        role\n        }\n      messages {\n        id\n        body\n        insertedAt\n        user {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Room($id: ID!) {\n    room(id: $id) {\n      id\n      name\n      user {\n        id\n        email\n        firstName\n        lastName\n        role\n        }\n      messages {\n        id\n        body\n        insertedAt\n        user {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;