import React from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import Dropdown from "./Dropdown";
import { navItems } from "./NavItems";

export default function Navbar(){

  // Check if user has scrolled
  const [scroll, scrolled] = useState(false);

  // Check if the user hovered on the navbar itself
  const [hovered, setHovered] = useState(false);

  // Check if user hovered on any of the navbar elements
  const [dropdown, setDropdown] = useState(false);
  
  // Check which element user is hovering on the navbar
  const [hoveredElement, setHoveredElement] = useState(null);

  const shrinkNav = () => {
    window.scrollY > 20 ? scrolled(true) : scrolled(false);
  }

  const handleMouseEnter = (e) => {
    const hoveredOver = e.target.getAttribute("data-nav");

    setHoveredElement(hoveredOver);
    setDropdown(true);
  }

  window.addEventListener("scroll", shrinkNav);

  return (
    <div className="nav-container">
      <div className={scroll ? "nav-overlay scrolled" : "nav-overlay"} />
      <div className={scroll ? "nav-overlay2 scrolled" : "nav-overlay2"} />
      {hovered && <div className="dropdown-overlay" />}
      
      <nav className={scroll ? "nav scrolled" : "nav"}>
        <div className="site-logo" />
        <ul className="nav-list" 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {navItems.map((item) => {
            if(item.data === 'about' || item.data === 'academics'){
              return (
                <li key={item.id} className="nav-link" 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <NavLink to={item.path} className={({isActive}) => (isActive ? "active" : null)} data-nav={item.data}>{item.title}</NavLink>
                  {hoveredElement === item.data && dropdown && <Dropdown drop={hoveredElement} />}
                </li>
              )
            }
            return (
              <li key={item.id} className="nav-link">
                <NavLink to={item.path} className={({isActive}) => (isActive ? "active" : null)} data-nav={item.data}>{item.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
