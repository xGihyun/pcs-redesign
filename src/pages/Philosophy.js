import React from 'react'
import { philosophy } from '../components/PageDescription'

const Philosophy = () => {
  return (
    <>
      <div className="page-content-wrap">
        <div className="page-content philosophy">
          <ul>
            {philosophy.map((item) => {
              return (
                <li key={item.id}>
                  <h2>{item.title}</h2>
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

export default Philosophy