import React,{useState} from 'react'
import "./Services.css"
import ServicesNumber1 from "../../assets/ServicesNumber1.svg"
import ServicesNumber2 from "../../assets/ServicesNumber2.svg"
import ServicesNumber3 from "../../assets/ServicesNumber3.svg"
import ServicesNumber4 from "../../assets/ServicesNumber4.svg"
import ServicesNumber5 from "../../assets/ServicesNumber5.svg"
import ServicesNumber6 from "../../assets/ServicesNumber6.svg"
import ServicesArrowButton from "../../assets/ServicesArrowButton.svg"

const Services = () => {
  const[show1,setShow1]=useState(false);
  const[show2,setShow2]=useState(false);
  const[show3,setShow3]=useState(false);
  const[show4,setShow4]=useState(false);
  const[show5,setShow5]=useState(false);
  const[show6,setShow6]=useState(false);
 
  return (
   
    <section id='services'>
       <div className="services_container">
        <div className="services_heading">What We Do</div>
        <p className="service_paragraph">Finding the best approach for your needs. 
        Then, transform it into a delightfull interface, pleasure experience with impactful message.
        </p>
        <div className="divider"></div>

        {/* SERVICE NO 01 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber1} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div onClick={()=>setShow1(!show1)}><img id='serviceimage1'  className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show1 && <div className='services1_innerpara'>Finding the best approach for your needs. 
          Then, transform it into a delightfull interface, pleasure experience with impactful message.
          <ul className='services1_innerul'>
            <li>Low Fidelity Wireframes</li>
            <li>High Fidelity Wireframes</li>
            <li>Website Design</li>
            <li>App Design Design</li>
          </ul>
        </div>
        
          }
        <div className="divider"></div>

        {/* SERVICE NO 02 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber2} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div onClick={()=>setShow2(!show2)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show2 && <div className='services1_innerpara'>Finding the best approach for your needs. 
          Then, transform it into a delightfull interface, pleasure experience with impactful message.
          <ul className='services1_innerul'>
            <li>Low Fidelity Wireframes</li>
            <li>High Fidelity Wireframes</li>
            <li>Website Design</li>
            <li>App Design Design</li>
          </ul>
        </div>}
        <div className="divider"></div>

        {/* SERVICE NO 03 */}
        <div className="service1">
        <div ><img className='services_number1' alt='' src={ServicesNumber3} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div onClick={()=>setShow3(!show3)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show3 && <div className='services1_innerpara'>Finding the best approach for your needs. 
          Then, transform it into a delightfull interface, pleasure experience with impactful message.
          <ul className='services1_innerul'>
            <li>Low Fidelity Wireframes</li>
            <li>High Fidelity Wireframes</li>
            <li>Website Design</li>
            <li>App Design Design</li>
          </ul>
        </div>}
        <div className="divider"></div>

        {/* SERVICE NO 04 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber4} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div onClick={()=>setShow4(!show4)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show4 && <div className='services1_innerpara'>Finding the best approach for your needs. 
          Then, transform it into a delightfull interface, pleasure experience with impactful message.
          <ul className='services1_innerul'>
            <li>Low Fidelity Wireframes</li>
            <li>High Fidelity Wireframes</li>
            <li>Website Design</li>
            <li>App Design Design</li>
          </ul>
        </div>}
        <div className="divider"></div>

        {/* SERVICE NO 05 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber5} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div onClick={()=>setShow5(!show5)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show5 && <div className='services1_innerpara'>Finding the best approach for your needs. 
          Then, transform it into a delightfull interface, pleasure experience with impactful message.
          <ul className='services1_innerul'>
            <li>Low Fidelity Wireframes</li>
            <li>High Fidelity Wireframes</li>
            <li>Website Design</li>
            <li>App Design Design</li>
          </ul>
        </div>}
        <div className="divider"></div>

        {/* SERVICE NO 06 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber6} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div onClick={()=>setShow6(!show6)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show6 && <div className='services1_innerpara'>Finding the best approach for your needs. 
          Then, transform it into a delightfull interface, pleasure experience with impactful message.
          <ul className='services1_innerul'>
            <li>Low Fidelity Wireframes</li>
            <li>High Fidelity Wireframes</li>
            <li>Website Design</li>
            <li>App Design Design</li>
          </ul>
        </div>}
      </div>
    </section>
  )
}

export default Services
