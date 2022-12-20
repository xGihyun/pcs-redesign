import React from "react"
import { NavLink } from "react-router-dom"

export default function HomeNavbar(){
  return (
    <nav className="academics-nav">
      <ul className="academics-link">
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/academics/grade-school">Grade School</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/academics/junior-high">Junior High</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : null)} to="/academics/senior-high">Senior High</NavLink>
      </ul>
    </nav>
  )
}
