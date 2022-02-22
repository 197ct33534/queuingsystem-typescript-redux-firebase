import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationSelector } from '../Redux/selector';
import paginationSlice from './paginationSlice';
interface IPropsPaginate {
  totalDatas: number;
}
const Pagination = (props: IPropsPaginate) => {
  const {
    totalDatas, //độ dài của mảng dữ liệu : number

    // currentPerPage, //số trang hiện tại  trong bảng : number
    // setCurrentPerPage, // hàm dùng để set lại current per page : function
    // maxPageNumberLimit, //số currentPerPage tối đa cần hiển thị : number
    // setmaxPageNumberLimit, // hàm dùng để set lại số currentPerPage tối đa : function
    // minPageNumberLimit, //số currentPerPage tối thiệu cần hiển thị : number
    // setminPageNumberLimit, // hàm dùng để set lại số currentPerPage tối thiểu : function
    // pageNumberLimit, // SỐ NUMBER giới hạn
  } = props;
  const dispatch = useDispatch();
  const paginate = useSelector(PaginationSelector);
  const numRowInPage = paginate.numRowInPage;
  const maxPageNumberLimit = paginate.maxPageNumberLimit;
  const minPageNumberLimit = paginate.minPageNumberLimit;
  const currentPerPage = paginate.currentPerPage;
  const pageNumberLimit = paginate.pageNumberLimit;
  let numPages = [];
  for (let i = 1; i <= Math.ceil(totalDatas / numRowInPage); i++) {
    numPages.push(i);
  }
  const handleClickNextPagine = () => {
    if (currentPerPage + 1 > Math.ceil(totalDatas / numRowInPage)) {
      return;
    }
    dispatch(paginationSlice.actions.setCurrentPerPage(currentPerPage + 1));
    if (currentPerPage + 1 > maxPageNumberLimit) {
      dispatch(
        paginationSlice.actions.setmaxPageNumberLimit(
          maxPageNumberLimit + pageNumberLimit
        )
      );
      dispatch(
        paginationSlice.actions.setminPageNumberLimit(
          minPageNumberLimit + pageNumberLimit
        )
      );
    }
  };

  const handleClickPrevPagine = () => {
    if (currentPerPage - 1 === 0) {
      return;
    }
    dispatch(paginationSlice.actions.setCurrentPerPage(currentPerPage - 1));
    if ((currentPerPage - 1) % pageNumberLimit === 0) {
      dispatch(
        paginationSlice.actions.setmaxPageNumberLimit(
          maxPageNumberLimit - pageNumberLimit
        )
      );
      dispatch(
        paginationSlice.actions.setminPageNumberLimit(
          minPageNumberLimit - pageNumberLimit
        )
      );
    }
  };
  const handleClickPagination = (num: number) => {
    dispatch(paginationSlice.actions.setCurrentPerPage(num));
  };

  let pageIncrementBtn = null;
  if (numPages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleClickNextPagine}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handleClickPrevPagine}> &hellip; </li>;
  }

  return (
    <div className="pagination">
      <ul className="pagination-warp">
        <li onClick={() => handleClickPrevPagine()}>
          <i className="bx bx-caret-left pagination-icon"></i>
        </li>
        {pageDecrementBtn}
        {numPages.map((num, key) =>
          num < maxPageNumberLimit + 1 && num > minPageNumberLimit ? (
            <li
              key={key}
              onClick={() => handleClickPagination(num)}
              className={`${currentPerPage === num ? 'active' : ''}`}
            >
              {num}
            </li>
          ) : (
            ''
          )
        )}
        {pageIncrementBtn}
        <li onClick={() => handleClickNextPagine()}>
          <i className="bx bx-caret-right pagination-icon"></i>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
