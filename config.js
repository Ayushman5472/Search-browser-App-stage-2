import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDm7f62elgFml6uUFd2_b-PkyE-JKMYyg8",
  authDomain: "barcode-scanner-dced1.firebaseapp.com",
  databaseURL: "https://barcode-scanner-dced1.firebaseio.com",
  projectId: "barcode-scanner-dced1",
  storageBucket: "barcode-scanner-dced1.appspot.com",
  messagingSenderId: "1087966588499",
  appId: "1:1087966588499:web:5085c7c7be3d1ed1f5e0a6"
};
// Initialize Firebase
if (!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
