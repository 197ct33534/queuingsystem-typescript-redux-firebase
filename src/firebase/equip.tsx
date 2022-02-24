import { db } from '../firebaseConfig';

import {
  collection,
  getDocs,
  getDoc,
  updateDoc,
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

  updateEquip = (id: string, updatedEquip: any) => {
    const EquipDoc = doc(db, 'Equipment', id);
    return updateDoc(EquipDoc, updatedEquip);
  };

  getAllEquipment = () => {
    return getDocs(EquipCollectionRef);
  };

  getEquip = (id: string) => {
    const EquipDoc = doc(db, 'Equipment', id);
    return getDoc(EquipDoc);
  };
}
export default new EquipDataService();
