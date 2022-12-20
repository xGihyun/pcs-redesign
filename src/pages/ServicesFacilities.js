import React from 'react'
import { services } from '../components/PageDescription'

const ServicesFacilities = () => {
  return (
    <>
      <div className="page-content-wrap">
        <div className="page-content services-facilities">
          <h2>Services & Facilities</h2>
          <ul>
            {services.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ServicesFacilities