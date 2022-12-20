import React from 'react';
import { NavLink } from "react-router-dom";

const AboutNavbar = () => {
  return (
    <nav className="about-nav">
      <ul className="about-link">
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/about/history">Historical Highlights</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/about/philosophy">Philosophy, Vision, and Mission</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/about/goals">Goals and Core Values</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/about/institutional">Institutional Directions</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/about/services">Services and Facilities</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/about/paascu">PAASCU Accreditation</NavLink>
      </ul>
    </nav>
  )
}

export default AboutNavbar