// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx0Xy1tnL4F3YrV9eaZSyplErOxhcaFPo",
  authDomain: "job-portal-quickjobs.firebaseapp.com",
  projectId: "job-portal-quickjobs",
  storageBucket: "job-portal-quickjobs.firebasestorage.app",
  messagingSenderId: "814212937004",
  appId: "1:814212937004:web:c0655bb436cebe1ef46889"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);