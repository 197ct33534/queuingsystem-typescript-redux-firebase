import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'paginate',
  initialState: {
    pageNumberLimit: 5,
    maxPageNumberLimit: 5,
    minPageNumberLimit: 0,
    numRowInPage: 9,
    currentPerPage: 1,
  },
  reducers: {
    setCurrentPerPage: (state, action) => {
      state.currentPerPage = action.payload;
    },
    setmaxPageNumberLimit: (state, action) => {
      state.maxPageNumberLimit = action.payload;
    },
    setminPageNumberLimit: (state, action) => {
      state.minPageNumberLimit = action.payload;
    },
    reset: (state) => {
      state.pageNumberLimit = 5;
      state.maxPageNumberLimit = 5;
      state.minPageNumberLimit = 0;
      state.numRowInPage = 9;
      state.currentPerPage = 1;
    },
  },
});
