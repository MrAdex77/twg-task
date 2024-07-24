import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import SecureStorageService from "@services/SecureStorage.service";

const httpLink = createHttpLink({
  uri: process.env.EXPO_PUBLIC_GRAPHQL_API_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const { accessToken } = await SecureStorageService.getTokensFromLocal();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
