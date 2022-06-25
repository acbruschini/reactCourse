
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByK1AWF8lBx_1o5eUsQ9tYm422n8ikl_8",
  authDomain: "coderhouse-react-2d81e.firebaseapp.com",
  projectId: "coderhouse-react-2d81e",
  storageBucket: "coderhouse-react-2d81e.appspot.com",
  messagingSenderId: "702676288969",
  appId: "1:702676288969:web:343f6aa55a274cb9b3d418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}