import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import githubClient from './clients/github'

admin.initializeApp(functions.config().firebase);

export const github = functions.https.onRequest((request, response) => {
  admin.database().ref('github').once('value').then((ret) => {
    const client = new githubClient(ret.val().token);
    client.initialize();

    client.fetchProfile().then((result) => {
      response.send(result)
    }).catch((err) => {
      response.send(err);
    });

  }).catch((err) => {
    response.send(err);
  });
});
