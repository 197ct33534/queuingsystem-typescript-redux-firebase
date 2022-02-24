import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { ServiceSelector } from '../../Redux/selector';
import SerDataService from '../../firebase/Service';
import ServiceSlice from './ServiceSlice';

interface Iprops {
  pathCancel: string;
  pathSubmit: string;
  update?: boolean;
}
const TeamplateFormService = (props: Iprops) => {
  const { pathCancel, pathSubmit, update } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const Service = useSelector(ServiceSelector);
  let data;
  if (update) {
    data = Service.dataService.find((item) => id === String(item['id']));
  }
  const handleSubmitUpdate = () => {
    const newObject = { ...infoService, ...checkBox };

    SerDataService.updateService(infoService.id, newObject);
    dispatch(ServiceSlice.actions.updateNewService(newObject));
  };
  const handleSubmitAdd = () => {
    const newObject = { ...infoService, ...checkBox };

    SerDataService.addService(infoService.id, newObject);
    dispatch(ServiceSlice.actions.addNewService(newObject));
  };
  const [infoService, setInfoService] = useState(
    data
      ? data
      : {
          id: '2001',
          nameService: 'Khám tim mạch',
          descService: 'mô tả...',
          fromIncrese: '0001',
          toIncrese: '9999',
          prefix: '0001',
          surfix: '0001',
          active: true,
        }
  );

  const [checkBox, stateCheckBox] = useState({
    resetCheckbox: data ? data['resetCheckbox'] : false,
    prefixCheckbox: data ? data['prefixCheckbox'] : false,
    surfixCheckbox: data ? data['surfixCheckbox'] : false,
    fromIncreseCheckbox: data ? data['fromIncreseCheckbox'] : false,
  });

  console.log('checkbox', checkBox);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    if (
      ['prefix', 'surfix', 'toIncrese', 'fromIncrese'].includes(evt.target.name)
    ) {
      stateCheckBox({
        ...checkBox,
        [evt.target.name + 'Checkbox']: value.length < 1 ? false : true,
      });
    }
    setInfoService({
      ...infoService,
      [evt.target.name]: value,
    });
  };

  function handleChangeCheckbox(evt: React.ChangeEvent<HTMLInputElement>) {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    stateCheckBox({
      ...checkBox,
      [evt.target.name]: value,
    });
  }
  return (
    <>
      <div className="AddService">
        <div className="AddService-title">Thông tin dịch vụ</div>
        <div className="grid-col-2 AddService-gap">
          <div className="AddService-inputItem">
            <div>
              Mã dịch vụ: <span>*</span>
            </div>
            <input
              type="text"
              value={infoService['id']}
              name="id"
              onChange={handleChange}
              disabled={update ? true : false}
            />
          </div>
          <div className="AddService-inputItem AddService-inputDesc">
            <div>Mô tả: </div>
            <input
              type="text"
              value={infoService['descService']}
              name="descService"
              onChange={handleChange}
            />
          </div>
          <div className="AddService-inputItem">
            <div>
              Tên dịch vụ: <span>*</span>
            </div>
            <input
              type="text"
              value={infoService['nameService']}
              name="nameService"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="AddService-title">Quy tắc cấp số</div>
        <div className="AddService-checkboxItem grid-col-7">
          <div className="AddService-checkboxItem-left">
            <input
              type="checkbox"
              className="AddService-checkbox"
              name="fromIncreseCheckbox"
              checked={checkBox.fromIncreseCheckbox}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="AddService-checkbox-autoIncrease">
              Tăng tự động từ:
            </label>
          </div>

          <div className="AddService-checkboxItem-right">
            <input
              type="text"
              value={infoService['fromIncrese']}
              className="AddService-inputNumber"
              name="fromIncrese"
              onChange={handleChange}
            />
            đến
            <input
              type="text"
              value={infoService['toIncrese']}
              className="AddService-inputNumber"
              name="toIncrese"
              onChange={handleChange}
            />
          </div>
          <div className="AddService-checkboxItem-left">
            <input
              type="checkbox"
              className="AddService-checkbox"
              name="prefixCheckbox"
              checked={checkBox.prefixCheckbox}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="AddService-checkbox-prefix">Prefix:</label>
          </div>
          <div className="AddService-checkboxItem-right">
            <input
              type="text"
              value={infoService['prefix']}
              className="AddService-inputNumber"
              name="prefix"
              onChange={handleChange}
            />
          </div>
          <div className="AddService-checkboxItem-left">
            <input
              type="checkbox"
              className="AddService-checkbox"
              name="surfixCheckbox"
              checked={checkBox.surfixCheckbox}
              onChange={handleChangeCheckbox}
            />

            <label htmlFor="AddService-checkbox-surfix">Surfix:</label>
          </div>
          <div className="AddService-checkboxItem-right">
            <input
              type="text"
              value={infoService['surfix']}
              className="AddService-inputNumber"
              name="surfix"
              onChange={handleChange}
            />
          </div>
          <div className="AddService-checkboxItem-left">
            <input
              type="checkbox"
              className="AddService-checkbox"
              name="resetCheckbox"
              checked={checkBox.resetCheckbox}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="AddService-checkbox-reset">Reset mỗi ngày:</label>
          </div>
        </div>
        <div className="formAddDevice-note">
          <span>*</span>
          Là trường thông tin bắt buộc
        </div>
      </div>
      <div className="controll-btn">
        <Link to={pathCancel}>
          <Button
            type="button"
            buttonStyle="btn--warning--outline"
            buttonSize="btn--large"
          >
            Hủy bỏ
          </Button>
        </Link>
        <Link
          to={pathSubmit}
          onClick={update ? handleSubmitUpdate : handleSubmitAdd}
        >
          <Button
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
          >
            {update ? 'Cập nhật' : 'Thêm dịch vụ'}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default TeamplateFormService;
