import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'Random',
  initialState: {
    dataRandom: [],
    dataRandomAdded: {},
    dataRandomUpdated: {},
    nameService: 'Chọn dịch vụ',
    selectedService: 'Tất cả',
    selectedStatus: 'Tất cả',
    selectedOrigin: 'Tất cả',
    mode: false,
  },
  reducers: {
    setselectedService: (state, action) => {
      state.selectedService = action.payload;
    },
    setselectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },
    setselectedOrigin: (state, action) => {
      state.selectedOrigin = action.payload;
    },
    saveDataRandom: (state, action) => {
      state.dataRandom = action.payload;
    },
    setnameService: (state, action) => {
      state.nameService = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});
