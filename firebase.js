import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDVCiEgJnRCj4ZNN-DWkoZ7zuUM5sv8idU",
  authDomain: "myteacherstech.firebaseapp.com",
  projectId: "myteacherstech",
  storageBucket: "myteacherstech.appspot.com",
  messagingSenderId: "601141360487",
  appId: "1:601141360487:web:9a492dd7e3bd3b9e5c61c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({timestampsInSnapshots: true, merge: true});

const auth = firebase.auth();


export default {db, auth};