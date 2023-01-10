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
   
    <section id='services'>
       <div className="services_container">
        <div className="services_heading">What We Do</div>
        <p className="service_paragraph">Finding the best approach for your needs. 
        Then, transform it into a delightfull interface, pleasure experience with impactful message.
        </p>
        <div className="divider"></div>
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber1} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        <div className="divider"></div>
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber2} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        <div className="divider"></div>
        <div className="service1">
        <div ><img className='services_number1' alt='' src={ServicesNumber3} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        <div className="divider"></div>
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber4} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        <div className="divider"></div>
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber5} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>


                
      </div>
    </section>
     
   
  )
}

export default Services
