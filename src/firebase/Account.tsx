import { db } from '../firebaseConfig';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

const AccountCollectionRef = collection(db, 'Manage-Account');
export interface Iaccount {
  id: string;
  nameAccount: string;
  nameUser: string;
  phone: string;
  emailAccount: string;
  jobAccount: string;
  active: boolean;
  rePassWord?: string;
}
class AccountDataService {
  addAccount = (id: string, newAccount: Iaccount) => {
    return setDoc(doc(db, 'Manage-Account', id), newAccount);
  };

  getAllAccount = () => {
    return getDocs(AccountCollectionRef);
  };

  getAccount = (id: string) => {
    const AccountDoc = doc(db, 'Manage-Account', id);
    return getDoc(AccountDoc);
  };
}
export default new AccountDataService();
