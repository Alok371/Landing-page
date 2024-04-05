import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Particle from './components/Particles/Particle';

const Layout = () => {
    return (
        <>

            {/* <Particle /> */}
            <Navbar style={{ zIndex: 10 }} />
            <Outlet style={{ zIndex: 12 }} />
            <Footer style={{ zIndex: 10 }} />

        </>
    );
}

export default Layout;
