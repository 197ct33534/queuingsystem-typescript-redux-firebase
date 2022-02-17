import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Pages/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
export default store;
