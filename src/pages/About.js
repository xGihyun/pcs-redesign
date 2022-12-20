import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="heading">
        <div className="heading-img" />
        <div className="page-title">
          <h1>About</h1>
        </div>
      </div>
      <div className="page-content-wrap">
        <Outlet />
      </div>
    </>
  )
}

export default About;