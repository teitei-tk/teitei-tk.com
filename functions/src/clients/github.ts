import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch';
import gql from 'graphql-tag';

interface Repository {
  name: string
  url: string
  description: string
  languages: {
    edges: Array<{
      node: {
        name: string
      }
    }>
  }
}

interface User {
  name: string
  email: string
  bio: string
  avatarUrl: string

  pinnedRepositories: {
    edges: Array<{ node: Repository }>
  }
}

class githubClient {
  client: any;
  token: string;

  constructor(token: string) {
    this.token = token;
    this.initialize();
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
    data: {
      user: User
    }
  }> {
    const ret = await this.client.query({query: gql`
      {
        user(login: "teitei-tk") {
          name
          email
          company
          bio
          avatarUrl
          pinnedRepositories(first: 6) {
            edges {
              node {
                name
                url
                description
                languages(first: 5) {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
  `}).then((r) => {
      return r;
    });

    return ret.data.user;
  }
}

export default githubClient;
