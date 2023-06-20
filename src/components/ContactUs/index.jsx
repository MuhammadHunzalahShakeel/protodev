import React, { useRef } from 'react';
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import img1 from "/static/media/ContactImage.webp";
import img2 from "/static/media/SubmitButton.svg";
import { 
    Row,
    Column1,
    Column2,
    Left,
    Bottom,
    Right,
    Column1Image,
    Column2Image
} from "./ContactElements";

const Contact = () => {
    const [value, setValue] = useState()
    const [show, setShow] = useState("flex")
    const form = useRef();
    const sendEmail = (e) => {
      if(show==="flex"){
          setShow("none");
          e.preventDefault();
          e.target.reset();
          emailjs.sendForm('service_nu8s1h9', 'template_5bfulk7', form.current, '62o-Tx0ft0e1vcTrF')
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
        <>
        <Row id="#contactus">
            <Column1>
                <Column1Image src={img1}></Column1Image>
            </Column1>
            <Column2>
                <span>Let's Discuss</span><br></br><span>Your </span><span style={{color: "#007aff"}}>Ideas</span>
                <p>We love listening your ideas and we make sure that our clients are always satisfied with the services provided. Just tell us what you need and wait for the best results ever.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <Right><input type="text" name='user_fullname' class="name"  placeholder="Full Name" required></input></Right>
                    <Left><input type="email"  name='user_email' class="email" placeholder="Email Address" required/></Left>
                    <Right><input type="text" name='user_subject' class="subject" placeholder="Subject" required/></Right>
                    <Left><input type="text" name='user_budget' class="budget" placeholder="Budget" required/></Left>
                    <Bottom><input type="text" name='message' class="message" placeholder="Message" required/></Bottom>
                    <button type="submit">
                        <Column2Image style={{display:show}}  src={img2}></Column2Image>
                    </button>
                    <ToastContainer />
                </form>
            </Column2>
        </Row>
        </>
    );
}
export default Contact;