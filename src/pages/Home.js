import React from 'react'
import Programs from '../components/Programs'
import Hero from '../components/Hero'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'

function Home() {

    return (
      <>
        {/* Hero section */}
        <Hero />
        {/* Body */}
        <div className="body-content">
            <div className="intro-wrap">
                <FadeInWhenVisible>
                    <div className="content-intro">
                        <h1>Creating a Brighter Future</h1>
                        <p>
                        Pateros Catholic School is more than just a school - 
                        it's a life experience. Our unique approach to learning enhances our students' 
                        education and helps them to explore their dynamic and diverse community.
                        Pateros Catholic School provides a rich learning environment that has helped countless students get ahead. 
                        Founded in 1961, the School is located in Pateros, Metro Manila and reflects the diverse backgrounds and cultures of the area. 
                        We are extremely proud of our students and staff, who are always eager to learn, create and grow together. 
                        Give us a call if you need more information.
                        </p>
                    </div>
                </FadeInWhenVisible>
            </div> 
            {/* Programs from grade school to senior high, should be animated */}
            <Programs />
        </div>
      </>
      
    );
  }
  
  export default Home;