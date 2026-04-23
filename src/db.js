import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTYOtrfewxwb1RNZJ0yWVJ0xlr2BNoMXs",
  authDomain: "mtm6404-contact-book-rea-af72f.firebaseapp.com",
  projectId: "mtm6404-contact-book-rea-af72f",
  storageBucket: "mtm6404-contact-book-rea-af72f.firebasestorage.app",
  messagingSenderId: "178046297618",
  appId: "1:178046297618:web:820aedd6a865616a9f5acb",
  measurementId: "G-CC9VWW8251"
};

// Initialize Firebase & Firestone
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db