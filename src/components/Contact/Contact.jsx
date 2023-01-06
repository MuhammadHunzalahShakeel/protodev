import React from 'react'
import "./Contact.css"
import ContactImage from "../../assets/ContactImage.svg"
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
        <p>Finding the best approach for your needs. Then, transform it into a delightfull interface.</p>
        {/* <label className='label'>First Name</label>
        <div class="underline"></div>
        <input type="text"></input> */}











        {/* <label for="fname">Last Name</label>
        <input type="text" id="fname" name="fname">
        <label for="fname">Email Address</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="fname">Budget</label>
        <label for="fname">Subject</label>
        <label for="fname">Message</label> */}
        <div class="wrapper">
         <div class="input-data">
            <input type="text" required></input>
            <div class="underline"></div>
            <label>Name</label>
         </div>
        </div>
      </div>
                
      </div>
        
    </>
  )
}

export default Contact
