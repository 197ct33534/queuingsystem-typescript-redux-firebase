import { db } from '../firebaseConfig';

import {
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
const RoleCollectionRef = collection(db, 'Manage-Role');
export interface IRole {
  id: string;
  nameRole: string;
  numberPeople: number;
  descRole: string;
  AX?: string;
  AY?: string;
  AZ?: string;
  BX?: string;
  BY?: string;
  BZ?: string;
}
class RoleDataService {
  addRole = (id: string, newRole: any) => {
    return setDoc(doc(db, 'Manage-Role', id), newRole);
  };
  updateRole = (id: string, updatedRole: any) => {
    const RoleDoc = doc(db, 'Manage-Role', id);
    return updateDoc(RoleDoc, updatedRole);
  };
  getAllRole = () => {
    return getDocs(RoleCollectionRef);
  };
}
export default new RoleDataService();
