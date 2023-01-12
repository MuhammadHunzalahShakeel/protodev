import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import ContactImage from "../../assets/ContactImage.svg"
import SubmitButton from "../../assets/SubmitButton.svg"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_4nfnhem', 'template_5bfulk7', form.current, '62o-Tx0ft0e1vcTrF')
        .then((result) => {
            console.log(result.text);
            console.log("messagesent")
        }, (error) => {
            console.log(error.text);
        });
    };
   

  return (
   
    <section id='contact'>
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
          <p className='contact_paragraph'>We love listening your ideas and we make sure that our clients are always satisfied with the services provided. Just tell us what you need and wait for the best results ever.</p>
          <div className="contact_inputfields">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='user_firstname' class="contact_firstname"  placeholder="First Name" required></input>
              <input type="text" name='user_lastname'  class="contact_lastname" placeholder="Last Name"></input>
              <input type="email" name='user_email'  class="contact_emailaddress" placeholder="Email Address" required></input>
              <input type="text" name='user_budget'  class="contact_budget" placeholder="Budget"></input>
              <input type="text" name='user_subject'  class="contact_subject" placeholder="Subject" required></input>
              <input type="text" name='message'  class="contact_message" placeholder="Message" required></input>
              {/* <input type="submit" value="Send"/> */}
              {/* <img className='contact_submitbutton' alt=''  src={SubmitButton} ></img> */}
              {/* </input> */}
              {/* <input type="submit" value="Send"><img className='contact_submitbutton' alt=''  src={SubmitButton} ></img></input> */}

            <a type="submit" href="" >
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
