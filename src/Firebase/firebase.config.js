// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnyMAr1wUh2MYHiv-aVmh-PbM8_Jz5B_A",
  authDomain: "wedding-event-management-e995f.firebaseapp.com",
  projectId: "wedding-event-management-e995f",
  storageBucket: "wedding-event-management-e995f.appspot.com",
  messagingSenderId: "1098961620378",
  appId: "1:1098961620378:web:3f6811a641205eca36be23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)