
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyD9rKRPeiAAn1WwTp0-6HS6CB96LSWapkQ",
  authDomain: "facebook-clone-ef28a.firebaseapp.com",
  projectId: "facebook-clone-ef28a",
  storageBucket: "facebook-clone-ef28a.firebasestorage.app",
  messagingSenderId: "776224285719",
  appId: "1:776224285719:web:9c48da8832fe457de9a852",
  measurementId: "G-2ERZ3PWXMY"
};



// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;



























