import { db } from '../firebaseConfig';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
const UserCollectionRef = collection(db, 'Users');
class UserDataService {
  //   addUsers = (newUser) => {
  //     return addDoc(UserCollectionRef, newUser);
  //   };

  updateUser = (id: string, updatedUser: {}) => {
    const UserDoc = doc(db, 'Users', id);
    return updateDoc(UserDoc, updatedUser);
  };

  //   deleteUser = (id) => {
  //     const UserDoc = doc(db, 'Users', id);
  //     return deleteDoc(UserDoc);
  //   };

  getAllUsers = () => {
    return getDocs(UserCollectionRef);
  };

  //   getUser = (id) => {
  //     const UserDoc = doc(db, 'Users', id);
  //     return getDoc(UserDoc);
  //   };
}
export default new UserDataService();
