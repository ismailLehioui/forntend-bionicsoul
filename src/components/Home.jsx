import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import Contact from '../pages/Contact';


function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Outlet />
            <Contact />
            <Footer />


        </div>
    )
}

export default Home