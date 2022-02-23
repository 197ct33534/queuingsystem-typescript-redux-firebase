import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../components/paginationSlice';
import equipSlice from '../Pages/equipment/equipSlice';
import AccountSlice from '../Pages/manage/Account/AccountSlice';
import userSlice from '../Pages/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    equipment: equipSlice.reducer,
    pagination: paginationSlice.reducer,
    account: AccountSlice.reducer,
  },
});
export default store;
