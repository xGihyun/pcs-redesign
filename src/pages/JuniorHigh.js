import React from 'react'
import { juniorHigh } from '../components/AcademicsObjectives'

const JuniorHigh = () => {
  return (
    <>
        <div className="page-content-wrap">
            <div className="page-content grade-school">
                <h2>High School education to develop its students in the following aspects:</h2>\
                <ol className="point main">
                    {juniorHigh.map(text => {
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

export default JuniorHigh