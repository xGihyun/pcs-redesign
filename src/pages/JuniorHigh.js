import React from 'react'
import { juniorHigh } from '../components/PageDescription'

const JuniorHigh = () => {
  return (
    <>
      <div className="page-content-wrap">
        <div className="page-content academics">
          <h2>High School education aims to develop its students in the following aspects:</h2>
          <ol className="item-main">
            {juniorHigh.map(text => {
              return (
                <li key={text.id}>
                  <span>{text.main}</span>
                  <ol className="item-sub">
                    {text.sub.map((subs, index) => {
                      return (
                        <li key={index}>{subs}</li>
                      )
                    })}
                  </ol>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default JuniorHigh