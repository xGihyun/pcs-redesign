import React from 'react'
import { gradeSchool } from '../components/AcademicsObjectives'

const GradeSchool = () => {
  return (
    <>
        <div className="page-content-wrap">
            <div className="page-content grade-school">
                <h2>The Grade School Department Objectives:</h2>\
                <ol className="point main">
                    {gradeSchool.map(text => {
                        return (
                            <>
                                <li key={text.id}>{text.main}</li>
                                <ol className="point sub">
                                    {text.sub.map(subs => {
                                        return (
                                            <li key={text.sub.indexOf(subs) + 1}>{subs}</li>
                                        )
                                    })}
                                </ol>
                            </>
                        )
                    })}
                </ol>
            </div>
        </div>
    </>
  )
}

export default GradeSchool