import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import SecureStorageService from "@services/SecureStorage.service";
import PhoenixSocket from "./socket";

const httpLink = createHttpLink({
  uri: process.env.EXPO_PUBLIC_GRAPHQL_API_URL,
});

const phoenixSocket = new PhoenixSocket(process.env.EXPO_PUBLIC_WS_API_URL, {
  params: async () => {
    const { accessToken } = await SecureStorageService.getTokensFromLocal();
    return { token: accessToken };
  },
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

const authLink = setContext(async (_, { headers }) => {
  const { accessToken } = await SecureStorageService.getTokensFromLocal();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const wsLink = createAbsintheSocketLink(absintheSocket);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
