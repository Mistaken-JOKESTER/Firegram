import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLI5c9vjSzKyKw0ggLAyceHBnq7SLCscw",
    authDomain: "firestrom-9a412.firebaseapp.com",
    projectId: "firestrom-9a412",
    storageBucket: "firestrom-9a412.appspot.com",
    messagingSenderId: "96506211442",
    appId: "1:96506211442:web:21958418ad6f6d2abfa6eb"
}
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
const projectFirestore = getFirestore(firebaseApp);

export {projectStorage, projectFirestore}