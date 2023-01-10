import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import ContactImage from "../../assets/ContactImage.svg"
import SubmitButton from "../../assets/SubmitButton.svg"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o8tplwq','template_cruxbrw', form.current,'62o-Tx0ft0e1vcTrF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   
    <section id='connect'>
    <div className="contact_container">
        <div className="contact_leftcontainer">
        <img className='contact_image' alt=''  src={ContactImage} ></img>
        </div>
        <div className="contact_rightcontainer">
          <h1 className="contact_firstheading">Let's Discuss</h1>
          <div className="contact_secondheading">
              <span className="contact_secondheading1">Your</span>
              <span className="contact_secondheading2"> Ideas</span>
          </div>
          <p className='contact_paragraph'>Finding the best approach for your needs. Then, transform it into a delightfull interface.</p>
          <div className="contact_inputfields">
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='firstname' class="contact_firstname"  placeholder="First Name" required></input>
            <input type="text" name='lastname'  class="contact_lastname" placeholder="Last Name"></input>
            <input type="email" name='email'  class="contact_emailaddress" placeholder="Email Address" required></input>
            <input type="text" name='budget'  class="contact_budget" placeholder="Budget"></input>
            <input type="text" name='subject'  class="contact_subject" placeholder="Subject" required></input>
            <input type="text" name='message'  class="contact_message" placeholder="Message" required></input>
            {/* <button type="submit" value="Send" >
              submit
            </button> */}
            <a type="submit" href="">
            <img className='contact_submitbutton' alt=''  src={SubmitButton} ></img>
            </a>
            </form>
          </div>
          

          
         
        </div>
                
      </div>
        
    </section>
     
  )
}

export default Contact
