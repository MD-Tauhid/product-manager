import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import HeaderNav from '../components/HeaderNav/HeaderNav';

const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;