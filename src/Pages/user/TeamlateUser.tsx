import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../Assets/images/logo.png';
import { userSelector } from '../../Redux/selector';
import ForGotPass from './ForGotPass';
import Login from './Login';
interface IProps {
  children: React.ReactNode;
  pic: string;
  tittle?: string;
}
const TeamlateUser = (props: IProps) => {
  const { pic, tittle } = props;
  const user = useSelector(userSelector);

  return (
    <>
      <div className="login-left col l-5">
        <div className="login-logo">
          <img src={logo} alt="" />
        </div>
        {props.children}
      </div>
      <div className="login-right col l-7">
        <img src={pic} alt="" className="login-right_img" />
        <div className="login-right_title">
          <h4>{tittle ? 'Hệ thống' : ''}</h4>
          <h1>{tittle}</h1>
        </div>
      </div>
    </>
  );
};

export default TeamlateUser;
