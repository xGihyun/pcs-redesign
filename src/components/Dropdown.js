import React from 'react'
import { NavLink } from "react-router-dom";
import { academicsItems } from './NavItems'

const Dropdown = () => {
  return (
    <ul className="dropdown">
        {academicsItems.map((item) => {
            return (
                <li key={item.id}>
                    <NavLink to={item.path} className={item.className} activeClassName="active">{item.title}</NavLink>
                </li>
            )
        })}
    </ul>
  )
}

export default Dropdown