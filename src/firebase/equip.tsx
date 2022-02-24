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
const EquipCollectionRef = collection(db, 'Equipment');
export interface IEquip {
  id: string;
  name: string;
  ipAddress: string;
  active?: boolean;
  connect?: boolean;
  service: string;
  Account: string;
  passWord: string;
  typeDevice: string;
}
class EquipDataService {
  addEquipment = (id: string, newEquip: IEquip) => {
    return setDoc(doc(db, 'Equipment', id), newEquip);
  };

  updateEquip = (id: string, updatedEquip: IEquip) => {
    const EquipDoc = doc(db, 'Equipment', id);
    return updateDoc(EquipDoc, updatedEquip);
  };

  //   deleteEquip = (id) => {
  //     const EquipDoc = doc(db, 'Equipment', id);
  //     return deleteDoc(EquipDoc);
  //   };

  getAllEquipment = () => {
    return getDocs(EquipCollectionRef);
  };

  getEquip = (id: string) => {
    const EquipDoc = doc(db, 'Equipment', id);
    return getDoc(EquipDoc);
  };
}
export default new EquipDataService();
