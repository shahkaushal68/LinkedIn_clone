import firebase from "firebase";
//import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc4iLs9Zw0enOsDrsfHiQsf33_SX0mPFk",
  authDomain: "linkedin-clone-15ccb.firebaseapp.com",
  projectId: "linkedin-clone-15ccb",
  storageBucket: "linkedin-clone-15ccb.appspot.com",
  messagingSenderId: "42974004153",
  appId: "1:42974004153:web:ab6dabca662b4c46752c68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default firebaseApp;
