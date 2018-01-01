import * as functions from 'firebase-functions'

import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject, InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag'
import fetch from 'node-fetch'

export const githubEnv: { token: string } = {
  token: functions.config().github
};

export const grahqlEndpointURL = 'https://api.github.com/graphql'

const token = githubEnv.token;
const grahqlEndpoint = new HttpLink({
  uri: grahqlEndpointURL,
  fetch,
  headers: {
    authorization: token ? `Bearer ${token}` : null,
  }
})

const githubGrahqlClient = new ApolloClient({
  ssrMode: true,
  link: grahqlEndpoint,
  cache: new InMemoryCache(),
});

const PROFILE_QUERY = gql`query {
  user(login: "teitei-tk") {
    name,
    url,
    email,
    company,
    bio,
    websiteUrl
  }
}`

class GithubProfile {
  client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  fetchProfile(): {
    name: string,
    url: string,
    email: string,
    company: string,
    bio: string,
    websiteUrl: string
  } {
    const { user } = this.client.query({query: PROFILE_QUERY})
    return user;
  }
}

export default new GithubProfile(githubGrahqlClient);
