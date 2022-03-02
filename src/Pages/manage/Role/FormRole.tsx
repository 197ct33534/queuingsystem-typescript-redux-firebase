import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { ManagerRoleSelector } from '../../../Redux/selector';
import Form from './Form';
import RoleDataService from '../../../firebase/ManagerRole';
import roleSlice from './roleSlice';

interface Iprops {
  update?: boolean;
}
const FormRole = (props: Iprops) => {
  const { update } = props;
  const { id } = useParams();
  const role = useSelector(ManagerRoleSelector);
  const data = role.dataManagerRole.find((item) => item['id'] === id);
  const [roleState, setRoleState] = useState({
    nameRole: update && data ? data['nameRole'] : '',
    descRole: update && data ? data['descRole'] : '',
    AX: update && data ? data['AX'] : false,
    AY: update && data ? data['AY'] : false,
    AZ: update && data ? data['AZ'] : false,
    BX: update && data ? data['BX'] : false,
    BY: update && data ? data['BY'] : false,
    BZ: update && data ? data['BZ'] : false,
  });
  const dispatch = useDispatch();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setRoleState({
      ...roleState,
      [evt.target.name]: value,
    });
  };
  const handleSubmit = () => {
    if (update && id) {
      RoleDataService.updateRole(id, roleState);
      dispatch(roleSlice.actions.setupdateManagerRole(roleState));
    } else {
      const idnew = role.dataManagerRole.length + 1 + '';

      RoleDataService.addRole(idnew, { ...roleState, id: idnew });
      dispatch(
        roleSlice.actions.setaddManagerRole({ ...roleState, id: idnew })
      );
    }
  };
  return (
    <>
      <Form roleState={roleState} handleChange={handleChange} />
      <div className="controll-btn">
        <Link to="/manage/role">
          <Button
            type="button"
            buttonStyle="btn--warning--outline"
            buttonSize="btn--large"
          >
            Hủy bỏ
          </Button>
        </Link>
        <Link to="/manage/role" onClick={handleSubmit}>
          <Button
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
          >
            {!update ? 'Thêm ' : 'Cập nhật'}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default FormRole;
