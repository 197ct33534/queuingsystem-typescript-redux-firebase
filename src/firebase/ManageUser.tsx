import { db } from '../firebaseConfig';

import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
const UserCollectionRef = collection(db, 'Manage-User');
export interface Iuser {
  id: string;
  nameUser: string;
  timeUser: string;
  ipUser: string;
  operation: string;
}
class UserDataService {
  addUser = (id: string, newUser: Iuser) => {
    return setDoc(doc(db, 'Manage-User', id), newUser);
  };

  getAllUser = () => {
    return getDocs(UserCollectionRef);
  };
}
export default new UserDataService();
