import React from "react";
import { useState } from "react";

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

  return (
    <div className="nav-container">
        <div className={scroll ? "nav-overlay scrolled" : "nav-overlay"} />
        <nav className={scroll ? "nav scrolled" : "nav"}>
            <div className="site-logo">
                <a href="/" className="nav-link" />
            </div>
            <ul>
                <a href="/home" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About PCS</a>
                <a href="/quality" className="nav-link">Quality Series</a>
                <a href="/history" className="nav-link">History</a>
            </ul>
        </nav>
    </div>
    
  )
}
