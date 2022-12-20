import React from 'react'
import { paascu } from '../components/PageDescription'

const Paascu = () => {
  return (
    <>
      <div className="page-content-wrap">
        <div className="page-content paascu">
          <ol>
            {paascu.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.text.map((text, index) => {
                      return (
                        <li key={index}>
                          <p>{text}</p>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Paascu;