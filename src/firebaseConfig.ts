import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBlJdQxJfLAAYcnKJoTMfE3N6lTXAd59TE',
  authDomain: 'queuingsystem-e449d.firebaseapp.com',
  projectId: 'queuingsystem-e449d',
  storageBucket: 'queuingsystem-e449d.appspot.com',
  messagingSenderId: '142786407255',
  appId: '1:142786407255:web:9580494c97872349f82c12',
  measurementId: 'G-N9EN9PKTTV',
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
