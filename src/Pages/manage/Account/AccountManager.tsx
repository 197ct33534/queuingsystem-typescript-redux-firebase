import React, { useEffect, useState } from 'react';
import ControllerAccount from './ControllerAccount';
import AccountDataService, { Iaccount } from '../../../firebase/Account';
import { AccountSelector } from '../../../Redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import AccountSlice from './AccountSlice';
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Pagination';
import paginationSlice from '../../../components/paginationSlice';

const AccountManager = () => {
  const Account = useSelector(AccountSelector);
  const dispatch = useDispatch();
  const [account, setAccount] = useState<Iaccount[]>([
    Account.dataAccountAdded,
    ...Account.dataAccount,
  ]);

  const getAccount = async () => {
    const data = await AccountDataService.getAllAccount();
    const dataArray: Iaccount[] = data.docs.map((doc): Iaccount => {
      let db: any = doc.data();
      return { ...db };
    });

    setAccount(dataArray);
  };
  let Datas = [...account];
  if (Account.active !== 'Tất cả') {
    if (Account.active === 'Hoạt động') {
      Datas = Datas.filter((Account) => Account.active === true);
    } else {
      Datas = Datas.filter((Account) => Account.active === false);
    }
  }
  useEffect(() => {
    getAccount();
    dispatch(AccountSlice.actions.saveDataAccount(account));
  }, []);
  useEffect(() => {
    dispatch(paginationSlice.actions.reset());
  }, []);
  return (
    <div className="deviceManager">
      <ControllerAccount />
      <div className="warp-table">
        {Datas && (
          <Table
            datas={Datas}
            IsUpdate
            pathUpdate={'equipment/update'}
            tittleHeaders={[
              {
                display: 'Tên đăng nhập',
                keycolum: 'nameAccount',
              },
              {
                display: 'Họ tên',
                keycolum: 'nameUser',
              },
              {
                display: 'Số điện thoại',
                keycolum: 'phone',
              },
              {
                display: 'Email',
                keycolum: 'emailAccount',
              },
              {
                display: 'Vai trò',
                keycolum: 'jobAccount',
              },
              {
                display: 'trạng thái hoạt động',
                keycolum: 'active',
              },
            ]}
            keySpecial={['active']}
          />
        )}
        <Link to="/manage/account/add">
          <div className="deviceManager-add">
            <div className="deviceManager-add_icon">+</div>
            Thêm tài khoản
          </div>
        </Link>
      </div>
      <Pagination totalDatas={Datas.length} />
    </div>
  );
};

export default AccountManager;
