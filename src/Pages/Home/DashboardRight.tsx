import React from 'react';
import ChartCircle from './ChartCircle';
import equipment from '../../Assets/images/monitor.png';
import service from '../../Assets/images/equiment.png';
import random from '../../Assets/images/random.png';
import Datepicker from '../../components/Datepicker';

const DashboardRight = () => {
  const dataCircle = [
    {
      color: '#FF7506',
      color2: '#7E7D88',
      color3: '#EAEAEC',
      type: 1,
      active: 3799,
      noactive: 422,
      icon: equipment,
    },
    {
      color: '#4277FF',
      color2: '#7E7D88',
      color3: '#EAEAEC',

      type: 1,
      active: 221,
      noactive: 60,
      icon: service,
    },
    {
      color: '#35C75A',
      color2: '#7E7D88',
      color3: '#EAEAEC',
      color4: '#F178B6',
      type: 2,
      active: 4013,
      noactive: 468,
      skip: 32,
      icon: random,
    },
  ];
  const dataFunc = (arraydata: number[], arrayColor: string[]) => ({
    datasets: [
      {
        data: arraydata,
        backgroundColor: arrayColor,
        hoverBackgroundColor: arrayColor,
      },
    ],
  });
  const option = {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 85,
  };
  return (
    <div className="dashboard-right">
      <div className="dashboard-right-tittle">Tổng quan</div>

      {dataCircle.map((item, index) => (
        <div className="dashboard-right-chartItem" key={index}>
          <div className="dashboard-right-chartItem-left">
            <div className="dashboard-right-chartItem_circleWarp">
              <div className="dashboard-right-chartItem_circle1">
                <ChartCircle
                  option={option}
                  arraydata={[item.active, item.noactive]}
                  arraycolor={[item.color, item.color3]}
                  dataFunc={dataFunc}
                />
              </div>
              <div className="dashboard-right-chartItem_circle2">
                <ChartCircle
                  option={option}
                  arraydata={[item.noactive, item.active]}
                  arraycolor={[item.color2, item.color3]}
                  dataFunc={dataFunc}
                />
              </div>
              {item.type === 2 ? (
                <div className="dashboard-right-chartItem_circle3">
                  <ChartCircle
                    option={option}
                    arraydata={[32, item.noactive]}
                    arraycolor={['#F178B6', item.color3]}
                    dataFunc={dataFunc}
                  />
                </div>
              ) : (
                ''
              )}

              <div className="dashboard-right-chartItem_numPrecent">
                {Math.floor(
                  (item.active / (item.noactive + item.active)) * 100
                )}
                %
              </div>
            </div>
            <div className="dashboard-right-chartItem_quantilyWarp">
              <p>{item.active + item.noactive + (item.skip ? item.skip : 0)}</p>
              <div>
                <img src={item.icon} alt="" />
                <span style={{ color: item.color }}>Thiết bị</span>
              </div>
            </div>
          </div>

          <div className="dashboard-right-chartItem_listedWarp">
            <div className="dashboard-right-chartItem_listedItem">
              <div className="warpDot">
                <span style={{ backgroundColor: item.color }}></span>
                {item.type === 1 ? 'Đang hoạt động' : 'Đã sử dụng'}
              </div>

              <span style={{ color: item.color }}>{item.active}</span>
            </div>
            <div className="dashboard-right-chartItem_listedItem">
              <div className="warpDot">
                <span style={{ backgroundColor: item.color2 }}></span>{' '}
                {item.type === 1 ? 'Ngưng hoạt động' : 'Đang chờ'}
              </div>

              <span style={{ color: item.color }}>{item.noactive}</span>
            </div>
            {item.skip && (
              <div className="dashboard-right-chartItem_listedItem">
                <div className="warpDot">
                  <span style={{ backgroundColor: item.color4 }}></span> Bỏ qua
                </div>

                <span style={{ color: item.color }}>{item.skip}</span>
              </div>
            )}
          </div>
        </div>
      ))}
      <Datepicker />
    </div>
  );
};

export default DashboardRight;
