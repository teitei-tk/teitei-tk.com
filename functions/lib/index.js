"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const github_1 = require("./clients/github");
const express = require("express");
const app = express();
app.get('/api/v1/github/profile', () => {
    return github_1.default.fetchProfile();
});
exports.default = functions.https.onRequest(app);
/*
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions')
const express = require('express')
const { graphqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')
const { makeExecutableSchema } = require('graphql-tools')

const schema = makeExecutableSchema({

const server = express().use(
  bodyParser.json(),
  graphqlExpress({ schema, context: {} })
)

exports.graphql = functions.https.onRequest(server)
*/
//# sourceMappingURL=index.js.map