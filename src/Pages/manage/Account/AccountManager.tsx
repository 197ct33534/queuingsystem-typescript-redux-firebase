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
  const [account, setAccount] = useState<Iaccount[]>([]);
  // useEffect(() => {
  //   for (let i = 12; i <= 200; i++) {
  //     AccountDataService.addAccount(i + '', {
  //       id: 1 + '',
  //       nameAccount: `tuyetnguyen@${i}`,
  //       nameUser: 'Nguyễn Văn A',
  //       phone: `0${912346513 + i}`,
  //       emailAccount: `tuyetnguyen@${i}@gmail.com`,
  //       jobAccount: i % 2 === 0 ? 'Kế toán' : i % 3 === 0 ? 'Quản lý' : 'Admin',
  //       active: i % 4 === 0 ? true : false,
  //     });
  //   }
  // });
  const getAccount = async () => {
    const data = await AccountDataService.getAllAccount();
    const dataArray: Iaccount[] = data.docs.map((doc): Iaccount => {
      let db: any = doc.data();
      return { ...db };
    });
    dispatch(AccountSlice.actions.saveDataAccount(dataArray));

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
    dispatch(paginationSlice.actions.reset());
  }, [dispatch]);
  useEffect(() => {
    if (Account.dataAccount.length === 0) {
      getAccount();
    } else if (Object.keys(Account.dataAccountAdded).length) {
      const newdata = [Account.dataAccountAdded, ...Account.dataAccount];
      setAccount(newdata);
      dispatch(AccountSlice.actions.saveDataAccount(newdata));
      dispatch(AccountSlice.actions.resetAdded());
    } else {
      setAccount([...Account.dataAccount]);
    }
  }, [Account, dispatch]);

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
