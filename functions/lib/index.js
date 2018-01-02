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
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const github_1 = require("./clients/github");
admin.initializeApp(functions.config().firebase, 'functions');
exports.github = functions.https.onRequest((request, response) => {
    const client = new github_1.default();
    client.initialize();
    const queryResult = () => __awaiter(this, void 0, void 0, function* () {
        const ret = yield client.fetchProfile();
        return JSON.stringify(ret);
    });
    queryResult().then((el) => {
        response.send(el);
    }).catch((r) => {
        console.log(r);
        response.send({});
    });
});
//# sourceMappingURL=index.js.map