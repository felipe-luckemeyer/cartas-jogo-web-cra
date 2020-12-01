import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDPAh503qNUhhh0YSLXBKq0GeqJWhVvkFw",
  authDomain: "cartas-jogo-beta.firebaseapp.com",
  databaseURL: "https://cartas-jogo-beta.firebaseio.com",
  projectId: "cartas-jogo-beta",
  storageBucket: "cartas-jogo-beta.appspot.com",
  messagingSenderId: "114453148886",
  appId: "1:114453148886:web:b039cfd100b22ac19f4577",
  measurementId: "G-B08NRJ7HR8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
