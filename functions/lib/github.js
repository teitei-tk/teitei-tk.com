"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_client_1 = require("apollo-client");
const apollo_link_http_1 = require("apollo-link-http");
const apollo_link_1 = require("apollo-link");
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const node_fetch_1 = require("node-fetch");
const access_token = '';
const httpLink = new apollo_link_http_1.HttpLink({ uri: 'https://api.github.com/graphql', fetch: node_fetch_1.default });
const authMiddleware = new apollo_link_1.ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            Authorization: `bearer ${access_token}`,
            Accept: 'application/vnd.github.v4.idl',
        }
    });
    return forward(operation);
});
const client = new apollo_client_1.default({
    link: authMiddleware.concat(httpLink),
    cache: new apollo_cache_inmemory_1.InMemoryCache(),
});
exports.default = client;
//# sourceMappingURL=github.js.map