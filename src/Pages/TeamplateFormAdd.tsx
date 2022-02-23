import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import EquipDataService, { IEquip } from '../firebase/equip';
import equipSlice from './equipment/equipSlice';

interface IFill {
  state: string;
  display: string;
  type: 'input' | 'dropdown';
  value?: string[];
}
interface IProps {
  update?: boolean;
  data?: { typeDevice: string }[];
}
const TeamplateFormAdd = (props: IProps) => {
  const dispatch = useDispatch();
  const { update, data } = props;
  const FillInfors = [
    { state: 'id', display: 'Mã thiết bị', type: 'input' },
    {
      state: 'typeDevice',
      display: 'Loại thiết bị',
      type: 'dropdown',
      value: ['Kiosk', 'Display counter'],
    },
    {
      state: 'name',
      display: 'Tên thiết bị',
      type: 'input',
    },
    {
      state: 'Account',
      display: 'Tên đăng nhập',
      type: 'input',
    },
    {
      state: 'ipAddress',
      display: 'Địa chỉ IP',
      type: 'input',
    },
    {
      state: 'passWord',
      display: 'Mật khẩu',
      type: 'input',
    },
    {
      state: 'service',
      display: 'Dịch vụ sử dụng',
      type: 'input',
    },
  ];
  const [selected, setSelected] = useState(
    'Chọn loại thiết bị'
    // data ? data.typeDevice : 'Chọn loại thiết bị'
  );
  // const ArryKeyState = FillInfors.map((Fill) => Fill.state);
  const ObjectKeyState: IEquip = {
    id: '',
    name: '',
    ipAddress: '',
    active: true,
    connect: true,
    service: '',
    Account: '',
    passWord: '',
    typeDevice: '',
  };
  // ArryKeyState.map((key) => {
  //   return (ObjectKeyState[key as keyof IEquip] = '');
  // });

  const [fillState, setFillState] = useState(ObjectKeyState);

  useEffect(() => {
    setFillState((prev) => ({
      ...prev,
      typeDevice: selected,
    }));
  }, [selected]);

  const handleSubmit = async () => {
    const newEquip: IEquip = fillState;
    newEquip.active = true;
    newEquip.connect = true;
    await EquipDataService.addEquipment(newEquip.id, newEquip);
    dispatch(equipSlice.actions.addNewEquip(newEquip));
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
                    type={fill.display === 'Mật khẩu' ? 'password' : 'text'}
                    value={fillState[fill.state as keyof IEquip] + ''}
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
                  selected={selected}
                  setSelected={setSelected}
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
        <Link to="/equipment">
          <Button
            type="button"
            buttonStyle="btn--warning--outline"
            buttonSize="btn--large"
          >
            Hủy bỏ
          </Button>
        </Link>
        <Link to="/equipment" onClick={handleSubmit}>
          <Button
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
          >
            {!update ? 'Thêm thiết bị' : 'Cập nhật'}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default TeamplateFormAdd;
