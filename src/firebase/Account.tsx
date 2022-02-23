import { db } from '../firebaseConfig';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  doc,
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
}
class AccountDataService {
  addAccount = (id: string, newAccount: Iaccount) => {
    return setDoc(doc(db, 'Manage-Account', id), newAccount);
  };

  //   updateAccount = (id: string, updatedAccount: {}) => {
  //     const AccountDoc = doc(db, 'Accountment', id);
  //     return updateDoc(AccountDoc, updatedAccount);
  //   };

  //   deleteAccount = (id) => {
  //     const AccountDoc = doc(db, 'Accountment', id);
  //     return deleteDoc(AccountDoc);
  //   };

  getAllAccount = () => {
    return getDocs(AccountCollectionRef);
  };

  getAccount = (id: string) => {
    const AccountDoc = doc(db, 'Manage-Account', id);
    return getDoc(AccountDoc);
  };
}
export default new AccountDataService();
