import React from 'react'
import Tilt from 'react-parallax-tilt'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'

const Programs = () => {

    const slides = [
        {
            image: '../images/gradeSchool.gif',
            class: 'grade'
        },
        {
            image: '../images/juniorHigh.gif',
            class: 'junior-high'
        },
        {
            image: '../images/seniorHigh.gif',
            class: 'senior-high'
        }
    ]

    return (
        <div className="programs-wrap">
            <div className="programs-bg" />
            <FadeInWhenVisible>
                <div className="programs">
                    {slides.map((slides) => {
                        return (
                            <Tilt scale={1.05} transitionSpeed={2500}>
                                <div className={`program ${slides.class}`} />
                            </Tilt>
                        )
                    })}
                </div> 
            </FadeInWhenVisible>
        </div>
    )
}

export default Programs;
