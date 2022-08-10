
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDftYV7OFYT51LsFEIw-VWBvoMAR0deQTc",
  authDomain: "facebook-clone-86ca2.firebaseapp.com",
  projectId: "facebook-clone-86ca2",
  storageBucket: "facebook-clone-86ca2.appspot.com",
  messagingSenderId: "1040265053952",
  appId: "1:1040265053952:web:23ab3daf85172891b015e5",
  measurementId: "G-TQ39CK6RZX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
