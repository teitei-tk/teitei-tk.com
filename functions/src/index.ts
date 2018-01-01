import * as functions from "firebase-functions";
import github from "./clients/github"

import * as express from "express";

const app = express();
app.get('/api/v1/github/profile', () => {
  return github.fetchProfile();
});

export default functions.https.onRequest(app);

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
