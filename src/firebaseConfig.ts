import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyBlJdQxJfLAAYcnKJoTMfE3N6lTXAd59TE',
  // authDomain: 'queuingsystem-e449d.firebaseapp.com',
  // projectId: 'queuingsystem-e449d',
  // storageBucket: 'queuingsystem-e449d.appspot.com',
  // messagingSenderId: '142786407255',
  // appId: '1:142786407255:web:9580494c97872349f82c12',
  // measurementId: 'G-N9EN9PKTTV',

  apiKey: 'AIzaSyADcgnCpn3VQLOwJ3TSbKRJHVtVWWHv_-8',
  authDomain: 'queuingsystem-47153.firebaseapp.com',
  databaseURL: 'https://queuingsystem-47153-default-rtdb.firebaseio.com',
  projectId: 'queuingsystem-47153',
  storageBucket: 'queuingsystem-47153.appspot.com',
  messagingSenderId: '1023446546192',
  appId: '1:1023446546192:web:98fed2af00881a2116d795',
  measurementId: 'G-BHV8WHRPXT',
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
