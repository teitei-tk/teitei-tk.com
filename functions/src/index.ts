import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { DateTime } from 'luxon'

import githubClient from './clients/github'

admin.initializeApp(functions.config().firebase);

const expired = (expired_at) => {
  return DateTime.utc() > expired_at;
};

const fetchExpiredDt = () => {
  return DateTime.utc().plus({ days: 7 });
};

export const github = functions.https.onRequest(async (request, response) => {
  admin.database().ref('github/token').once('value').then((token) => {
    const ref = admin.database().ref('github/profile');
    ref.once('value').then((prof) => {
      const el = prof.val();
      const expiredAt = fetchExpiredDt();
      if (el === null || expired(DateTime.fromISO(el.expired_at))) {
        const client = new githubClient(token.val());

        client.fetchProfile().then((profile) => {
          const payload = Object.assign({}, profile, {
            expired_at: expiredAt.toISO()
          });

          ref.set(payload);
          response.send(payload);
        }).catch((err) => {
          response.send(err);
        });
      }
      response.send(el);

    }).catch((err) => {
      response.send(err);

    });

  }).catch((err) => {
    response.send(err);
  });
});
