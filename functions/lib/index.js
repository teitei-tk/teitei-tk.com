"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const graphql_tag_1 = require("graphql-tag");
const github_1 = require("./github");
exports.github = functions.https.onRequest((request, response) => {
    const queryResult = () => __awaiter(this, void 0, void 0, function* () {
        const a = yield github_1.default.query({ query: graphql_tag_1.default `
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
    ` }).then((r) => {
            return r;
        });
        return JSON.stringify(a.data.user);
    });
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
    console.log(b);
    response.send(b);
});
//# sourceMappingURL=index.js.map