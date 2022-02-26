import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import DropDown from '../../../components/DropDown';
import { Iaccount } from '../../../firebase/Account';
import AccountSlice from './AccountSlice';
import AccountDataService from '../../../firebase/Account';
interface IFill {
  state: string;
  display: string;
  type: 'input' | 'dropdown';
  value?: string[];
}

const AddAccount = () => {
  const dispatch = useDispatch();

  const FillInfors = [
    { state: 'nameUser', display: 'Họ tên', type: 'input' },

    {
      state: 'nameAccount',
      display: 'Tên đăng nhập',
      type: 'input',
    },
    {
      state: 'phone',
      display: 'Số điện thoại',
      type: 'input',
    },
    {
      state: 'passWord',
      display: 'Mật khẩu',
      type: 'input',
    },
    {
      state: 'emailAccount',
      display: 'Email',
      type: 'input',
    },
    {
      state: 'rePassWord',
      display: 'Nhập lại mật khẩu',
      type: 'input',
    },
    {
      state: 'typeDevice',
      display: 'Vai trò',
      type: 'dropdown',
      value: ['Kế toán', 'Quản lý', 'Admin'],
    },
    {
      state: 'typeDevice',
      display: 'Tình trạng',
      type: 'dropdown',
      value: ['Tất cả', 'Ngừng hoạt động', 'Hoạt động'],
    },
  ];
  const [selectedActive, setSelectedActive] = useState('Tất cả');
  const [selectedRole, setSelectedRole] = useState('Admin');
  // const ArryKeyState = FillInfors.map((Fill) => Fill.state);
  const ObjectKeyState: Iaccount = {
    id: '',
    nameAccount: '',
    nameUser: '',
    phone: '',
    emailAccount: '',
    jobAccount: '',
    active: true,
    rePassWord: '',
  };
  // ArryKeyState.map((key) => {
  //   return (ObjectKeyState[key as keyof IEquip] = '');
  // });

  const [fillState, setFillState] = useState(ObjectKeyState);

  useEffect(() => {
    let active = true;
    if (selectedActive === 'Ngưng hoạt động') {
      active = false;
    }
    setFillState((prev) => ({
      ...prev,
      active: active,
      jobAccount: selectedRole,
    }));
  }, [selectedActive, selectedRole]);
  console.log(fillState);

  const handleSubmit = async () => {
    // const newEquip: IEquip = fillState;
    // newEquip.active = true;
    // newEquip.connect = true;
    await AccountDataService.addAccount(fillState.id, fillState);
    dispatch(AccountSlice.actions.addNewAccount(fillState));
  };
  return (
    <>
      <div className="formAddDevice">
        <div className="formAddDevice-tittle">Thông tin thiết bị</div>
        <div className="grid-col-2 formAdd-warp">
          {FillInfors.map((fill, key) =>
            fill.type === 'input' ? (
              <div className="formAdd-Item" key={key}>
                <div className="formAdd-Item_title">
                  {fill.display}: <span>*</span>
                </div>
                {/* update & (fill.state === 'service') ? (
                  <DropDownSelect
                    data={[...fillState[fill.state].split(',')]}
                    placeholder="Tất cả"
                  />
                ) :  */}
                {
                  <input
                    required
                    type={
                      fill.display === 'Mật khẩu' ||
                      fill.display === 'Nhập lại mật khẩu'
                        ? 'password'
                        : 'text'
                    }
                    value={fillState[fill.state as keyof Iaccount] + ''}
                    onChange={(e) => {
                      setFillState((prev) => ({
                        ...prev,
                        [fill.state]: e.target.value,
                      }));
                    }}
                    placeholder={`Nhập ${fill.display.toLowerCase()}`}
                  />
                }
              </div>
            ) : (
              <div className="formAdd-Item " key={key}>
                <div className="formAdd-Item_title">
                  {fill.display}: <span>*</span>
                </div>
                <DropDown
                  up
                  selected={
                    fill.display === 'Vai trò' ? selectedActive : selectedRole
                  }
                  setSelected={
                    fill.display === 'Vai trò'
                      ? setSelectedActive
                      : setSelectedRole
                  }
                  options={fill.value !== undefined ? fill.value : []}
                />
              </div>
            )
          )}
        </div>

        <div className="formAddDevice-note">
          <span>*</span>
          Là trường thông tin bắt buộc
        </div>
      </div>
      <div className="controll-btn">
        <Link to="/manage/account">
          <Button
            type="button"
            buttonStyle="btn--warning--outline"
            buttonSize="btn--large"
          >
            Hủy bỏ
          </Button>
        </Link>
        <Link to="/manage/account" onClick={handleSubmit}>
          <Button
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
          >
            Thêm thiết bị
          </Button>
        </Link>
      </div>
    </>
  );
};

export default AddAccount;
