import React from 'react'
import "./Services.css"
import ServicesNumber1 from "../../assets/ServicesNumber1.svg"
const Services = () => {
  return (
    <>
      <div className="services_container">
        <div className="services_heading">What We Do</div>
        <p className="service_paragraph">Finding the best approach for your needs. 
        Then, transform it into a delightfull interface, pleasure experience with impactful message.
        </p>
        <div className="services_first">
          <div className="services_line"></div>
            <img className='services_number1' alt='' src={ServicesNumber1} ></img>
            <div className="heading1">UI UX</div>
            <span className="heading2">DESIGNING</span>
            <span className="point">.</span>
          <div className="services_line"></div>
        </div>
                
      </div>
        
    </>
  )
}

export default Services
