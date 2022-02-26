import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import { Irandom } from '../../firebase/Random';
import { RandomSelector } from '../../Redux/selector';
import Controller from './Controller';
import RandomDataService from '../../firebase/Random';
import randomSlice from './randomSlice';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import paginationSlice from '../../components/paginationSlice';
const RandomManager = () => {
  const Random = useSelector(RandomSelector);
  const dispatch = useDispatch();
  const [ran, setRandom] = useState<Irandom[]>([]);
  // useEffect(() => {
  //   const nameCus = [
  //     'Lê Huỳnh Ái Vân',
  //     'Huỳnh Ái Vân',
  //     'Lê Ái Vân',
  //     'Nguyễn Ái Vân',
  //     'Trần Thị Ái Vân',
  //     'Lê Huỳnh Nghĩa',
  //     'Lê Huỳnh Đức',
  //     'Phạm Văn Mạnh',
  //     'Lê thị Cẩm Tiên',
  //   ];
  //   const nameSer = [
  //     'Khám tim mạch',
  //     'Khám sản - Phụ Khoa',
  //     'Khám răng hàm mặt',
  //     'Khám tai mũi họng',
  //     'Khám hô hấp',
  //     'Khám tổng quát',
  //   ];
  //   const statusRan = ['Đang chờ', 'Đã sử dụng', 'Bỏ qua'];
  //   function get_random(list: string[]) {
  //     return list[Math.floor(Math.random() * list.length)];
  //   }
  //   for (let i = 2010001; i < 2010099; i++) {
  //     RandomDataService.addRandom(i + '', {
  //       id: i + '',
  //       nameCustomer: get_random(nameCus),
  //       nameService: get_random(nameSer),
  //       fromDate: '14:35 - 07/11/2021',
  //       toDate: '14:35 - 12/11/2021',
  //       status: get_random(statusRan),
  //       phone: '0948523623',
  //       email: 'nghia.197ct33534@vanlanguni.vn',
  //       origin: i % 2 === 0 ? 'Kiosk' : 'Hệ thống',
  //     });
  //   }
  // }, []);
  const getRandoms = async () => {
    const data = await RandomDataService.getAllRandom();
    const dataArray: Irandom[] = data.docs.map((doc): Irandom => {
      let db: any = doc.data();
      return { ...db };
    });
    dispatch(randomSlice.actions.saveDataRandom(dataArray));
    setRandom(dataArray);
  };
  let Datas = [...ran];
  //filter status
  if (Random.selectedStatus !== 'Tất cả') {
    Datas = Datas.filter((item) => item.status === Random.selectedStatus);
  }

  //filter origin
  if (Random.selectedOrigin !== 'Tất cả') {
    Datas = Datas.filter((item) => item.origin === Random.selectedOrigin);
  }
  //filter nameService
  if (Random.selectedService !== 'Tất cả') {
    Datas = Datas.filter((item) => item.nameService === Random.selectedService);
  }
  useEffect(() => {
    if (Random.dataRandom.length === 0) {
      getRandoms();
    } else {
      setRandom(Random.dataRandom);
    }
  }, [getRandoms, Random]);
  useEffect(() => {
    dispatch(paginationSlice.actions.reset());
  }, [dispatch]);
  return (
    <>
      <Controller />
      <div className="warp-table">
        <Table
          datas={Datas}
          IsDetail
          pathDetail={'equipment/detailRandom'}
          tittleHeaders={[
            {
              display: 'STT',
              keycolum: 'id',
            },
            {
              display: 'Tên khách hàng',
              keycolum: 'nameCustomer',
            },
            {
              display: 'Tên dịch vụ',
              keycolum: 'nameService',
            },
            {
              display: 'Thời gian cấp',
              keycolum: 'fromDate',
            },
            {
              display: 'Hạn sử dụng',
              keycolum: 'toDate',
            },
            {
              display: 'Trạng thái',
              keycolum: 'status',
            },
            {
              display: 'Nguồn cấp',
              keycolum: 'origin',
            },
          ]}
        />
        <Link to="add">
          <div className="deviceManager-add">
            <div className="deviceManager-add_icon">+</div>
            Cấp số mới
          </div>
        </Link>
      </div>
      <Pagination totalDatas={Datas.length} />
    </>
  );
};

export default RandomManager;
