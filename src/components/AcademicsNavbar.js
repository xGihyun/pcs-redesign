import React from "react"
import { NavLink } from "react-router-dom"

export default function HomeNavbar(){
  return (
    <nav className="academics-nav">
        <ul>
            <NavLink className="academics-link" to="/academics/grade-school" activeClassName="active">Grade School</NavLink>
            <NavLink className="academics-link" to="/academics/junior-high" activeClassName="active">Junior High</NavLink>
            <NavLink className="academics-link" to="/academics/senior-high" activeClassName="active">Senior High</NavLink>
        </ul>
    </nav>
  )
}
