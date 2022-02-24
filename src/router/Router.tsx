import React from 'react';
import { useRoutes } from 'react-router-dom';
import ForGotPass from '../Pages/user/ForGotPass';
import Login from '../Pages/user/Login';
import TeamlateUser from '../Pages/user/TeamlateUser';
import img1 from '../Assets/images/pic1.png';
import img2 from '../Assets/images/Frame.png';
import NewPass from '../Pages/user/NewPass';
import Teamplate from '../Pages/Teamplate';
import Info from '../Pages/Home/Info';
import HeaderInfo from '../Pages/Home/HeaderInfo';
import DashboardMain from '../Pages/Home/DashboardMain';

import DeviceManager from '../Pages/equipment/DeviceManager';
import ProtectedRouters from '../ProtectedRouters';

import AccountManager from '../Pages/manage/Account/AccountManager';

import AddAccount from '../Pages/manage/Account/AddAccount';
import TeamplateFormAdd from '../Pages/TeamplateFormAdd';
import TeamplateFormDetail from '../Pages/equipment/TeamplateFormDetail';
import { EquipSelector } from '../Redux/selector';
import { useSelector } from 'react-redux';

// import PageLogin from '../Pages/user/PageLogin';
// import PageForgot from "../Pages/user/PageForgot";

// import Info from "../Pages/Home/Info";
// import ChartDashBoard from "../Pages/Home/ChartDashBoard";

// import DeviceManager from "../Pages/Device/DeviceManager";
// import AddDevice from "../Pages/Device/AddDevice";
// import DetailDevice from "../Pages/Device/DetailDevice";
// import UpdateDevice from "../Pages/Device/UpdateDevice";

// import ServiceManager from "../Pages/Service/ServiceManager";
// import AddService from "../Pages/Service/AddService";
// import DetailService from "../Pages/Service/DetailService";
// import ProtectedRouters from "../ProtectedRouters";

// import RandomManager from "../Pages/Random/RandomManager";
// import AddRandom from "../Pages/Random/AddRandom";
// import RandomDetail from "../Pages/Device/RandomDetail";

// import ReportManager from "../Pages/Report/ReportManager";

// import Role from "../Pages/manage/Role/Role";
// import FormRole from "../Pages/manage/Role/FormRole";

// import AccountManager from "../Pages/manage/Account/AccountManager";
// import AddAccount from "../Pages/manage/Account/AddAccount";

// import UserManager from "../Pages/manage/User/UserManager";
const Router = () => {
  const equipment = useSelector(EquipSelector);
  let routes = useRoutes([
    {
      path: '/',
      element: (
        <TeamlateUser pic={img1} tittle="Quản lí xếp hàng">
          <Login />
        </TeamlateUser>
      ),
    },
    // user
    {
      path: '/user',
      children: [
        {
          path: 'forgotPass',
          element: (
            <TeamlateUser pic={img2}>
              <ForGotPass />
            </TeamlateUser>
          ),
        },
        {
          path: 'newPass',
          element: (
            <TeamlateUser pic={img2}>
              <NewPass />
            </TeamlateUser>
          ),
        },
        // { path: "", element: <PageLogin /> },
      ],
    },
    {
      element: <ProtectedRouters />,
      children: [
        {
          path: '/dashboard',
          element: (
            <Teamplate>
              <HeaderInfo title="Thông tin cá nhân" bgcolorright="#fff" />
              <DashboardMain />
            </Teamplate>
          ),
        },
        {
          path: '/info',
          element: (
            <Teamplate>
              <Info />
            </Teamplate>
          ),
        }, // // equipment
        {
          path: '/equipment',
          children: [
            {
              path: 'add',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Thêm thiết bị"
                    task={['Thiết bị', 'Danh sách thiết bị', '']}
                    contentMain="Danh sách thiết bị"
                  />
                  <TeamplateFormAdd />
                </Teamplate>
              ),
            },
            // {
            //   path: 'detailRandom',
            //   children: [{ path: ':id', element: <RandomDetail /> }],
            // },
            {
              path: 'update',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Cập nhật thiết bị"
                        task={['Thiết bị', 'Danh sách thiết bị', '']}
                        contentMain="Quản lý thiết bị"
                      />
                      <TeamplateFormAdd update />
                    </Teamplate>
                  ),
                },
              ],
            },
            {
              path: 'detail',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Chi tiết thiết bị"
                        task={['Thiết bị', 'Danh sách thiết bị', '']}
                        contentMain="Quản lý thiết bị"
                      />
                      <TeamplateFormDetail
                        device
                        classNameIcon="bx bxs-pencil"
                        tittlePath="Cập nhật thiết bị"
                        path="/equipment/update"
                        data={[
                          { display: 'Mã thiết bị', key: 'id' },
                          { display: 'Loại thiết bị', key: 'typeDevice' },
                          { display: 'Tên thiết bị', key: 'name' },
                          { display: 'Tên đăng nhập', key: 'Account' },
                          { display: 'Địa chỉ IP', key: 'ipAddress' },
                          { display: 'Mật khẩu', key: 'passWord' },
                          { display: 'Dịch vụ sử dụng', key: 'service' },
                        ]}
                        dataOrigin={equipment.dataEquip}
                      />
                    </Teamplate>
                  ),
                },
              ],
            },
            {
              path: '',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Danh sách thiết bị"
                    task={['Thiết bị', '']}
                    contentMain="Danh sách thiết bị"
                  />
                  <DeviceManager />
                </Teamplate>
              ),
            },
          ],
        },
        {
          path: '/manage',
          children: [
            // {
            //   path: 'role',

            //   children: [
            //     { path: 'add', element: <FormRole /> },
            //     {
            //       path: 'update',
            //       children: [
            //         {
            //           path: ':id',
            //           element: (
            //             <FormRole
            //               // pathCancel="/service"
            //               // pathSubmit="/service"
            //               update
            //             />
            //           ),
            //         },
            //       ],
            //     },
            //     { path: '', element: <Role /> },
            //   ],
            // },
            {
              path: 'account',
              children: [
                {
                  path: 'add',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Quản lí tài khoản"
                        task={['Cài đặt hệ thống ', 'Quản lý tài khoản', '']}
                        contentMain="Quản lí tài khoản"
                      />
                      <AddAccount />
                    </Teamplate>
                  ),
                },
                {
                  path: '',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Quản lý tài khoản"
                        task={['Cài đặt hệ thống', '']}
                        contentMain="Danh sách tài khoản"
                      />
                      <AccountManager />
                    </Teamplate>
                  ),
                },
              ],
            },
            // { path: '', element: <Role /> },
            // {
            //   path: 'user',

            //   children: [
            //     { path: 'add', element: <FormRole /> },
            //     {
            //       path: 'update',
            //       children: [
            //         {
            //           path: ':id',
            //           element: (
            //             <FormRole
            //               // pathCancel="/service"
            //               // pathSubmit="/service"
            //               update
            //             />
            //           ),
            //         },
            //       ],
            //     },
            //     { path: '', element: <UserManager /> },
            //   ],
            // },
          ],
        },
        {
          path: '*',
          element: '404 not found',
        },
      ],
    },

    // //service
    // {
    //   path: '/service',
    //   children: [
    //     {
    //       path: 'add',
    //       element: <AddService pathCancel="/service" pathSubmit="/service" />,
    //     },
    //     {
    //       path: 'update',
    //       children: [
    //         {
    //           path: ':id',
    //           element: (
    //             <AddService
    //               pathCancel="/service"
    //               pathSubmit="/service"
    //               update
    //             />
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: 'detail',
    //       children: [{ path: ':id', element: <DetailService /> }],
    //     },
    //     { path: '', element: <ServiceManager /> },
    //   ],
    // },
    // //randomNumber
    // {
    //   path: '/randomNumber',
    //   children: [
    //     { path: 'add', element: <AddRandom /> },
    //     { path: '', element: <RandomManager /> },
    //   ],
    // },
    // ///announce
    // {
    //   path: '/announce',
    //   element: <ReportManager />,
    // },
    // //manager
  ]);
  return routes;
};

export default Router;
