import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvjtefrtno3eb3NT4P3qtLxqc5thPAvb8",
    authDomain: "whatsappclone-a547b.firebaseapp.com",
    projectId: "whatsappclone-a547b",
    storageBucket: "whatsappclone-a547b.appspot.com",
    messagingSenderId: "415128994943",
    appId: "1:415128994943:web:b73df7bd04509fc399eb4a",
    measurementId: "G-DG9XYE7NHT"
};
  
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

export const db = getFirestore(app);