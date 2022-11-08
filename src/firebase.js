// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2CwYWQx-_dCDnb2-WT0PxAlq0_IpeJLc",
  authDomain: "todo-app-yt-188b0.firebaseapp.com",
  projectId: "todo-app-yt-188b0",
  storageBucket: "todo-app-yt-188b0.appspot.com",
  messagingSenderId: "341287177997",
  appId: "1:341287177997:web:3d71f9260fd1adb9416a44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)