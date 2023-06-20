import React, { useRef } from 'react';
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import ContactImage from "../../assets/ContactImage.webp"
import SubmitButton from "../../assets/SubmitButton.svg"



const Contact = () => {
  // <script>
  //   var input = documnet.queryselector("#phonenumber");
  //   window.intlTelInput(input,{});
  // </script>
    const [value, setValue] = useState()
    const [show, setShow] = useState("flex")
    const form = useRef();
    const sendEmail = (e) => {
      if(show==="flex"){
          setShow("none");
          e.preventDefault();
          e.target.reset();
          emailjs.sendForm('service_4nfnhem', 'template_5bfulk7', form.current, '62o-Tx0ft0e1vcTrF')
            .then((result) => {
                console.log(result.text);
                toast.success("We receive your message.Our Team will get back to you soon!!",
                  {theme: "dark"});
                  setShow("flex");
              }, (error) => {
                console.log(error.text);
                setShow("flex");
              });
      }
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
              <input type="text" name='user_fullname' className="contact_firstname"  placeholder="Full Name" required></input>
              <input type="email" name='user_email'  className="contact_emailaddress" placeholder="Email Address" required></input>
              <input type="text" name='user_subject'  class="contact_subject" placeholder="Subject" required></input>
              <input type="text" name='user_budget'  className="contact_budget" placeholder="Budget" required></input>
              <input type="text" name='message'  className="contact_message" placeholder="Message" required></input>
              <button type="submit"> <img className='contact_submitbutton' alt='' style={{display:show}}  src={SubmitButton} ></img></button>
              <ToastContainer />
            </form>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Contact
