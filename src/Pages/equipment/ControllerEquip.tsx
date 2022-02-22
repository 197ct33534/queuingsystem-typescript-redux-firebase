import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDown from '../../components/DropDown';
import { EquipSelector } from '../../Redux/selector';
import equipSlice from './equipSlice';

const ControllerEquip = () => {
  const Equip = useSelector(EquipSelector);
  const dispatch = useDispatch();
  const [selectedActive, setSelectedActive] = useState(Equip.selectedActive);
  const [selectedConnect, setSelectedConect] = useState(Equip.selectedConnect);

  useEffect(() => {
    dispatch(equipSlice.actions.setSelectedActive(selectedActive));
  }, [selectedActive, dispatch]);
  useEffect(() => {
    dispatch(equipSlice.actions.setSelectedConnect(selectedConnect));
  }, [selectedConnect, dispatch]);
  return (
    <div className="controlDevice">
      <div className="controlDevice-warp">
        <div className="controlDevice-warp-item">
          <div>Trạng thái hoạt động</div>
          <DropDown
            up
            selected={selectedActive}
            setSelected={setSelectedActive}
            options={['Tất cả', 'Hoạt động', 'Ngừng hoạt dộng']}
          />
        </div>
        <div className="controlDevice-warp-item">
          <div>Trạng thái kết nối</div>
          <DropDown
            up
            selected={selectedConnect}
            setSelected={setSelectedConect}
            options={['Tất cả', 'Kết nối', 'Mất kết nối']}
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

export default memo(ControllerEquip);
