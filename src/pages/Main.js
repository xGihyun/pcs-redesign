import React from 'react';
import Navbar from '../components/Navbar'

function Main() {
    return (
      <>
        <Navbar />
        <div className="container">
        
          <section className="header">
            <div className="header-img" />
            <div className="text-box">
              <h1>Quality Catholic Education</h1>
              <p>Through Faith, Hope, & Charity</p>
            </div>
          </section>
          <div className="body-content">
            <div className="intro-wrap">
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
            </div>
            <div className="programs-wrap">
              <div className="programs">
                <div className="program grade">
                  
                </div>
                <div className="program junior-high">
                  
                </div>
                <div className="program senior-high">
                  
                </div>
              </div>
            </div>
          </div>
          <section className="footer">
            <div className="info">
              <div className="location-contacts-wrap">
                <div className="location-wrap">
                  <div className="address">
                    <h2>Pateros Catholic School</h2>
                    <p>B. Morcilla St, Pateros, 1620 Metro Manila, Philippines</p>
                  </div>
                  <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9494751054976!2d121.06508531483951!3d14.54488198983792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8900303c535%3A0x83c4ca46850a39b3!2sPateros%20Catholic%20School!5e0!3m2!1sen!2sph!4v1664087741176!5m2!1sen!2sph" 
                            width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
                <div className="contacts">
                  <h2>Contact Details:</h2>
                  <p className="number">(02) 642-6016; (02) 636-7274</p>
                  <p>To request official School Forms send email to: </p>
                  <h2 className="email">registrar@pcsian.edu.ph</h2>
                </div>
              </div>
              <div className="pcs-members-wrap">
                <div className="pcs-members" />
              </div>
            </div>
          </section>
        </div>
        
      </>
      
    );
  }
  
  export default Main;