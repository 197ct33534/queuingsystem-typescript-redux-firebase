import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { userSelector } from '../../Redux/selector';
import Input from './Input';
import UserDataService from '../../firebase/user';
import userSlice from './userSlice';

const NewPass = () => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [isError, setisError] = useState(false);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (pass === rePass && pass.split('').join('').length > 0) {
      UserDataService.updateUser(user.IDemailAccount, { pass: pass });
      dispatch(userSlice.actions.userEmailAccout(''));
    } else {
      setisError(false);
    }
  };
  return (
    <div className="setpassword login-left_form">
      <h1>Đặt lại mật khẩu mới</h1>
      <Input
        type="password"
        classStyleLabel="login-left_title"
        classStyleInput={`login-left_input ${isError ? 'error' : ''}`}
        nameLabel="Mật khẩu "
        data={pass}
        setData={setPass}
      />
      <Input
        type="password"
        classStyleLabel="login-left_title"
        classStyleInput={`login-left_input ${isError ? 'error' : ''}`}
        nameLabel="Nhập lại mật khẩu"
        data={rePass}
        setData={setRePass}
      />

      {isError && (
        <div className="login-left_error">
          <i className="bx bx-error-circle"></i>
          <span>Mật khẩu không trùng khớp</span>
        </div>
      )}
      <div className="warp-controler-btn center">
        <Link to="/">
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--primary--solid"
            type="button"
            onClick={handleSubmit}
          >
            Xác nhận
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewPass;
