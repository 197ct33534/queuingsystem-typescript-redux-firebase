import React from 'react';

const ControllerReport = () => {
  return (
    <div className="controlDevice-warp-item">
      <div>Chọn thời gian</div>
      <div className="service-date-warp">
        <span className="service-date-item">
          <i className="bx bx-calendar"></i>
          <span>10/10/2021</span>
        </span>
        <i className="bx bx-caret-right service-date_iconRight"></i>
        <span className="service-date-item">
          <i className="bx bx-calendar"></i>
          <span>18/10/2021</span>
        </span>
      </div>
    </div>
  );
};

export default ControllerReport;
