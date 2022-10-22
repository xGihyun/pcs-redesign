import React from 'react'
import videoBg from '../images/pcs.mp4'

const Hero = () => {

  return (
    <section className="hero">
        <video src={videoBg} autoPlay loop muted className="hero-bg" />
        <div className="hero-text">
            <h1>Quality Catholic Education</h1>
            <p>Through Faith, Hope, & Charity</p>
        </div>
    </section>
  )
}

export default Hero