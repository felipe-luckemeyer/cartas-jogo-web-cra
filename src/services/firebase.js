import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDUGv_4yQU3BxvI3UEghcH0AaDfIF58N5o",
  authDomain: "mythical-cards.firebaseapp.com",
  databaseURL: "https://mythical-cards.firebaseio.com",
  projectId: "mythical-cards",
  storageBucket: "mythical-cards.appspot.com",
  messagingSenderId: "309809795846",
  appId: "1:309809795846:web:ee5a48e83427ea62bb0487",
  measurementId: "G-QEY3E6EVKV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
