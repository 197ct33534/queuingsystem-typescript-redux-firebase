import React, { useEffect, useState } from 'react';
import Table from './Table';
import ControllerReport from './ControllerReport';
import RandomDataService, { Irandom } from '../../firebase/Random';
import { useDispatch, useSelector } from 'react-redux';
import randomSlice from '../random/randomSlice';
import { RandomSelector, ReportSelector } from '../../Redux/selector';
import paginationSlice from '../../components/paginationSlice';
import { Link } from 'react-router-dom';
import dowload from '../../Assets/images/dowload.png';
import Pagination from '../../components/Pagination';
import reportSlice from './reportSlice';

const ReportManager = () => {
  const dispatch = useDispatch();
  const [ran, setRandom] = useState<Irandom[]>([]);
  const Random = useSelector(RandomSelector);
  const Report = useSelector(ReportSelector);

  const onClickFilter = (key: string) => {
    switch (key) {
      case 'id':
        dispatch(reportSlice.actions.setid(true));
        break;
      case 'nameService':
        dispatch(reportSlice.actions.setnameService(true));
        break;
      case 'fromDate':
        dispatch(reportSlice.actions.setfromDate(true));
        break;
      case 'status':
        dispatch(reportSlice.actions.setstatus(true));
        break;
      case 'origin':
        dispatch(reportSlice.actions.setorigin(true));
        break;
      default:
        break;
    }
  };
  const getRandoms = async () => {
    const data = await RandomDataService.getAllRandom();
    const dataArray: Irandom[] = data.docs.map((doc): Irandom => {
      let db: any = doc.data();
      return { ...db };
    });
    dispatch(randomSlice.actions.saveDataRandom(dataArray));
    setRandom(dataArray);
  };
  let DATA = [...ran];
  if (Report.idValue !== 'Tất cả') {
    DATA = DATA.filter((item) => item.id === Report.idValue);
  }
  if (Report.nameServiceValue !== 'Tất cả') {
    DATA = DATA.filter((item) => item.nameService === Report.nameServiceValue);
  }
  if (Report.fromDateValue !== 'Tất cả') {
    DATA = DATA.filter((item) => item.fromDate === Report.fromDateValue);
  }
  if (Report.originValue !== 'Tất cả') {
    DATA = DATA.filter((item) => item.origin === Report.originValue);
  }
  if (Report.statusValue !== 'Tất cả') {
    DATA = DATA.filter((item) => item.status === Report.statusValue);
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
      <div className="service-warp">
        <ControllerReport />
        <div className="ReportManager-controller ">
          <Table
            onClickFilter={onClickFilter}
            datas={DATA}
            tittleHeaders={[
              { display: 'Số thứ tự', keycolum: 'id' },
              { display: 'Tên dịch vụ', keycolum: 'nameService' },
              { display: 'Thời gian cấp', keycolum: 'fromDate' },
              { display: 'Tình trạng', keycolum: 'status' },
              { display: 'Nguồn cấp', keycolum: 'origin' },
            ]}
            state={Report}
            dataOrigin={ran}
          />
          <Link to="">
            <div className="deviceManager-add">
              <img src={dowload} alt="" />
              Tải về
            </div>
          </Link>
        </div>
        <Pagination totalDatas={DATA.length} />
      </div>
    </>
  );
};

export default ReportManager;
