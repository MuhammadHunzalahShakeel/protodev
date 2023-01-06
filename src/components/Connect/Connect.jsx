import React from 'react'
import "./Connect.css"
import LinkedinIcon from "../../assets/LinkedinIcon.svg"
import BehanceIcon from "../../assets/BehanceIcon.svg"
import InstagramIcon from "../../assets/InstagramIcon.svg"
import EmailIcon from "../../assets/EmailIcon.svg"


const Connect = () => {
  return (
    <>
      <div className="connect_container">
        {/* <div className="connect_heading">
          Connect With Us
        </div> */}
        <ul>
          <li className="connect_heading">Connect With Us</li>
          <li className='connect_icon' id='connect_linkedin'><img src={LinkedinIcon} alt="" /></li>
          <li className='connect_icon' id='connect_behance'><img src={BehanceIcon} alt="" /></li>
          <li className='connect_icon' id='connect_instagram'><img src={InstagramIcon} alt="" /></li>
          <li className='connect_icon' id='connect_email'><img src={EmailIcon} alt="" /></li>
        </ul>
        
      </div>
        
    </>
  )
}

export default Connect
