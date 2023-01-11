import React,{useState} from 'react'
import "./Services.css"
import ServicesNumber1 from "../../assets/ServicesNumber1.svg"
import ServicesNumber2 from "../../assets/ServicesNumber2.svg"
import ServicesNumber3 from "../../assets/ServicesNumber3.svg"
import ServicesNumber4 from "../../assets/ServicesNumber4.svg"
import ServicesNumber5 from "../../assets/ServicesNumber5.svg"
import ServicesArrowButton from "../../assets/ServicesArrowButton.svg"



const Services = () => {
  // const[showtab,setShowtab]=useState(1);

  // const handletab=(e)=>{
  //   setShowtab(e);
  // }
  // className={showtab===1 ? "nav-link active" : "nav-link" } onClick={()=>handletab(1)}

  const[show,setShow]=useState(true);
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
        <div onClick={()=>setShow(!show)}><img  className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show && <div className='services1_innerpara'>Finding the best approach for your needs. 
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
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        <div className="divider"></div>

        {/* SERVICE NO 03 */}
        <div className="service1">
        <div ><img className='services_number1' alt='' src={ServicesNumber3} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        <div className="divider"></div>

        {/* SERVICE NO 04 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber4} ></img></div>
        <div className='services1_para'>Finding the best approach for your needs. 
            Then, transform it into a delightfull interface, pleasure experience with impactful message.</div>
        <div><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        <div className="divider"></div>

        {/* SERVICE NO 05 */}
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
