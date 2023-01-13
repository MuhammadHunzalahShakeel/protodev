import React, { useRef } from 'react';
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import ContactImage from "../../assets/ContactImage.svg"
import SubmitButton from "../../assets/SubmitButton.svg"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const Contact = () => {
  // <script>
  //   var input = documnet.queryselector("#phonenumber");
  //   window.intlTelInput(input,{});
  // </script>
    const [value, setValue] = useState()
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_4nfnhem', 'template_5bfulk7', form.current, '62o-Tx0ft0e1vcTrF')
        .then((result) => {
            console.log(result.text);
            toast.success("We receive your message.Our Team will get back to you soon!!",
              {theme: "dark"});
          }, (error) => {
            console.log(error.text);
          });
        };
      // const notify = () => toast("We receive your message.Our Team will get back to you soon!!");
      // const notify = () => toast.success("We receive your message.Our Team will get back to you soon!!", {
      //   position: toast.POSITION.TOP_RIGHT
      // });;
    
   
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
              {/* <input type="tel" name='user_phonenumber' pattern="[+]{1}[0-9]{11,14}"  className="contact_lastname" placeholder="Phone Number (+123456789)"></input> */}
              <PhoneInput placeholder="Enter phone number" name='user_phonenumber' className="contact_lastname" value={value} onChange={setValue}  />

              <input type="email" name='user_email'  className="contact_emailaddress" placeholder="Email Address" required></input>
              <input type="text" name='user_budget'  className="contact_budget" placeholder="Budget" required></input>
              <input type="text" name='user_subject'  class="contact_subject" placeholder="Subject" required></input>
              <input type="text" name='message'  className="contact_message" placeholder="Message" required></input>
              <button type="submit" > <img className='contact_submitbutton' alt=''  src={SubmitButton} ></img></button>
              <ToastContainer />
            </form>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Contact
