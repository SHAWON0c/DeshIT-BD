
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Banner from '../Pages/Shared/Banner/Banner';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;