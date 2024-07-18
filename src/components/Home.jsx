import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';


function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Outlet />
            <Footer />


        </div>
    )
}

export default Home