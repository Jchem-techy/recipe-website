import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyACCZEnRWFY0IiUGY79H6MeXRxVfXBBcx0',
  authDomain: 'cooking-ninja-ff7c5.firebaseapp.com',
  projectId: 'cooking-ninja-ff7c5',
  storageBucket: 'cooking-ninja-ff7c5.appspot.com',
  messagingSenderId: '42915986905',
  appId: '1:42915986905:web:40be1f059af3dde781adc8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize the service ( firestore)
const db = getFirestore(app);
// collection refrence
const colRef = collection(db, 'recipes');
export { db, colRef };
