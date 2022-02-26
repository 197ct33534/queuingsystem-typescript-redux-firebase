import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import ControllerEquip from './ControllerEquip';
import EquipDataService, { IEquip } from '../../firebase/equip';
import { useDispatch, useSelector } from 'react-redux';
import { EquipSelector } from '../../Redux/selector';
import equipSlice from './equipSlice';
import Pagination from '../../components/Pagination';
import paginationSlice from '../../components/paginationSlice';

const DeviceManager = () => {
  const Equip = useSelector(EquipSelector);
  const dispatch = useDispatch();
  const [equip, setEquip] = useState<IEquip[]>([]);
  // useEffect(() => {
  //   for (let i = 1; i <= 100; i++) {
  //     EquipDataService.addEquipment(i + '', {
  //       id: `KIO_${i}`,
  //       name: 'Kiosk',
  //       ipAddress: `192.168.1.${i}`,
  //       active: i % 2 === 0 ? true : false,
  //       connect: i % 3 === 0 ? true : false,
  //       service:
  //         'khám tim mạch,khám mắt,khám răng hàm mặt,khám tai mũi họng,khám hô hấp,khám tổng quát',
  //       Account: 'nghia',
  //       passWord: '123456',
  //       typeDevice: i % 7 === 0 ? 'Display counter' : 'Kiosk',
  //     });
  //   }
  // }, []);
  const getEquips = async () => {
    const data = await EquipDataService.getAllEquipment();
    const dataArray: IEquip[] = data.docs.map((doc): IEquip => {
      let db: any = doc.data();
      return { ...db };
    });
    dispatch(equipSlice.actions.saveDataEquip(dataArray));

    setEquip(dataArray);
  };

  let Datas = [...equip];
  if (Equip.selectedActive !== 'Tất cả') {
    if (Equip.selectedActive === 'Hoạt động') {
      Datas = Datas.filter((Equipment) => Equipment.active === true);
    } else {
      Datas = Datas.filter((Equipment) => Equipment.active === false);
    }
  }
  if (Equip.selectedConnect !== 'Tất cả') {
    if (Equip.selectedConnect === 'Kết nối') {
      Datas = Datas.filter((Equipment) => Equipment.connect === true);
    } else {
      Datas = Datas.filter((Equipment) => Equipment.connect === false);
    }
  }

  useEffect(() => {
    if (Equip.dataEquip.length === 0) {
      getEquips();
    } else if (Object.keys(Equip.dataEquipAdded).length) {
      const newdata = [Equip.dataEquipAdded, ...Equip.dataEquip];
      setEquip(newdata);
      dispatch(equipSlice.actions.saveDataEquip(newdata));
      dispatch(equipSlice.actions.resetAdded());
    } else {
      setEquip([...Equip.dataEquip]);
    }
  }, [Equip, dispatch]);
  useEffect(() => {
    dispatch(paginationSlice.actions.reset());
  }, [dispatch]);

  return (
    <div className="deviceManager">
      <ControllerEquip />
      <div className="warp-table">
        {Datas && (
          <Table
            datas={Datas}
            IsDetail
            pathDetail={'equipment/detail'}
            IsUpdate
            pathUpdate={'equipment/update'}
            tittleHeaders={[
              {
                display: 'Mã thiết bị',
                keycolum: 'id',
              },
              {
                display: 'Tên thiết bị',
                keycolum: 'name',
              },
              {
                display: 'Địa chỉ IP',
                keycolum: 'ipAddress',
              },
              {
                display: 'Trạng thái hoạt động',
                keycolum: 'active',
              },
              {
                display: 'Trạng thái kết nối',
                keycolum: 'connect',
              },
              {
                display: 'Dịch vụ sử dụng',
                keycolum: 'service',
              },
            ]}
            keySpecial={['active', 'connect']}
          />
        )}

        <Link to="/equipment/add">
          <div className="deviceManager-add">
            <div className="deviceManager-add_icon">+</div>
            Thêm thiết bị
          </div>
        </Link>
      </div>
      <Pagination totalDatas={Datas.length} />
    </div>
  );
};

export default DeviceManager;
