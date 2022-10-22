import React from 'react'
import { Outlet } from 'react-router-dom'
import AcademicsNavbar from '../components/AcademicsNavbar'

const Academics = () => {
  return (
    <>
        <div className="heading">
            <div className="heading-img" />
            <div className="page-title">
                <h1>Academics</h1>
            </div>
        </div>
        <div className="page-content-wrap">
            <AcademicsNavbar />
            <Outlet />
        </div>
    </>
  )
}

export default Academics