import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { keys } from './config'

// Your web app's Firebase configuration
const firebaseConfig = keys;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
export default getFirestore(app);