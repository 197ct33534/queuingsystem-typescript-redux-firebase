import React from 'react';
import { useSelector } from 'react-redux';
import FilterTable from '../../components/FilterTable';

import { PaginationSelector } from '../../Redux/selector';

// import FilterTable from "./FilterTable";
interface IPropsTable {
  datas: any[];

  tittleHeaders: { keycolum: string; display: string }[];
  keySpecial?: string[];
  dataOrigin: any[];
  onClickFilter: (key: string) => void;
  state: any;
}
const Table = (props: IPropsTable) => {
  const Paginate = useSelector(PaginationSelector);
  const {
    datas, // mãng chứa các object:[{}]

    tittleHeaders, // mãng chứa các tiêu đề : string[]
    dataOrigin,
    onClickFilter, // hành động khi click vào đầu cột
    state,
  } = props;

  const indexOfLastRow = Paginate.currentPerPage * Paginate.numRowInPage;
  const indexOfFirstRow = indexOfLastRow - Paginate.numRowInPage;
  const dataslice = datas.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="table ">
      <table>
        <thead>
          <tr>
            {tittleHeaders.map((tittle, index) => (
              <th key={index}>
                {tittle.display}

                <p
                  className="table-filter"
                  onClick={() => onClickFilter(tittle.keycolum)}
                >
                  <i className="bx bxs-up-arrow"></i>
                  <i className="bx bxs-down-arrow"></i>
                </p>

                {state[tittle.keycolum] && (
                  <FilterTable
                    data={[
                      'Tất cả',
                      ...dataOrigin.map((item) => item[tittle.keycolum]),
                    ]}
                    state={state}
                    keydata={tittle.keycolum}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataslice.map((data, key) => (
            <tr key={`row ${key}`}>
              {tittleHeaders.map((item, index) => (
                <th key={index}>
                  {item.keycolum === 'active' &&
                    (data[item.keycolum as keyof typeof datas] === true ? (
                      <span className="active">{'Hoạt động'}</span>
                    ) : (
                      <span className="danger">{'Ngưng hoạt động'}</span>
                    ))}
                  {item.keycolum === 'connect' &&
                    (data[item.keycolum as keyof typeof datas] === true ? (
                      <span className="active">{'Kết nối'}</span>
                    ) : (
                      <span className="danger">{'Mất kết nối'}</span>
                    ))}
                  {/* service */}
                  {item.keycolum === 'status' &&
                    (['Vắng', 'Đã sử dụng'].includes(
                      data[item.keycolum as keyof typeof datas]
                    ) ? (
                      <span className="dis">
                        {data[item.keycolum as keyof typeof datas]}
                      </span>
                    ) : ['Đã hoàn thành'].includes(
                        data[item.keycolum as keyof typeof datas]
                      ) ? (
                      <span className="active">
                        {data[item.keycolum as keyof typeof datas]}
                      </span>
                    ) : ['Đang chờ', 'Đang thực hiện'].includes(
                        data[item.keycolum as keyof typeof datas]
                      ) ? (
                      <span className="doing">
                        {data[item.keycolum as keyof typeof datas]}
                      </span>
                    ) : (
                      <span className="danger">
                        {data[item.keycolum as keyof typeof datas]}
                      </span>
                    ))}
                  {item.keycolum !== 'status' &&
                    data[item.keycolum as keyof typeof datas]}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
