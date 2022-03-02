import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reportSlice from '../Pages/report/reportSlice';
import { ReportSelector } from '../Redux/selector';
interface IProps {
  data: string[];
  keydata: string;
  state: any;
}
const FilterTable = (props: IProps) => {
  const {
    data, //data : [{}]
    keydata,
    state,
    // setState,
    // handleOnMouseLeave,
  } = props;
  const datanew = data.filter(function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
  const Report = useSelector(ReportSelector);

  const dispatch = useDispatch();
  const handleOnMouseLeave = (key: string) => {
    switch (key) {
      case 'id':
        dispatch(reportSlice.actions.setid(false));
        break;
      case 'fromDate':
        dispatch(reportSlice.actions.setfromDate(false));
        break;
      case 'origin':
        dispatch(reportSlice.actions.setorigin(false));
        break;
      case 'status':
        dispatch(reportSlice.actions.setstatus(false));
        break;
      case 'nameService':
        dispatch(reportSlice.actions.setnameService(false));
        break;
      default:
        break;
    }
  };
  const handleClick = (item: string, key: string) => {
    dispatch(reportSlice.actions.reset());

    switch (key) {
      case 'id':
        dispatch(reportSlice.actions.setidValue(item));
        break;
      case 'fromDate':
        dispatch(reportSlice.actions.setfromDateValue(item));
        break;
      case 'origin':
        dispatch(reportSlice.actions.setoriginValue(item));
        break;
      case 'status':
        dispatch(reportSlice.actions.setstatusValue(item));
        break;
      case 'nameService':
        dispatch(reportSlice.actions.setnameServiceValue(item));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <ul
        className="FilterTable"
        id="scroll"
        onMouseLeave={() => handleOnMouseLeave(keydata)}
      >
        {datanew.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              handleClick(item, keydata);
            }}
            className={item === state[keydata + 'Value'] ? 'active' : ''}
          >
            {item}
            {keydata === 'nameService' && (
              <input
                type="checkbox"
                className="AddService-checkbox"
                checked={item === state[keydata + 'Value'] ? true : false}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterTable;
