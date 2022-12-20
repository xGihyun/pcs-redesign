import React from 'react'

const Footer = () => {
  return (
		<footer>
      <div className="info">
        <div className="location-contacts-wrap">
          {/* Location */}
          <div className="location-wrap">
            <div className="address">
              <h2>Pateros Catholic School</h2>
              <p>B. Morcilla St, Pateros, 1620 Metro Manila, Philippines</p>
            </div>
            <div className="map">
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9494751054976!2d121.06508531483951!3d14.54488198983792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8900303c535%3A0x83c4ca46850a39b3!2sPateros%20Catholic%20School!5e0!3m2!1sen!2sph!4v1664087741176!5m2!1sen!2sph" 
                      width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          {/* Contacts */}
          <div className="contacts">
            <div>
              <h2>Contact Details:</h2>
              <p className="number">(02) 642-6016; (02) 636-7274</p>
              <p>To request official School Forms send email to: </p>
              <h2 className="email">registrar@pcsian.edu.ph</h2>
            </div>
            <div className="qr-code-wrap">
              <div className="qr-code" />
            </div>
          </div>
        </div>
        <div className="pcs-members-wrap">
          <div className="pcs-members" />
        </div>
      </div>
		</footer>
	)
}

export default Footer