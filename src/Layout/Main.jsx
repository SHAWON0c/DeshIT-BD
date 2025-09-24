import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Banner from '../Pages/Shared/Banner/Banner';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
  return (
    <div className="relative">
        <Navbar />
        <Banner />
        <Outlet />
        <Footer />
      </div>

  );
};

export default Main;
