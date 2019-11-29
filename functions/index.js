"use strict";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.requestContentCreatorRole = functions.https.onCall((data, context) => {
  if (context.auth.token.moderator !== true) {
    return "no_auth";
  } else {
    let uid = data.uid;
    return grantContentCreatorRole(uid);
  }
});

let grantContentCreatorRole = async uid => {
  let user = await admin.auth().getUser(uid);
  if (
    user.customClaims &&
    user.customClaims.contentCreator &&
    user.customClaims.contentCreator === true
  ) {
    return "already";
  } else {
    return admin
      .auth()
      .setCustomUserClaims(uid, {
        contentCreator: true
      })
      .then(() => {
        return "done";
      });
  }
};
