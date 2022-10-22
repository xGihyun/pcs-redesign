import React from 'react';
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'

function Main() {
    return (
      <>
        <Navbar />
        <div className="body-content">
            <Outlet />
        </div>
        <Footer />
      </>
      
    );
  }
  
  export default Main;