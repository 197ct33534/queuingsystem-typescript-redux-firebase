import React, { useEffect, useState } from 'react';

import Input from './Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserDataService from '../../firebase/user';
import { ILogin } from './interface';
import { useNavigate } from 'react-router-dom';
import userSlice from './userSlice';
import { userSelector } from '../../Redux/selector';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<ILogin[]>([]);
  const [nameLoggin, setNameLoggin] = useState('');
  const [passLoggin, setPassLoggin] = useState('');
  const user = useSelector(userSelector);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    const dataArray: ILogin[] = data.docs.map((doc): ILogin => {
      let db: any = doc.data();
      return { ...db, id: doc.id };
    });
    setAccounts(dataArray);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void = (
    e
  ) => {
    e.preventDefault();
    if (nameLoggin !== '' && passLoggin !== '') {
      const result = accounts.find(
        (account) => account.name === nameLoggin && account.pass === passLoggin
      );
      if (result) {
        dispatch(userSlice.actions.userLogginSucc(result.id));
        navigate('/info');
      } else {
        dispatch(userSlice.actions.userLogginErr());
      }
    }
  };
  const handleClickForgotPass = () => {
    dispatch(userSlice.actions.userForgotPass());
  };
  return (
    <>
      <form action="" className="login-left_form">
        <Input
          classStyleLabel="login-left_title"
          classStyleInput={`login-left_input ${!user.isLogginErr && 'error'}`}
          nameLabel="Tên đăng nhập *"
          data={nameLoggin}
          setData={setNameLoggin}
          type="text"
        />
        <Input
          classStyleLabel="login-left_title"
          classStyleInput={`login-left_input ${!user.isLogginErr && 'error'}`}
          nameLabel="Mật khẩu *"
          data={passLoggin}
          setData={setPassLoggin}
          type="password"
        />
        <div className="login-left_error" onClick={handleClickForgotPass}>
          <i className="bx bx-error-circle"></i>
          <Link to="/user/forgotPass">
            <span>
              {!user.isLogginErr
                ? 'Sai mật khẩu hoặc tên đăng nhập'
                : 'Quên mật khẩu'}
            </span>
          </Link>
        </div>
        <div className="login-left_buttonLogIn">
          <Button
            onClick={handleSubmit}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
          >
            Đăng nhập
          </Button>
        </div>
        {!user.isLogginErr && (
          <Link to="/user/forgotPass">
            <p className="login-left_error forgot">Quên mật khẩu?</p>
          </Link>
        )}
      </form>
    </>
  );
};

export default Login;
