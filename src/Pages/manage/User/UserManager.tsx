import React, { useEffect, useState } from 'react';
import ControllerUser from './ControllerUser';
import UserDataService, { Iuser } from '../../../firebase/ManageUser';
import Table from '../../../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import managerUserSlice from './managerUserSlice';
import paginationSlice from '../../../components/paginationSlice';
import { ManagerUserSelector } from '../../../Redux/selector';
import Pagination from '../../../components/Pagination';
const UserManager = () => {
  //   useEffect(() => {
  //     for (let i = 12; i <= 100; i++) {
  //       UserDataService.addUser(i + '', {
  //         id: i + '',
  //         nameUser: `tuyetnguyen@${i}`,
  //         timeUser: '01/12/2021 15:12:17',
  //         ipUser: '192.168.3.1',
  //         operation: 'Cập nhật thông tin dịch vụ DV_01',
  //       });
  //     }
  //   }, []);
  const dispatch = useDispatch();
  const [users, setUsers] = useState<Iuser[]>([]);
  const user = useSelector(ManagerUserSelector);
  const getManagerUser = async () => {
    const data = await UserDataService.getAllUser();
    const dataArray: Iuser[] = data.docs.map((doc): Iuser => {
      let db: any = doc.data();
      return { ...db };
    });
    dispatch(managerUserSlice.actions.saveDataManagerUser(dataArray));

    setUsers(dataArray);
  };
  useEffect(() => {
    if (user.dataManagerUser.length === 0) {
      getManagerUser();
    } else {
      setUsers(user.dataManagerUser);
    }
  }, [getManagerUser, user]);
  useEffect(() => {
    dispatch(paginationSlice.actions.reset());
  }, [dispatch]);
  return (
    <>
      <ControllerUser />
      <div className="warp-table">
        <Table
          datas={users}
          tittleHeaders={[
            { display: 'Tên đăng nhập', keycolum: 'nameUser' },
            { display: 'Thời gian tác động', keycolum: 'timeUser' },
            { display: 'IP thực hiện', keycolum: 'ipUser' },
            { display: 'Thao tác thực hiện', keycolum: 'operation' },
          ]}
        />
      </div>
      <Pagination totalDatas={users.length} />
    </>
  );
};

export default UserManager;
