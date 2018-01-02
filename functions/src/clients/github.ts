import * as functions from 'firebase-functions'

import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch';
import gql from 'graphql-tag';

class githubClient {
  client: any;

  public initialize() {
    const httpLink = createHttpLink({
      uri: 'https://api.github.com/graphql',
      fetch
    });

    const authLink = setContext((_, { headers }) => {
      const token = functions.config().github.token;

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null,
        }
      }
    });

    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    });
  }

  async fetchProfile(): Promise<{
    name: string,
    url: string,
    email: string,
    company: string,
    bio: string,
    websiteUrl: string
  }> {
    const ret = await this.client.query({query: gql`
      query {
        user(login: "teitei-tk") {
          name,
          url,
          email,
          company,
          bio,
          websiteUrl
        }
      }
    `}).then((r) => {
      return r;
    });

    return ret.data.user;
  }
}

export default githubClient;
