import React from 'react'
import './Footer.css'
import Linked from '../../../images/linkedin.png'
import Meta from '../../../images/face.png'
import TT from '../../../images/tiktok.png'
import Gram from '../../../images/instagram.png'
import YouTube from '../../../images/you.png'




const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="lets-connect"><b>Connect with me!</b></div>
      <div className="social-buttons">
            <button className="social-button" data-aos="fade-right" onClick={() => window.location.href='https://www.linkedin.com/in/nicholas-ackley/'}>
              <img src={Linked} alt="Facebook" />
            </button>
            <button className="social-button"data-aos="fade-up" onClick={() => window.location.href='https://www.tiktok.com'}>
                <img src={TT} alt="Instagram" />
            </button>
            <button className="social-button"data-aos="flip-up" onClick={() => window.location.href='https://www.facebook.com/'}>
                <img src={Meta} alt="LinkedIn" />
            </button>
            <button className="social-button"data-aos="fade-down" onClick={() => window.location.href='https://www.youtube.com/'}>
                <img src={YouTube} alt="TikTok" />
            </button>
            <button className="social-button"data-aos="fade-left" onClick={() => window.location.href='https://www.instagram.com'}>
                <img src={Gram} alt="YouTube" />
            </button>
        </div>
</div>
<div className="inspired-by">inspired by: @<i>Bagas Rahka</i></div>
</>
  )
}

export default Footer
