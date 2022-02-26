import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import ControllerService from './ControllerService';
import SerDataService, { Iservice } from '../../firebase/Service';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceSelector } from '../../Redux/selector';
import ServiceSlice from './ServiceSlice';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import paginationSlice from '../../components/paginationSlice';
const ServiceManager = () => {
  const Service = useSelector(ServiceSelector);
  const dispatch = useDispatch();
  const [ser, setService] = useState<Iservice[]>([]);

  const getServices = async () => {
    const data = await SerDataService.getAllService();
    const dataArray: Iservice[] = data.docs.map((doc): Iservice => {
      let db: any = doc.data();
      return { ...db };
    });
    dispatch(ServiceSlice.actions.saveDataService(dataArray));
    setService(dataArray);
  };
  // useEffect(() => {
  //   for (let i = 201; i <= 300; i++) {
  //     SerDataService.addService(i + '', {
  //       id: i + '',
  //       nameService: `Kiosk`,
  //       descService: 'Hoạt động ',
  //       active: i % 2 === 0 ? true : false,
  //       prefix: '0001',
  //       surfix: '0001',
  //       toIncrese: '9999',
  //       fromIncrese: '0001',
  //       resetCheckbox: true,
  //       surfixCheckbox: true,
  //       prefixCheckbox: true,
  //       fromIncreseCheckbox: true,
  //     });
  //   }
  // }, []);
  useEffect(() => {
    if (
      Service.dataService.length === 0 ||
      Object.keys(Service.dataServiceUpdated).length
    ) {
      getServices();
    } else if (Object.keys(Service.dataServiceAdded).length) {
      setService([Service.dataServiceAdded, ...Service.dataService]);
      dispatch(
        ServiceSlice.actions.saveDataService([
          Service.dataServiceAdded,
          ...Service.dataService,
        ])
      );
      dispatch(ServiceSlice.actions.resetAdded());
    } else {
      setService([...Service.dataService]);
    }
  }, []);
  useEffect(() => {
    dispatch(paginationSlice.actions.reset());
  }, [dispatch]);
  let Datas = [...ser];
  if (Service.active !== 'Tất cả') {
    if (Service.active === 'Hoạt động') {
      Datas = Datas.filter((item) => item.active === true);
    } else {
      Datas = Datas.filter((item) => item.active === false);
    }
  }
  useEffect(() => {
    dispatch(paginationSlice.actions.reset());
  }, [dispatch]);
  return (
    <>
      <ControllerService />
      <div className="warp-table">
        <Table
          datas={Datas}
          tittleHeaders={[
            { display: 'Mã dịch vụ', keycolum: 'id' },
            { display: 'Tên dịch vụ', keycolum: 'nameService' },
            { display: 'Mô tả', keycolum: 'descService' },
            { display: 'Trạng thái hoạt động', keycolum: 'active' },
          ]}
          IsUpdate
          pathUpdate={'service/update'}
          IsDetail
          pathDetail={'service/detail'}
        />
        <Link to="add">
          <div className="deviceManager-add">
            <div className="deviceManager-add_icon">+</div>
            Thêm dịch vụ
          </div>
        </Link>
      </div>
      <Pagination totalDatas={Datas.length} />
    </>
  );
};

export default ServiceManager;
