import React from 'react'
import "./Connect.css"
import LinkedinIcon from "../../assets/LinkedinIcon.svg"
import BehanceIcon from "../../assets/BehanceIcon.svg"
import InstagramIcon from "../../assets/InstagramIcon.svg"
import FacebookIcon from "../../assets/FacebookIcon.svg"
import EmailIcon from "../../assets/EmailIcon.svg"


const Connect = () => {
  return (
    
    <section id='connect'>
          <div className="connect_container">
        {/* <div className="connect_heading">
          Connect With Us
        </div> */}
        <ul>
          <li className="connect_heading">Contact With Us</li>
          <div className="connect_li">

          <li className='connect_icon' id='connect_linkedin'><a href="https://www.linkedin.com/company/protodev/" rel='noopener' target='_blank'><img className='connect_icon' src={LinkedinIcon} alt="" /></a></li>
          {/* <li className='connect_icon' id='connect_behance'><a href="https://www.behance.net/protodev" rel='noopener' target='_blank'><img className='connect_icon' src={BehanceIcon} alt="" /></a></li> */}
          <li className='connect_icon' id='connect_instagram'><a href="https://instagram.com/protodev.co?igshid=Yzg5MTU1MDY=" rel='noopener' target='_blank'><img className='connect_icon' src={InstagramIcon} alt="" /></a></li>
          <li className='connect_icon' id='connect_facebook'><a href="https://www.facebook.com/profile.php?id=100088868936092" rel='noopener' target='_blank'><img className='connect_icon' src={FacebookIcon} alt="" /></a></li>
          <li className='connect_icon' id='connect_email'><a href="https://mail.google.com/mail/u/0/#inbox?compose=info@protodev.co" rel='noopener' target='_blank'><img className='connect_icon' src={EmailIcon} alt="" /></a></li>
          </div>
        </ul>
        
      </div>
    </section>
      
        
    
  )
}

export default Connect
