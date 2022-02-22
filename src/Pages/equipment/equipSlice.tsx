import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'Equip',
  initialState: {
    dataEquip: [],
    dataEquipAdded: '',
    dataEquipUpdated: '',
    idDataEquipRemoved: '',
    selectedActive: 'Tất cả',
    selectedConnect: 'Tất cả',
  },
  reducers: {
    saveDataEquip: (state, action) => {
      state.dataEquip = action.payload;
    },
    setSelectedActive: (state, action) => {
      state.selectedActive = action.payload;
    },
    setSelectedConnect: (state, action) => {
      state.selectedConnect = action.payload;
    },
  },
});
