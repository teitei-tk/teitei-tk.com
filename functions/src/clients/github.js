"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var functions = require("firebase-functions");
var apollo_client_1 = require("apollo-client");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_link_http_1 = require("apollo-link-http");
var graphql_tag_1 = require("graphql-tag");
var node_fetch_1 = require("node-fetch");
exports.githubEnv = {
    token: functions.config().github
};
exports.grahqlEndpointURL = 'https://api.github.com/graphql';
var token = exports.githubEnv.token;
var grahqlEndpoint = new apollo_link_http_1.HttpLink({
    uri: exports.grahqlEndpointURL,
    fetch: node_fetch_1["default"],
    headers: {
        authorization: token ? "Bearer " + token : null
    }
});
var githubGrahqlClient = new apollo_client_1.ApolloClient({
    ssrMode: true,
    link: grahqlEndpoint,
    cache: new apollo_cache_inmemory_1.InMemoryCache()
});
var PROFILE_QUERY = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["query {\n  user(login: \"teitei-tk\") {\n    name,\n    url,\n    email,\n    company,\n    bio,\n    websiteUrl\n  }\n}"], ["query {\n  user(login: \"teitei-tk\") {\n    name,\n    url,\n    email,\n    company,\n    bio,\n    websiteUrl\n  }\n}"])));
var GithubProfile = /** @class */ (function () {
    function GithubProfile(client) {
        this.client = client;
    }
    GithubProfile.prototype.fetchProfile = function () {
        var user = this.client.readQuery({ query: PROFILE_QUERY }).user;
        return user;
    };
    return GithubProfile;
}());
exports["default"] = new GithubProfile(githubGrahqlClient);
var templateObject_1;
