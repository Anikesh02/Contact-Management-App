import firebase from "firebase/compat/app";
import "firebase/compat/database";


var firebaseConfig = {
    apiKey: "AIzaSyAJHUsjy2zHtUXWPILuTpUZmuYZJMJ9Af8",
    authDomain: "react-contact-c3e3c.firebaseapp.com",
    projectId: "react-contact-c3e3c",
    storageBucket: "react-contact-c3e3c.appspot.com",
    messagingSenderId: "24181363871",
    appId: "1:24181363871:web:4f84ded8f3beacd0a9feaa"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();