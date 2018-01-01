"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const apollo_client_1 = require("apollo-client");
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const apollo_link_http_1 = require("apollo-link-http");
const graphql_tag_1 = require("graphql-tag");
const node_fetch_1 = require("node-fetch");
exports.githubEnv = {
    token: functions.config().github
};
exports.grahqlEndpointURL = 'https://api.github.com/graphql';
const token = exports.githubEnv.token;
const grahqlEndpoint = new apollo_link_http_1.HttpLink({
    uri: exports.grahqlEndpointURL,
    fetch: node_fetch_1.default,
    headers: {
        authorization: token ? `Bearer ${token}` : null,
    }
});
const githubGrahqlClient = new apollo_client_1.ApolloClient({
    ssrMode: true,
    link: grahqlEndpoint,
    cache: new apollo_cache_inmemory_1.InMemoryCache(),
});
const PROFILE_QUERY = graphql_tag_1.default `query {
  user(login: "teitei-tk") {
    name,
    url,
    email,
    company,
    bio,
    websiteUrl
  }
}`;
class GithubProfile {
    constructor(client) {
        this.client = client;
    }
    fetchProfile() {
        const { user } = this.client.query({ query: PROFILE_QUERY });
        return user;
    }
}
exports.default = new GithubProfile(githubGrahqlClient);
//# sourceMappingURL=github.js.map