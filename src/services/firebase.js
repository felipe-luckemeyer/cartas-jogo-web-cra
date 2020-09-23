import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCN--UKPKEsMAy79kkn7A8q-HS1lMX4dZA",
    authDomain: "cartas-jogo.firebaseapp.com",
    databaseURL: "https://cartas-jogo.firebaseio.com",
    projectId: "cartas-jogo",
    storageBucket: "cartas-jogo.appspot.com",
    messagingSenderId: "553167108138",
    appId: "1:553167108138:web:8ed0d7b1c74a96ce40ab53",
    measurementId: "G-M3JCJ9Y403"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();