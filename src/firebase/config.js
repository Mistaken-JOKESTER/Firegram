import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: //API KEY,
    authDomain: //authDomain,
    projectId: //ProjectID,
    storageBucket: //storageBucket,
    messagingSenderId: //messaging sender id,
    appId: //appid
}
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
const projectFirestore = getFirestore(firebaseApp);

export {projectStorage, projectFirestore}
