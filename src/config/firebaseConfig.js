import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDV7dhHkRxAf2-_VzF4sGudkk5MtLneViw",
    authDomain: "projetoepa-e2c0c.firebaseapp.com",
    projectId: "projetoepa-e2c0c",
    storageBucket: "projetoepa-e2c0c.appspot.com",
    messagingSenderId: "492941534403",
    appId: "1:492941534403:web:dc59d644a26c8f75c8ae76",
    measurementId: "G-F4QHP4E36P"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);