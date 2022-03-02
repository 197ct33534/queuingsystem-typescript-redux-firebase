import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import DropDownSelect from '../components/DropDownSelect';
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
}
const TeamplateFormAdd = (props: IProps) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { update } = props;
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
  const [fillState, setFillState] = useState<IEquip>({
    id: '',
    name: '',
    ipAddress: '',
    active: true,
    connect: true,
    service: '',
    Account: '',
    passWord: '',
    typeDevice: '',
  });
  const [selected, setSelected] = useState(
    update ? fillState['typeDevice'] : 'Chọn loại thiết bị'
  );
  // let ObjectKeyState: IEquip = {
  //   id: '',
  //   name: '',
  //   ipAddress: '',
  //   active: true,
  //   connect: true,
  //   service: '',
  //   Account: '',
  //   passWord: '',
  //   typeDevice: '',
  // };
  const getdatas = async (id: string) => {
    const temp = await EquipDataService.getEquip(id);
    const result: any = temp.data();
    console.log(result);

    setSelected(result['typeDevice']);
    setFillState(result);
  };
  console.log(fillState);

  useEffect(() => {
    if (update && id !== undefined) {
      getdatas(id);
    }
  }, []);

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
  const handleSubmitUpdate = async () => {
    await EquipDataService.updateEquip(fillState.id, fillState);

    dispatch(equipSlice.actions.updateNewAccount(fillState));
  };
  return (
    <>
      <div className="formAddDevice">
        <div className="formAddDevice-tittle">Thông tin thiết bị</div>
        <div className="grid-col-2 formAdd-warp">
          {FillInfors.map((fill, key) =>
            fill.type === 'input' ? (
              <div
                className={`formAdd-Item ${
                  key === FillInfors.length - 1 && key % 2 === 0
                    ? 'lastChildODD'
                    : ''
                }`}
                key={key}
              >
                <div className="formAdd-Item_title">
                  {fill.display}: <span>*</span>
                </div>
                {update && fill.state === 'service' ? (
                  <DropDownSelect
                    data={[...fillState[fill.state].split(',')]}
                    placeholder="Tất cả"
                  />
                ) : (
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
                    disabled={
                      update ? (fill.state === 'id' ? true : false) : false
                    }
                  />
                )}
              </div>
            ) : (
              <div
                className={`formAdd-Item ${
                  key === FillInfors.length - 1 && key % 2 === 0
                    ? 'lastChildODD'
                    : ''
                }`}
                key={key}
              >
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
        <Link
          to="/equipment"
          onClick={update ? handleSubmitUpdate : handleSubmit}
        >
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
