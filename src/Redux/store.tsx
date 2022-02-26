import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../components/paginationSlice';
import equipSlice from '../Pages/equipment/equipSlice';
import AccountSlice from '../Pages/manage/Account/AccountSlice';
import randomSlice from '../Pages/random/randomSlice';
import ServiceSlice from '../Pages/service/ServiceSlice';
import userSlice from '../Pages/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    equipment: equipSlice.reducer,
    pagination: paginationSlice.reducer,
    account: AccountSlice.reducer,
    service: ServiceSlice.reducer,
    random: randomSlice.reducer,
  },
});
export default store;
