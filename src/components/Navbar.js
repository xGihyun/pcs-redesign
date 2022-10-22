import React from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import Dropdown from "./Dropdown";
import { navItems } from "./NavItems";

export default function Navbar(){

    //Check if user has scrolled
    const [scroll, scrolled] = useState(false)

    function shrinkNav(){
        if(window.scrollY > 20){
            scrolled(true)
        }
            else{
            scrolled(false)
        }
    }

  window.addEventListener("scroll", shrinkNav)

  //Check if user hovered
  const [dropdown, setDropdown] = useState(false)

  return (
    <div className="nav-container">
        <div className={scroll ? "nav-overlay scrolled" : "nav-overlay"} />
        <div className={scroll ? "nav-overlay2 scrolled" : "nav-overlay2"} />
        {dropdown && <div className="dropdown-overlay" />}
        
        <nav className={scroll ? "nav scrolled" : "nav"}>
            <div className="site-logo" />
            <ul className="nav-list">
                {navItems.map((item) => {
                    if(item.title === "Academics"){
                        return (
                            <li key={item.id} className="nav-link" 
                                onMouseEnter={() => setDropdown(true)} 
                                onMouseLeave={() => setDropdown(false)}
                            >
                                <NavLink to={item.path} className={({isActive}) => (isActive ? "active" : null)}>{item.title}</NavLink>
                                {dropdown && <Dropdown />}
                            </li>
                        )
                    }
                    return (
                        <li key={item.id} className="nav-link">
                            <NavLink to={item.path} className={({isActive}) => (isActive ? "active" : null)}>{item.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </div>
    
  )
}
