import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLError, networkError }) => {
  if (graphQLError) {
    graphQLError.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL erroe]: Message:${message}, Locations:${locations},Path:${path}`,
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({
  link,
  cache: InMemoryCache(),
});

export default client;
