import React from 'react'
import { gradeSchool } from '../components/PageDescription'

const GradeSchool = () => {
  return (
    <>
      <div className="page-content-wrap">
        <div className="page-content academics">
          <h2>The Grade School Department Objectives:</h2>
          <ol className="item-main">
            {gradeSchool.map((text)=> {
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

export default GradeSchool