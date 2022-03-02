import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'ManagerUser',
  initialState: {
    dataManagerUser: [],
  },
  reducers: {
    saveDataManagerUser: (state, action) => {
      state.dataManagerUser = action.payload;
    },
  },
});
