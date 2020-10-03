import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYAyp15wfri2ZhT9X53FPKbm_H8xYhTSU",
  authDomain: "twitter-clone-9e107.firebaseapp.com",
  databaseURL: "https://twitter-clone-9e107.firebaseio.com",
  projectId: "twitter-clone-9e107",
  storageBucket: "twitter-clone-9e107.appspot.com",
  messagingSenderId: "767776098459",
  appId: "1:767776098459:web:eb95caf947bea02809de3e",
  measurementId: "G-NCF9GR324N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
