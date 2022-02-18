import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/images/logo.png';
import { navLists } from '../Assets/fakeData/dashBoardData';
import Button from './Button';
import { useDispatch } from 'react-redux';
import userSlice from '../Pages/user/userSlice';

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // data.setLoggedIn(false);
    dispatch(
      // reset initalstate
      userSlice.actions.userLogoutSucc({
        isLogginSucc: false,
        idAcount: '',
        isLogginErr: true,
        forgotPass: false,
        IDemailAccount: '',
      })
    );
    navigate('/');
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="dashboard-list">
          {navLists.map((item) => (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'active dashboard-list_item' : 'dashboard-list_item '
              }
              key={`dashboard-${item.path}`}
            >
              <img src={item.icon} alt="" />
              <span className="dashboard-list_content">{item.display}</span>
              {item.display === 'Cài đặt hệ thống' ? (
                <i className="bx bx-dots-vertical-rounded dashboard-list_setting"></i>
              ) : (
                ''
              )}
              {/* {item.childrens && (
                <ul className="dashboard-list2">
                  {item.childrens.map((child) => (
                    <NavLink
                      to={child.path}
                      className={({ isActive }) => (isActive ? 'active ' : '')}
                      key={child.path}
                    >
                      <li key={child.display}>{child.display}</li>
                    </NavLink>
                  ))}
                </ul>
              )} */}
            </NavLink>
          ))}

          <div className="dashboard-logout" onClick={handleLogout}>
            {/* <Link to="/" onClick={() => handleLogout()} key="logout"> */}
            <Button
              buttonSize="btn--XL"
              type="button"
              buttonStyle="btn--warning--solid"
            >
              <i className="bx bx-log-out dashboard-logout_icon"></i>
              <span className="dashboard-logout_content">Đằng xuất</span>
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
