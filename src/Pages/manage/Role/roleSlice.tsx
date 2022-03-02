import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'ManagerRole',
  initialState: {
    dataManagerRole: [],
    addManagerRole: {},
    updateManagerRole: {},
  },
  reducers: {
    saveDataManagerRole: (state, action) => {
      state.dataManagerRole = action.payload;
    },
    setaddManagerRole: (state, action) => {
      state.addManagerRole = action.payload;
    },
    setupdateManagerRole: (state, action) => {
      state.updateManagerRole = action.payload;
    },
    reset: (state) => {
      state.addManagerRole = {};
      state.updateManagerRole = {};
    },
  },
});
