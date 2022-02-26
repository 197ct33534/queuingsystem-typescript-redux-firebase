import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import { RandomSelector } from '../../Redux/selector';
import ModeRandom from './ModeRandom';
import randomSlice from './randomSlice';

const AddRandom = () => {
  const nameSer = [
    'Khám tim mạch',
    'Khám sản - Phụ Khoa',
    'Khám răng hàm mặt',
    'Khám tai mũi họng',
    'Khám hô hấp',
    'Khám tổng quát',
  ];
  const dispatch = useDispatch();

  const Random = useSelector(RandomSelector);
  const [nameService, setNameService] = useState(Random.nameService);
  useEffect(() => {
    dispatch(randomSlice.actions.setnameService(nameService));
  }, [nameService, dispatch]);
  const handleClick = () => {
    dispatch(randomSlice.actions.setMode(!Random.mode));
  };
  return (
    <>
      <div className="main-Random">
        <div className="main-Random_heading">cấp số mới</div>
        <div className="main-Random_content">Dịch vụ khách hàng lựa chọn</div>
        <DropDown
          scroll
          up
          selected={nameService}
          setSelected={setNameService}
          options={nameSer}
        />
        <div className="controll-btn">
          <Link to="/randomNumber">
            <Button
              type="button"
              buttonStyle="btn--warning--outline"
              buttonSize="btn--small"
            >
              Hủy bỏ
            </Button>
          </Link>

          <Button
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--small"
            onClick={handleClick}
          >
            In số
          </Button>
        </div>
        {Random.mode && <ModeRandom />}
      </div>
    </>
  );
};

export default AddRandom;
