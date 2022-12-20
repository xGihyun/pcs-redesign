import React from 'react'
import Tilt from 'react-parallax-tilt'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'
import gradeSchool from '../images/gradeSchool.gif'
import juniorHigh from '../images/juniorHigh.gif'
import seniorHigh from '../images/seniorHigh.gif'
import pcs from '../images/pcs.jpg'
import { Link } from 'react-router-dom'

const Programs = () => {

    const slides = [
      {
        id: 1,
        image: gradeSchool,
        path: '/academics/grade-school'
      },
      {
        id: 2,
        image: juniorHigh,
        path: '/academics/junior-high'
      },
      {
        id: 3,
        image: seniorHigh,
        path: '/academics/senior-high'
      }
    ]

    return (
        <div className="programs-wrap">
          <img src={pcs} alt='pcs' className='programs-bg' />
          
            <div className="programs">
              {slides.map((slides) => {
                return (
                  <Tilt key={slides.id} scale={1.05} transitionSpeed={2500}>
                    <Link to={slides.path}>
                      <img src={slides.image} alt='pcs' className='program' />
                    </Link>
                  </Tilt>
                )
              })}
            </div> 
          
        </div>
    )
}

export default Programs;
