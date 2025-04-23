// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getApps, getApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDI61NqVx3J5DQzJhgw2bUoOFt0y5JvqFE",
	authDomain: "prepinter-8a011.firebaseapp.com",
	projectId: "prepinter-8a011",
	storageBucket: "prepinter-8a011.firebasestorage.app",
	messagingSenderId: "123655649810",
	appId: "1:123655649810:web:262b87494516c9cfeaf6cb",
	measurementId: "G-C0Y875TXL4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();


export const  auth = getAuth(app);
export const db = getFirestore(app);
