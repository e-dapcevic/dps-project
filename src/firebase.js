import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAiiywLVYsyWC9hLbuq0X30XU-prwQd3Xw",
  authDomain: "just-clock-it-4388f.firebaseapp.com",
  databaseURL: "https://just-clock-it-4388f.firebaseio.com",
  projectId: "just-clock-it-4388f",
  storageBucket: "just-clock-it-4388f.appspot.com",
  messagingSenderId: "43987539881",
  appId: "1:43987539881:web:27a8baf62530300e1296b8",
  measurementId: "G-0JLHGX53YR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  export default firebase