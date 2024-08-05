// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9HI4roaAz8YQIM2DxUqIGnWHtmQ09EfQ",
  authDomain: "inventorymanagement-46173.firebaseapp.com",
  projectId: "inventorymanagement-46173",
  storageBucket: "inventorymanagement-46173.appspot.com",
  messagingSenderId: "578367845842",
  appId: "1:578367845842:web:1889e1ff53060b4e89440b",
  measurementId: "G-WGQRMV4MRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};