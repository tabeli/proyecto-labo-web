import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBnAx-l7N5L7D4GGNi8liUcVBltodk5OJM",
    authDomain: "proyectolaboweb.firebaseapp.com",
    databaseURL: "https://proyectolaboweb.firebaseio.com",
    projectId: "proyectolaboweb",
    storageBucket: "proyectolaboweb.appspot.com",
    messagingSenderId: "990422813627",
    appId: "1:990422813627:web:ee90c553474fe089d7d29e"
  };
  var fireDb = firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();
  export default fireDb.database().ref();