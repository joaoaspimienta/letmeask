import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCjQMYhchcP20HO_hU25qZqMt7JEZhkWnk",
    authDomain: "letmeask-57ee1.firebaseapp.com",
    databaseURL: "https://letmeask-57ee1-default-rtdb.firebaseio.com",
    projectId: "letmeask-57ee1",
    storageBucket: "letmeask-57ee1.appspot.com",
    messagingSenderId: "932792557785",
    appId: "1:932792557785:web:9ba55401ef7608d7909ec8"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();