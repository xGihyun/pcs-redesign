import React from 'react'
import { NavLink } from "react-router-dom";
import { dropdownItems } from './NavItems'

const Dropdown = ({drop}) => {
  
  return (
    <ul className="dropdown">
      {dropdownItems[drop].map((item) => {
        return (
          <li key={item.id}>
            <NavLink className={({isActive}) => (isActive ? "active" : null)} to={item.path}>{item.title}</NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Dropdown