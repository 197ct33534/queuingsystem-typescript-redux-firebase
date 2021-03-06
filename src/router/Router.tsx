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
import { EquipSelector, RandomSelector } from '../Redux/selector';
import { useSelector } from 'react-redux';
import ServiceManager from '../Pages/service/ServiceManager';
import TeamplateFormService from '../Pages/service/TeamplateFormService';
import TeamplateFormDetailService from '../Pages/service/TeamplateFormDetailService';
import RandomManager from '../Pages/random/RandomManager';
import AddRandom from '../Pages/random/AddRandom';
import ReportManager from '../Pages/report/ReportManager';
import UserManager from '../Pages/manage/User/UserManager';
import RoleManager from '../Pages/manage/Role/RoleManager';

import FormRole from '../Pages/manage/Role/FormRole';

const Router = () => {
  const equipment = useSelector(EquipSelector);
  const Random = useSelector(RandomSelector);

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
            {
              path: 'detailRandom',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Chi tiết"
                        task={['Thiết bị', 'Danh sách cấp số', '']}
                        contentMain="Quản lý Cấp số"
                      />
                      <TeamplateFormDetail
                        classNameIcon={'bx bx-chevron-left-circle'}
                        tittlePath="Quay lại"
                        path={`/randomNumber`}
                        data={[
                          { display: 'Họ tên', key: 'nameCustomer' },
                          { display: 'Nguồn cấp', key: 'origin' },
                          { display: 'Tên dịch vụ', key: 'nameService' },
                          { display: 'Trạng thái', key: 'status' },
                          { display: 'Số thứ tự', key: 'id' },
                          { display: 'Số điện thoại', key: 'phone' },
                          { display: 'Thời gian cấp', key: 'fromDate' },
                          { display: 'Địa chỉ Email', key: 'email' },
                          { display: 'Hạn sử dụng', key: 'toDate' },
                        ]}
                        dataOrigin={Random.dataRandom}
                      />
                    </Teamplate>
                  ),
                },
              ],
            },
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
            {
              path: 'role',

              children: [
                {
                  path: 'add',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Thêm vai trò"
                        task={['Cài đặt hệ thống', ' Quản lý vai trò', '']}
                        contentMain="Danh sách vai trò"
                      />
                      <FormRole />
                    </Teamplate>
                  ),
                },
                {
                  path: 'update',
                  children: [
                    {
                      path: ':id',
                      element: (
                        <Teamplate>
                          <HeaderInfo
                            title="Cập nhật vai trò"
                            task={['Cài đặt hệ thống', 'Quản lý vai trò', '']}
                            contentMain="Danh sách vai trò"
                          />
                          <FormRole update />
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
                        title="Quản lý vai trò"
                        task={['Cài đặt hệ thống', '']}
                        contentMain="Danh sách vai trò"
                      />
                      <RoleManager />
                    </Teamplate>
                  ),
                },
              ],
            },
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
            {
              path: 'user',

              children: [
                // { path: 'add', element: <FormRole /> },
                // {
                //   path: 'update',
                //   children: [
                //     {
                //       path: ':id',
                //       element: (
                //         <FormRole
                //           // pathCancel="/service"
                //           // pathSubmit="/service"
                //           update
                //         />
                //       ),
                //     },
                //   ],
                // },
                {
                  path: '',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Quản lý tài khoản"
                        task={['Cài đặt hệ thống ', '']}
                        contentMain="Danh sách tài khoản"
                      />
                      <UserManager />
                    </Teamplate>
                  ),
                },
              ],
            },
          ],
        },
        // //service
        {
          path: '/service',
          children: [
            {
              path: 'add',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Thêm dịch vụ"
                    task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                    contentMain="Quản lý dịch vụ"
                  />
                  <TeamplateFormService
                    pathCancel="/service"
                    pathSubmit="/service"
                  />
                </Teamplate>
              ),
            },
            {
              path: 'update',
              children: [
                {
                  path: ':id',
                  element: (
                    <Teamplate>
                      <HeaderInfo
                        title="Cập nhật"
                        task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                        contentMain="Quản lý dịch vụ"
                      />
                      <TeamplateFormService
                        pathCancel="/service"
                        pathSubmit="/service"
                        update
                      />
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
                        title="Chi tiết"
                        task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                        contentMain="Quản lý dịch vụ"
                      />
                      <TeamplateFormDetailService />
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
                    title="Danh sách dịch vụ"
                    task={['Dịch vụ', '']}
                    contentMain="Quản lý dịch vụ"
                  />
                  <ServiceManager />
                </Teamplate>
              ),
            },
          ],
        }, // //randomNumber
        {
          path: '/randomNumber',
          children: [
            {
              path: 'add',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Cấp số mới"
                    task={['Cấp số', 'Danh sách cấp số', '']}
                    contentMain="Quản lý cấp số"
                  />
                  <AddRandom />
                </Teamplate>
              ),
            },
            {
              path: '',
              element: (
                <Teamplate>
                  <HeaderInfo
                    title="Danh sách cấp số"
                    task={['Cấp số', '']}
                    contentMain="Quản lý cấp số"
                  />
                  <RandomManager />
                </Teamplate>
              ),
            },
          ],
        },
        // ///announce
        {
          path: '/announce',
          element: (
            <Teamplate>
              <HeaderInfo title="Lập báo cáo" task={['Báo cáo', '']} />
              <ReportManager />
            </Teamplate>
          ),
        },
        {
          path: '*',
          element: '404 not found',
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
