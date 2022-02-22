import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../components/paginationSlice';
import equipSlice from '../Pages/equipment/equipSlice';
import userSlice from '../Pages/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    equipment: equipSlice.reducer,
    pagination: paginationSlice.reducer,
  },
});
export default store;
