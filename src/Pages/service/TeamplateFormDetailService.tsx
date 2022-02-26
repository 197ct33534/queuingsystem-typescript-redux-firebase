import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Back from '../../Assets/images/back.png';
import Pagination from '../../components/Pagination';
import paginationSlice from '../../components/paginationSlice';
import Table from '../../components/Table';
import { Iservice } from '../../firebase/Service';
import { ServiceSelector } from '../../Redux/selector';
import ControllerService from './ControllerService';

const TeamplateFormDetailService = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Service = useSelector(ServiceSelector);
  let data: Iservice | undefined = Service.dataService.find(
    (item: Iservice) => id === String(item.id)
  );
  let Datas = [];
  for (let i = 1; i <= 99; i++) {
    Datas.push({
      id: Number(id + '0000') + i,
      status: i % 2 ? 'Đang thực hiện' : i % 3 ? 'Đã hoàn thành' : 'Vắng',
    });
  }
  if (Service.selectedDetail !== 'Tất cả') {
    Datas = Datas.filter((item) => item.status === Service.selectedDetail);
  }
  useEffect(() => {
    dispatch(paginationSlice.actions.reset());
  }, [dispatch]);
  return (
    <div className="BodyDetailService">
      <div className="DetailService">
        <div className="DetailService-left">
          <div className="DetailService-left_tittle">Thông tin dịch vụ</div>
          <div className="DetailService-left_row">
            <div className="grid-col-3">
              <span className="DetailService-label">Mã dịch vụ:</span>
              <span className="DetailService-content">
                {data && data['id']}
              </span>
              <span className="DetailService-label">Tên dịch vụ:</span>
              <span className="DetailService-content">
                {data && data['nameService']}
              </span>
              <span className="DetailService-label">Mô tả:</span>
              <span className="DetailService-content">
                {data && data['descService']}
              </span>
            </div>
            <div className="DetailService-left_tittle">Quy tắc cấp số</div>
            <div className="grid-col-3 padding">
              <span className="DetailService-label">Tăng tự động:</span>
              <span className="DetailService-content">
                <span className="DetailService-number">
                  {data && data['fromIncrese']}
                </span>
                đến
                <span className="DetailService-number">
                  {data && data['toIncrese']}
                </span>
              </span>

              <span className="DetailService-label">Prefix:</span>
              <span className="DetailService-content">
                <span className="DetailService-number">
                  {data && data['prefix']}
                </span>
              </span>
            </div>
            <div className="DetailService-label margin">Reset mỗi ngày</div>
            <div className="DetailService-content margin">Ví dụ: 201-2001</div>
          </div>
        </div>
        <div className="DetailService-right">
          <div className="DetailService-control">
            <ControllerService detail />
          </div>
          <div className="DetailService-table">
            <Table
              datas={Datas}
              tittleHeaders={[
                { display: 'Số thứ tự', keycolum: 'id' },
                { display: 'Trạng thái', keycolum: 'status' },
              ]}
              // keyDatas={["id", "status"]}
            />
          </div>
          <Pagination totalDatas={Datas.length} />
        </div>
      </div>
      <div className="DetailService-Link">
        <Link to={`/service/update/${id}`}>
          <div className="deviceManager-add">
            <div className="deviceManager-add_icon">
              <i className="bx bxs-pencil"></i>
            </div>
            Cập nhật danh sách
          </div>
        </Link>
        <Link to="/service">
          <div className="deviceManager-add">
            <div className="deviceManager-add_icon">
              <img src={Back} alt="" />
            </div>
            Quay lại
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TeamplateFormDetailService;
