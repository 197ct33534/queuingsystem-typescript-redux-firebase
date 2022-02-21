import React from 'react';
import StatisticalChart from './StatisticalChart';
// import Chart2 from "../../components/Chart2";

const DashboardCenter = () => {
  const statisticals = [
    {
      iconclass: 'bx bx-calendar',
      tittle: 'Số thứ tự đã cấp',
      num: '4.221',
      numLittle: '32,41%',
      arrowclass: 'bx bx-up-arrow-alt',
    },
    {
      iconclass: 'bx bx-calendar-check',
      tittle: 'Số thứ tự đã sử dụng',
      num: '3.721',
      numLittle: '32,41%',
      arrowclass: 'bx bx-down-arrow-alt',
      down: true,
    },
    {
      iconclass: 'bx bx-user-voice',
      tittle: 'Số thứ tự đang chờ',
      num: '468',
      numLittle: '56,41%',
      arrowclass: 'bx bx-up-arrow-alt',
    },
    {
      iconclass: 'bx bx-bookmark-heart',
      tittle: 'Số thứ tự đã bỏ qua',
      num: '32',
      numLittle: '22,41%',
      arrowclass: 'bx bx-down-arrow-alt',
      down: true,
    },
  ];
  return (
    <div className="dashboard-center">
      <h1 className="dashboard-center_title">Biểu đồ cấp số</h1>

      <div className="dashboard-center-statistical ">
        {statisticals.map((item, key) => (
          <div className="statistical-card" key={key}>
            <div className="statistical-card_heding">
              <span
                className={`statistical-card_icon statistical-card_icon${key}`}
              >
                <i className={item.iconclass}></i>
              </span>
              <span className="statistical-card_content">{item.tittle}</span>
            </div>
            <div className="statistical-card_foot">
              <span className="statistical-card_foot_number">{item.num}</span>
              <span
                className={`statistical-card_foot_growth ${
                  item.down ? 'down' : ''
                }`}
              >
                <i className={item.arrowclass}></i>
                {item.numLittle}
              </span>
            </div>
          </div>
        ))}
      </div>
      <StatisticalChart />
      {/* <Chart2 /> */}
    </div>
  );
};

export default DashboardCenter;
