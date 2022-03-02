import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'Report',
  initialState: {
    id: false,
    nameService: false,
    fromDate: false,
    status: false,
    origin: false,
    idValue: 'Tất cả',
    nameServiceValue: 'Tất cả',
    fromDateValue: 'Tất cả',
    statusValue: 'Tất cả',
    originValue: 'Tất cả',
  },
  reducers: {
    setidValue: (state, action) => {
      state.idValue = action.payload;
    },
    setnameServiceValue: (state, action) => {
      state.nameServiceValue = action.payload;
    },
    setfromDateValue: (state, action) => {
      state.fromDateValue = action.payload;
    },
    setstatusValue: (state, action) => {
      state.statusValue = action.payload;
    },
    setoriginValue: (state, action) => {
      state.originValue = action.payload;
    },
    setid: (state, action) => {
      state.id = action.payload;
    },
    setnameService: (state, action) => {
      state.nameService = action.payload;
    },
    setfromDate: (state, action) => {
      state.fromDate = action.payload;
    },
    setstatus: (state, action) => {
      state.status = action.payload;
    },
    setorigin: (state, action) => {
      state.origin = action.payload;
    },
    reset: (state) => {
      state.idValue = 'Tất cả';
      state.nameServiceValue = 'Tất cả';
      state.fromDateValue = 'Tất cả';
      state.statusValue = 'Tất cả';
      state.originValue = 'Tất cả';
    },
  },
});
