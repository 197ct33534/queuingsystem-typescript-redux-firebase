import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'user',
  initialState: {
    isLogginSucc: false,
    idAcount: '',
    isLogginErr: true,
    forgotPass: false,
    IDemailAccount: '',
  },
  reducers: {
    userLogginSucc: (state, action) => {
      state.idAcount = action.payload;
      state.isLogginSucc = true;
      state.isLogginErr = true;
    },
    userLogoutSucc: (state, action) => {
      state.idAcount = action.payload.idAcount;
      state.isLogginSucc = action.payload.isLogginSucc;
      state.isLogginErr = action.payload.isLogginErr;
      state.forgotPass = action.payload.forgotPass;
      state.IDemailAccount = action.payload.IDemailAccount;
    },
    userLogginErr: (state) => {
      state.isLogginSucc = false;
      state.isLogginErr = false;
    },
    userForgotPass: (state) => {
      state.forgotPass = true;
    },
    userEmailAccout: (state, action) => {
      state.IDemailAccount = action.payload;
    },
  },
});
