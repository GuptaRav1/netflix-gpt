import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_KEY,
	authDomain: "netfixgpt-a27d0.firebaseapp.com",
	projectId: "netfixgpt-a27d0",
	storageBucket: "netfixgpt-a27d0.appspot.com",
	messagingSenderId: "575274400327",
	appId: "1:575274400327:web:89d47016e60d0a5d614f62",
	measurementId: "G-62PMGEZ3H4",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
