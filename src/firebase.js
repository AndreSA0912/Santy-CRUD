import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDLGA85jzG613MpsDXtp6GAh8sqfkoc_w8",
    authDomain: "andre-f08d6.firebaseapp.com",
    projectId: "andre-f08d6",
    storageBucket: "andre-f08d6.appspot.com",
    messagingSenderId: "659000904565",
    appId: "1:659000904565:web:00a9ebebbb44d8adcf213c"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)