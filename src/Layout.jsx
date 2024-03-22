import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Particle from './components/Particles/Particle';

const Layout = () => {
    return (
        <>

            <Navbar />
            {/* <Particle /> */}
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
