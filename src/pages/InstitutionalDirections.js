import React from 'react';
import { institution } from '../components/PageDescription';

const InstitutionalDirections = () => {
  return (
    <>
      <div className="page-content-wrap">
        <div className="page-content institutional-directions">
          <h2>Institutional Directions</h2>
          <p>The 6 Institutional Directions are in support of the school's process in sustaining the ongoing PAASCU accreditation.</p>
          <ol>
            {institution.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default InstitutionalDirections