
// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyBegIGyaR1tnG_u2BY9FKm9KP36JSPaPts",
  authDomain: "sdtrc1.firebaseapp.com",
  databaseURL: "https://sdtrc1-default-rtdb.firebaseio.com",
  projectId: "sdtrc1",
  storageBucket: "sdtrc1.appspot.com",
  messagingSenderId: "461359871112",
  appId: "1:461359871112:web:1081c160384d476131db3d"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const firebaseReady = Promise.resolve();
