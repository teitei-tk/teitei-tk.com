import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch';
import gql from 'graphql-tag';

class githubClient {
  client: any;
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  public initialize() {
    const httpLink = createHttpLink({
      uri: 'https://api.github.com/graphql',
      fetch
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${this.token}`
        }
      }
    });

    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    });

    this;
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
          name
          email
          company
          bio
          avatarUrl
        }
      }
    `}).then((r) => {
      return r;
    });

    return ret.data.user;
  }
}

export default githubClient;
