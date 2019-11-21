import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyD5JdcfSQyEO68Q6w45H81aH1qldR5cmIw",
  authDomain: "edu-v360.firebaseapp.com",
  databaseURL: "https://edu-v360.firebaseio.com",
  projectId: "edu-v360",
  storageBucket: "edu-v360.appspot.com",
  messagingSenderId: "279998038444",
  appId: "1:279998038444:web:9e6526f247154e407fba09",
  measurementId: "G-6P6TJC828L"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: true })
  .then(() => {
    // console.log("Multi Tab Persistance");
  })
  .catch(error => {
    if (error.code == "failed-precondition") {
      // console.log(
      //   "Multiple tabs open, persistence can only be enabled in one tab at a a time."
      // );
    } else if (error.code == "unimplemented") {
      // console.log(
      //   "The current browser does not support all of the features required to enable persistence"
      // );
    }
  });

// firebase utils
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();
const currentUser = auth.currentUser;

// firebase collections
const app = db.collection("app");
const users = db.collection("users");
const vids = db.collection("vids");

export {
  firebase,
  auth,
  db,
  storage,
  functions,
  currentUser,
  app,
  users,
  vids
};
