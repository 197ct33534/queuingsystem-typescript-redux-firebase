import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDown from '../../../components/DropDown';
import { AccountSelector } from '../../../Redux/selector';
import AccountSlice from './AccountSlice';

const ControllerAccount = () => {
  const Account = useSelector(AccountSelector);

  const dispatch = useDispatch();
  const [selectedActive, setSelectedActive] = useState(Account.active);
  useEffect(() => {
    dispatch(AccountSlice.actions.setSelectedActive(selectedActive));
  }, [selectedActive, dispatch]);
  return (
    <div className="controlDevice">
      <div className="controlDevice-warp">
        <div className="controlDevice-warp-item">
          <div>Tên vai trò</div>
          <DropDown
            up
            selected={selectedActive}
            setSelected={setSelectedActive}
            options={['Tất cả', 'Hoạt động', 'Ngừng hoạt động']}
          />
        </div>
      </div>
      <div className="controlDevice-warp-item controlDevice-warp-search">
        <div>Từ khóa</div>
        <div className="controlDevice-warp-item_search">
          <input type="text" placeholder="Nhập từ khóa " />
          <i className="bx bx-search-alt-2"></i>
        </div>
      </div>
    </div>
  );
};

export default ControllerAccount;
