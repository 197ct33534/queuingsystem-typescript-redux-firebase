import React from 'react';
import DashboardCenter from './DashboardCenter';
import DashboardRight from './DashboardRight';

const DashboardMain = () => {
  return (
    <div className="mainHome-wapper">
      <DashboardCenter />
      <DashboardRight />
    </div>
  );
};

export default DashboardMain;
