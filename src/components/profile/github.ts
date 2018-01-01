import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

import client from '../../clients/github';

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
    const { user } = this.client.readQuery({query: PROFILE_QUERY})
    return user;
  }
}

export default new GithubProfile(client);
