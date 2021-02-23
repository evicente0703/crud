import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAh7zEL-21xI-HCBHtYay33tP-7KSPQpYg",
    authDomain: "crud-12ee6.firebaseapp.com",
    projectId: "crud-12ee6",
    storageBucket: "crud-12ee6.appspot.com",
    messagingSenderId: "137039209694",
    appId: "1:137039209694:web:5c9d3daf2a20809be6ce4f"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)