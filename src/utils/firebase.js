import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyD-xCuqQj65UxPoeifJqLa9vXM_6Qc0yOo",
    authDomain: "netfixgpt-a27d0.firebaseapp.com",
    projectId: "netfixgpt-a27d0",
    storageBucket: "netfixgpt-a27d0.appspot.com",
    messagingSenderId: "575274400327",
    appId: "1:575274400327:web:89d47016e60d0a5d614f62",
    measurementId: "G-62PMGEZ3H4"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);