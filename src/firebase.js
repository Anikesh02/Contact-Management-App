import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyD-uV8FA0WcB1-3PeAqmm0p5dZ0W7jxgM8",
  authDomain: "crud-operations-f962e.firebaseapp.com",
  databaseURL: "https://crud-operations-f962e-default-rtdb.firebaseio.com",
  projectId: "crud-operations-f962e",
  storageBucket: "crud-operations-f962e.appspot.com",
  messagingSenderId: "869006573441",
  appId: "1:869006573441:web:e81cd34546676da2887280"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();


