import functions from 'firebase-functions'

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const githubEnv: { token: string } = {
  token: functions.config().github.token
};

export const grahqlEndpointURL = 'https://api.github.com/graphql'

const grahqlEndpoint = createHttpLink({
  uri: grahqlEndpointURL
});

const authLink = setContext((_, { headers }) => {
  const token = githubEnv.token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(grahqlEndpoint),
  cache: new InMemoryCache()
});


export default client;
