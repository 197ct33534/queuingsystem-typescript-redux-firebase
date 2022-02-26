import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'Account',
  initialState: {
    dataAccount: [],
    dataAccountAdded: {},
    dataAccountUpdated: {},
    active: 'Tất cả',
  },
  reducers: {
    saveDataAccount: (state, action) => {
      state.dataAccount = action.payload;
    },
    setSelectedActive: (state, action) => {
      state.active = action.payload;
    },

    addNewAccount: (state, action) => {
      state.dataAccountAdded = action.payload;
    },
    updateNewAccount: (state, action) => {
      state.dataAccountUpdated = action.payload;
    },
    resetAdded: (state) => {
      state.dataAccountAdded = {};
    },
  },
});
