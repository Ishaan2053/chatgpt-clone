import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl61ltfCW61fUw4CKr4q8jbjKrKSCMQvE",
  authDomain: "ishaan-34e82.firebaseapp.com",
  databaseURL: "https://ishaan-34e82.firebaseio.com",
  projectId: "ishaan-34e82",
  storageBucket: "ishaan-34e82.appspot.com",
  messagingSenderId: "714032130614",
  appId: "1:714032130614:web:867875fa0acfd4cea18697"
};
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db};