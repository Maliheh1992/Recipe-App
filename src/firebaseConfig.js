// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0MsUK8kzVO0Mr0XBzW-esFh_sQsM9Zyo",
  authDomain: "ramafood-8fdeb.firebaseapp.com",
  projectId: "ramafood-8fdeb",
  storageBucket: "ramafood-8fdeb.firebasestorage.app",
  messagingSenderId: "218716603895",
  appId: "1:218716603895:web:8b1ab1b15f1d04507b9af2",
  measurementId: "G-1F3HXFXPCL"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);