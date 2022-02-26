import { db } from '../firebaseConfig';

import { collection, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';

const RandomCollectionRef = collection(db, 'Random');
export interface Irandom {
  id: string;
  nameCustomer: string;
  nameService: string;
  fromDate: string;
  toDate: string;
  status: string;
  phone: string;
  email: string;
  origin: string;
}
class RandomDataService {
  addRandom = (id: string, newRan: Irandom) => {
    return setDoc(doc(db, 'Random', id), newRan);
  };

  getAllRandom = () => {
    return getDocs(RandomCollectionRef);
  };

  getRandom = (id: string) => {
    const RandomDoc = doc(db, 'Random', id);
    return getDoc(RandomDoc);
  };
}
export default new RandomDataService();
