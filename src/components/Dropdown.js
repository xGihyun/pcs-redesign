import React from 'react'
import { NavLink } from "react-router-dom";
import { academicsItems } from './NavItems'

const Dropdown = () => {
  return (
    <ul className="dropdown">
        {academicsItems.map((item) => {
            return (
                <li key={item.id} className="dropdown-item">
                    <NavLink className={({isActive}) => (isActive ? "active" : null)} to={item.path}>{item.title}</NavLink>
                </li>
            )
        })}
    </ul>
  )
}

export default Dropdown