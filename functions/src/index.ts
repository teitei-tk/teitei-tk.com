import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import githubClient from './clients/github'

admin.initializeApp(functions.config().firebase, 'functions');

export const github = functions.https.onRequest((request, response) => {
  const client = new githubClient();
  client.initialize();

  const queryResult = async () => {
    const ret = await client.fetchProfile();
    return JSON.stringify(ret);
  }

  queryResult().then((el) => {
    response.send(el)
  }).catch((r) => {
    console.log(r);
    response.send({});
  });
});
