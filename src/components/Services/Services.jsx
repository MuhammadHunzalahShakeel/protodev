import React from 'react'
import "./Services.css"
import ServicesNumber1 from "../../assets/ServicesNumber1.svg"
import ServicesNumber2 from "../../assets/ServicesNumber2.svg"
import ServicesNumber3 from "../../assets/ServicesNumber3.svg"
import ServicesNumber4 from "../../assets/ServicesNumber4.svg"
import ServicesNumber5 from "../../assets/ServicesNumber5.svg"
import ServicesArrowButton from "../../assets/ServicesArrowButton.svg"
const Services = () => {
  return (
    <>
      <div className="services_container">
        <div className="services_heading">What We Do</div>
        <p className="service_paragraph">Finding the best approach for your needs. 
        Then, transform it into a delightfull interface, pleasure experience with impactful message.
        </p>
        
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber1} ></img></div>
        <div className='para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber2} ></img></div>
        <div className='para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>

        <div className="service1">
        <div ><img className='services_number1' alt='' src={ServicesNumber3} ></img></div>
        <div className='para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>

        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber4} ></img></div>
        <div className='para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>

        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber5} ></img></div>
        <div className='para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>



        {/* <div className="services_heading">What We Do</div>
        <p className="service_paragraph">Finding the best approach for your needs. 
        Then, transform it into a delightfull interface, pleasure experience with impactful message.
        </p>
        <div className="services_leftcontainer">
          <img className='services_number1' alt='' src={ServicesNumber1} ></img>
        </div>
        <div className="services_middlecontainer">
          <div className="service_number1para">Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        </div>
        <div className="services_rightcontainer">
          <img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img>
        </div> */}
        
                
      </div>
        
    </>
  )
}
{/* <div className="heading1">UI/UX</div>
            <span className="heading2">DESIGNING</span> */}
            {/* <span className="point">.</span> */}
export default Services
{/* <div className="services_first">
          <div className="services_line"></div>
            <img className='services_number1' alt='' src={ServicesNumber1} ></img>
            
            <div className="service_number1para">Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
            <img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img>
          <div className="services_line"></div>
        </div> */}