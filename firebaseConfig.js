import * as firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAkbOwEq9H3UPLsmn04WP_CkU4npL0kyIE",
    authDomain: "inter-val.firebaseapp.com",
    databaseURL: "https://inter-val.firebaseio.com",
    projectId: "inter-val",
    storageBucket: "inter-val.appspot.com",
    messagingSenderId: "939224075393",
    appId: "1:939224075393:web:99fc85b8d2b7be6452d180",
    measurementId: "G-SNTS1P5YQJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
