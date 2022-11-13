import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_BTWBOluZnEQt_9NdGzdpbac3LhAInX0",
  authDomain: "whatsapp-clone-15d9a.firebaseapp.com",
  projectId: "whatsapp-clone-15d9a",
  storageBucket: "whatsapp-clone-15d9a.appspot.com",
  messagingSenderId: "481894426121",
  appId: "1:481894426121:web:3970f0f61c433c1160fad8",
  measurementId: "G-5VKQ69JCNV",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; // explicitly
export default db; // implicitly
