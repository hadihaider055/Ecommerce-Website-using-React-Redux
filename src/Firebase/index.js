import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyk9mwzVP1FVq4pCFleb5Mz8HeiGrz6rg",
  authDomain: "react-ecommerce-website-a1c89.firebaseapp.com",
  projectId: "react-ecommerce-website-a1c89",
  storageBucket: "react-ecommerce-website-a1c89.appspot.com",
  messagingSenderId: "563332146198",
  appId: "1:563332146198:web:1a7e757c024a70a4924137",
};

const app = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
