import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import DropDown from '../../components/DropDown';
import { data, lineOptions } from './LineOptionAndData';

const StatisticalChart = () => {
  const timer = new Date();
  const month = timer.getMonth() + 1;
  const year = timer.getFullYear();

  const [selected, setSelected] = useState('ngày');

  let yValues = [
    2400, 2700, 3000, 2400, 3600, 3900, 4200, 4300, 4400, 4500, 4400, 4300,
    3100, 3900, 3600, 2811, 3500, 3770, 3800, 3500, 4400, 4300, 4200, 3900,
    2900, 3400, 3500, 3770, 3800, 3500, 2800, 4200, 3900, 6000,
  ];
  let xValues = [];
  if (selected === 'ngày') {
    let A = [1, 13, 19, 31];
    for (let i = 1; i <= 35; i++) {
      if (A.includes(i)) {
        xValues.push(i + '');
      } else {
        xValues.push('');
      }
    }
  } else if (selected === 'tuần') {
    for (let i = 1; i <= 4; i++) {
      xValues.push('tuần ' + i);
    }
  } else {
    for (let i = 1; i <= 12; i++) {
      xValues.push(i + '');
    }
  }

  return (
    <div className="dashboard-center-chart">
      <div className="dashboard-center-chart_heading">
        <h1> Bảng thống kê theo {selected}</h1>
        <div className="dashboard-center-chart_warp">
          <span className="dashboard-center-chart_span">Xem theo</span>
          <DropDown
            selected={selected}
            setSelected={setSelected}
            options={['ngày', 'tuần', 'tháng']}
          />
        </div>
      </div>
      <div className="dashboard-center-chart_timer">
        Tháng {month}/{year}
      </div>
      <div className="dashboard-center-chart_warp">
        <Line data={data(xValues, yValues)} options={lineOptions} />
        <div className="dashboard-center-chart_quantily">sl</div>
        <div className="dashboard-center-chart_cross">/</div>
        <div className="dashboard-center-chart_day">ngày</div>
      </div>
    </div>
  );
};

export default StatisticalChart;
