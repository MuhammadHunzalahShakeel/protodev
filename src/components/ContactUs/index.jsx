import React, { useRef } from 'react';
import { useState } from 'react'
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
    const form = useRef();
    const [show, setShow] = useState("flex")
    function sendEmail(e) {
        if (show === "flex") {
            setShow("none");
            e.preventDefault();
            // const a = { "user_fullname": e.target["full_name"].value, "user_email": e.target["email_address"].value, "user_budget": e.target["budget"].value, "user_subject": e.target["subject"].value, "message": e.target["message"].value }
            // console.log(a);
            emailjs.sendForm('service_protodev', 'template_protodev', e.target, '62o-Tx0ft0e1vcTrF')
                .then((result) => {
                    console.log(result.text);
                    toast.success("We Received Your Message. Our Team will get back to you soon!!", { theme: "dark" });
                    setShow("flex");
                }, (error) => {
                    console.log(error.text);
                    setShow("flex");
                });
            e.target.reset()
        }
    }
    return (
        <>
            <Row id="#contactus">
                <Column1>
                    <Column1Image src={img1}></Column1Image>
                </Column1>
                <Column2>
                    <span>Let's Discuss</span><br></br><span>Your </span><span style={{ color: "#007aff" }}>Ideas</span>
                    <p>We love listening your ideas and we make sure that our clients are always satisfied with the services provided. Just tell us what you need and wait for the best results ever.</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <Right><input type="text" name="full_name" class="name" placeholder="Full Name" required></input></Right>
                        <Left><input type="email" name="email_address" class="email" placeholder="Email Address" required /></Left>
                        <Right><input type="text" name="subject" class="subject" placeholder="Subject" required /></Right>
                        <Left><input type="text" name="budget" class="budget" placeholder="Budget" required /></Left>
                        <Bottom><input type="text" name="message" class="message" placeholder="Message" required /></Bottom>
                        <button type="submit" style={{ display: show }}>
                            <Column2Image src={img2}></Column2Image>
                        </button>
                        <ToastContainer />
                    </form>
                </Column2>
            </Row>
        </>
    );
}
export default Contact;