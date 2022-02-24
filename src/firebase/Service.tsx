import { db } from '../firebaseConfig';

import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const ServiceCollectionRef = collection(db, 'Service');
export interface Iservice {
  id: string;
  nameService: string;
  descService: string;
  active: boolean;
  prefix: string;
  surfix: string;
  toIncrese: string;
  fromIncrese: string;
  resetCheckbox: boolean;
  surfixCheckbox: boolean;
  prefixCheckbox: boolean;
  fromIncreseCheckbox: boolean;
}
class SerDataService {
  addService = (id: string, newService: Iservice) => {
    return setDoc(doc(db, 'Service', id), newService);
  };
  updateService = (id: string, updatedService: any) => {
    const EquipDoc = doc(db, 'Service', id);
    return updateDoc(EquipDoc, updatedService);
  };
  getAllService = () => {
    return getDocs(ServiceCollectionRef);
  };

  getService = (id: string) => {
    const ServiceDoc = doc(db, 'Service', id);
    return getDoc(ServiceDoc);
  };
}
export default new SerDataService();
