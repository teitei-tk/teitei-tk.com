import gql from 'graphql-tag'
import ApolloClient from 'apollo-client';

import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch';

const access_token = ''

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' , fetch})
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `bearer ${access_token}`,
      Accept: 'application/vnd.github.v4.idl',
    }
  })
  return forward(operation)
})

const client = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client;
