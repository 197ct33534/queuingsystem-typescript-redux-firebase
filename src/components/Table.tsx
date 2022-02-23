import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IEquip } from '../firebase/equip';
import { PaginationSelector } from '../Redux/selector';

// import FilterTable from "./FilterTable";
interface IPropsTable {
  datas: any[];

  tittleHeaders: { keycolum: string; display: string }[];
  keySpecial?: string[];

  IsDetail?: boolean;
  pathDetail?: string;
  IsUpdate?: boolean;
  pathUpdate?: string;

  filter?: boolean;
  onClickFilter?: () => void;
  // state,
  // setState,
  // dataOrigin,
}
const Table = (props: IPropsTable) => {
  const Paginate = useSelector(PaginationSelector);
  const {
    datas, // mãng chứa các object:[{}]
    IsDetail, // mãng có cột chi tiết hay không : true or false
    pathDetail, //nếu có chi tiết thì đường dẫn để xem chi tiết: string
    IsUpdate, // mãng có cột update hay không : true or false
    pathUpdate, //nếu có update thì đường dẫn để xem update: string
    tittleHeaders, // mãng chứa các tiêu đề : string[]

    filter, // lọc ở đầu cột
    onClickFilter, // hành động khi click vào đầu cột
    // state,
    // setState,
    // dataOrigin,
    keySpecial,
  } = props;
  const handleClickWatchAdd = (key: number) => {
    let element = document.getElementsByClassName('colum-service-nowatch')[key];
    element.classList.toggle('colum-service');
  };
  const indexOfLastRow = Paginate.currentPerPage * Paginate.numRowInPage;
  const indexOfFirstRow = indexOfLastRow - Paginate.numRowInPage;
  const dataslice = datas.slice(indexOfFirstRow, indexOfLastRow);

  //   const handleOnMouseLeave = (key) => {
  //     setState((prev) => ({ ...prev, [key]: false }));
  //   };
  return (
    <div className="table ">
      <table>
        <thead>
          <tr>
            {tittleHeaders.map((tittle, index) => (
              <th key={index}>
                {tittle.display}
                {/* {filter && (
                  <p
                    name={keyDatas[index]}
                    className="table-filter"
                    onClick={(e) => onClickFilter(keyDatas[index])}
                  >
                    <i className="bx bxs-up-arrow"></i>
                    <i className="bx bxs-down-arrow"></i>
                  </p>
                )} */}
                {/* {filter && state[keyDatas[index]] && (
                  <FilterTable
                    data={[
                      'Tất cả',
                      ...dataOrigin.map((item) => item[keyDatas[index]]),
                    ]}
                    state={state}
                    setState={setState}
                    keydata={keyDatas[index]}
                    handleOnMouseLeave={handleOnMouseLeave}
                  />
                )} */}
              </th>
            ))}
            {IsDetail && <th></th>}
            {IsUpdate && <th></th>}
          </tr>
        </thead>
        <tbody>
          {dataslice.map((data, key) => (
            <tr key={`row ${key}`}>
              {tittleHeaders.map((item, index) => (
                <th
                  key={index}
                  className={
                    item.keycolum === 'service'
                      ? 'colum-service colum-service-nowatch'
                      : ''
                  }
                >
                  {item.keycolum === 'active' ? (
                    data[item.keycolum as keyof typeof datas] === true ? (
                      <span className="active">{'Hoạt động'}</span>
                    ) : (
                      <span className="danger">{'Ngưng hoạt động'}</span>
                    )
                  ) : (
                    ''
                  )}
                  {item.keycolum === 'connect' ? (
                    data[item.keycolum as keyof typeof datas] === true ? (
                      <span className="active">{'Kết nối'}</span>
                    ) : (
                      <span className="danger">{'Mất kết nối'}</span>
                    )
                  ) : (
                    ''
                  )}

                  {data[item.keycolum as keyof typeof datas]}
                  {item.keycolum === 'service' && (
                    <>
                      <p
                        className="table-Link table-Link_watch"
                        onClick={() => handleClickWatchAdd(key)}
                      >
                        xem thêm
                      </p>
                    </>
                  )}
                </th>
              ))}
              {IsDetail && (
                <th>
                  <Link to={`/${pathDetail}/${data['id']}`}>
                    <span className="table-Link">Chi tiết</span>
                  </Link>
                </th>
              )}
              {IsUpdate && (
                <th>
                  <Link to={`/${pathUpdate}/${data['id']}`}>
                    <span className="table-Link">Cập nhật</span>
                  </Link>
                </th>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
