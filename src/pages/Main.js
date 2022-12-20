import React from 'react';
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'

function Main() {
  return (
    <div className='container'>
      <Navbar />
      <div className="body-content">
        <Outlet />
      </div>
      <Footer />
    </div>
    
  );
}

export default Main;