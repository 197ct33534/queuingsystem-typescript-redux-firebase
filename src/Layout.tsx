import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
// import DashBoard from "./components/DashBoard";

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="grid wide">
        <div className="home row no-gutters">
          {/* <DashBoard /> */}
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
