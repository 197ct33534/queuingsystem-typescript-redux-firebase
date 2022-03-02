import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '../../../components/Table';
import RoleDataService, { IRole } from '../../../firebase/ManagerRole';
import { ManagerRoleSelector } from '../../../Redux/selector';
import roleSlice from './roleSlice';
const RoleManager = () => {
  const dispatch = useDispatch();
  const [role, setRoles] = useState<IRole[]>([]);
  const Role = useSelector(ManagerRoleSelector);
  const getManagerRole = async () => {
    const data = await RoleDataService.getAllRole();
    const dataArray: IRole[] = data.docs.map((doc): IRole => {
      let db: any = doc.data();
      return { ...db };
    });
    dispatch(roleSlice.actions.saveDataManagerRole(dataArray));

    setRoles(dataArray);
  };
  useEffect(() => {
    if (
      Role.dataManagerRole.length === 0 ||
      Object.keys(Role.updateManagerRole).length
    ) {
      getManagerRole();
    } else if (Object.keys(Role.addManagerRole).length > 0) {
      setRoles([Role.addManagerRole, ...Role.dataManagerRole]);
      dispatch(
        roleSlice.actions.saveDataManagerRole([
          Role.addManagerRole,
          ...Role.dataManagerRole,
        ])
      );
      dispatch(roleSlice.actions.reset());
    } else {
      setRoles(Role.dataManagerRole);
    }
  }, [getManagerRole, Role]);
  return (
    <>
      <div className="controlDevice-warp-item manageRole-warp-search">
        <span>
          Từ khóa
          <div className="controlDevice-warp-item_search">
            <input type="text" placeholder="Nhập từ khóa " />
            <i className="bx bx-search-alt-2"></i>
          </div>
        </span>
      </div>
      <div className="warp-table">
        <Table
          datas={role}
          tittleHeaders={[
            { display: 'Tên vai trò', keycolum: 'nameRole' },
            { display: 'Số người dùng', keycolum: 'numberPeople' },
            { display: 'Mô tả', keycolum: 'descRole' },
          ]}
          IsUpdate
          pathUpdate={'manage/role/update'}
        />
        <Link to="/manage/role/add">
          <div className="deviceManager-add">
            <div className="deviceManager-add_icon">+</div>
            Thêm vai trò
          </div>
        </Link>
      </div>
    </>
  );
};

export default RoleManager;
