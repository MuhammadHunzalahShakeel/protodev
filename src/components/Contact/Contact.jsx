import React from 'react'
import "./Contact.css"
import ContactImage from "../../assets/ContactImage.svg"
import SubmitButton from "../../assets/SubmitButton.svg"
const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <div className="contact_leftcontainer">
        <img className='contact_image' alt='' id='icon'  src={ContactImage} ></img>
        </div>
        <div className="contact_rightcontainer">
          <h1 className="contact_firstheading">Let's Discuss</h1>
          <div className="contact_secondheading">
              <span className="contact_secondheading1">Your</span>
              <span className="contact_secondheading2"> Ideas</span>
          </div>
          <p className='contact_paragraph'>Finding the best approach for your needs. Then, transform it into a delightfull interface.</p>
          <div className="contact_inputfields">
            <input type="text" class="contact_firstname" placeholder="First Name"></input>
            <input type="text" class="contact_lastname" placeholder="Last Name"></input>
            <input type="text" class="contact_emailaddress" placeholder="Email Address"></input>
            <input type="text" class="contact_budget" placeholder="Budget"></input>
            <input type="text" class="contact_subject" placeholder="Subject"></input>
            <input type="text" class="contact_message" placeholder="Message"></input>
          </div>

          <img className='contact_submitbutton' alt='' id='icon'  src={SubmitButton} ></img>
         
        </div>
                
      </div>
        
    </>
  )
}

export default Contact
