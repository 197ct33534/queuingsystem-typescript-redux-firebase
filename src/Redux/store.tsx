import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../components/paginationSlice';
import equipSlice from '../Pages/equipment/equipSlice';
import AccountSlice from '../Pages/manage/Account/AccountSlice';
import managerUserSlice from '../Pages/manage/User/managerUserSlice';
import randomSlice from '../Pages/random/randomSlice';
import reportSlice from '../Pages/report/reportSlice';
import ServiceSlice from '../Pages/service/ServiceSlice';
import userSlice from '../Pages/user/userSlice';
import managerRoleSlice from '../Pages/manage/Role/roleSlice';
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    equipment: equipSlice.reducer,
    pagination: paginationSlice.reducer,
    account: AccountSlice.reducer,
    service: ServiceSlice.reducer,
    random: randomSlice.reducer,
    report: reportSlice.reducer,
    managerUser: managerUserSlice.reducer,
    managerRole: managerRoleSlice.reducer,
  },
});
export default store;
