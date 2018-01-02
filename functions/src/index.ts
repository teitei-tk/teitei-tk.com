import * as functions from 'firebase-functions';
import axios from 'axios'
import gql from 'graphql-tag';

import client from './github'

export const github = functions.https.onRequest((request, response) => {
  const queryResult = async () => {
    const a = await client.query({query: gql`
      query {
        user(login: "teitei-tk") {
          name,
          url,
          email,
          company,
          bio,
          websiteUrl
        }
      }
    `}).then((r) => {
      return r;
    });

    return JSON.stringify(a.data.user);
  }


//const queryResult = async () => {
//// const accessToken = "92082adeafbf5448a6f84d88033531ccfc03a65f";
//// const r = await axios({
////   url: 'https://api.github.com/graphql',
////   headers: {
////     Authorization: `bearer ${accessToken}`,
////     Accept: 'application/vnd.github.v4.idl'
////   },
////   method: 'POST',
////   data: {
////     query: `query {
////        repository(owner: "vuejs", name: "vue") {
////         name,
////         description,
////         license
////       }
////     }`
////   }
////   })
//// .then(res => res.data)
////
//// return r;
//};

const b = queryResult();
console.log(b)
 response.send(b);
});
