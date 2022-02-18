import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserDataService from '../../firebase/user';
import Button from '../../components/Button';
import Input from './Input';
import { ILogin } from './interface';
import { useDispatch } from 'react-redux';
import userSlice from './userSlice';

const ForGotPass: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isError, setisError] = useState(false);

  const [users, setUsers] = useState<ILogin[]>([]);
  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    const dataArray: ILogin[] = data.docs.map((doc): ILogin => {
      let db: any = doc.data();
      return { ...db, id: doc.id };
    });
    setUsers(dataArray);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = users.find((user) => user.email === email);

    // thành công
    if (result) {
      dispatch(userSlice.actions.userEmailAccout(result.id));
    } else {
      e.preventDefault();
      dispatch(userSlice.actions.userEmailAccout(''));
      setisError(true);
    }
  };
  return (
    <>
      <div className="setpassword login-left_form">
        <h1>Đặt lại mật khẩu</h1>
        <Input
          classStyleLabel="login-left_title"
          classStyleInput={`login-left_input ${isError ? 'error' : ''}`}
          nameLabel=" Vui lòng nhập email để đặt lại mật khẩu của bạn *"
          data={email}
          setData={setEmail}
          type="text"
        />
        {isError && (
          <div className="login-left_error">
            <i className="bx bx-error-circle"></i>
            <span>Tài khoản không hợp lệ</span>
          </div>
        )}
        <div className="warp-controler-btn">
          <Link to="/">
            <Button
              type="button"
              buttonSize="btn--large"
              buttonStyle="btn--primary--outline"
            >
              Hủy
            </Button>
          </Link>
          <Link to="/user/newPass">
            <Button
              type="button"
              buttonSize="btn--large"
              buttonStyle="btn--primary--solid"
              onClick={handleSubmit}
            >
              Tiếp tục
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForGotPass;
