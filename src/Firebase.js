import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDzf2jTw5gGv_itZdUabQheHgLBzia1xNs",
    authDomain: "projetosomativa2.firebaseapp.com",
    projectId: "projetosomativa2",
    storageBucket: "projetosomativa2.appspot.com",
    messagingSenderId: "675040123421",
    appId: "1:675040123421:web:be3451ec9ef3cca91144f4",
    measurementId: "G-EWTGRKS8K2"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;