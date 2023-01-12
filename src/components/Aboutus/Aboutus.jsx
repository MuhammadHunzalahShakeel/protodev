import React from 'react'
import "./Aboutus.css"
import NewProjectButton from "../../assets/NewProjectButton.svg"



const Aboutus = () => {
  return (
    <section id='aboutus'>
        <div className='about_container'>
      <div className="about_leftcontainer">
      <span className='about_firstheading'>Who </span>
      <span className='about_secondheading'>Are We?</span>
        <p className='about_para'>We're a software company that specializes in digital software solutions for your brand,product or services . We're a company that takes pride in our work, and we want to make sure you understand how important it is to us. </p>
        <p className='about_para'>We believe in being straightforward and honest with our customers, whether that means telling them about the things we do well or the things that aren't so great. We want to make sure our clients get what they expect from us—and more! </p>
        <p className='about_para'>We know you're busy, so we'll be as efficient as possible with your project. We'll get back to you quickly so you can move on with your life.  </p>
        <p className='about_para'>At Protodev, we believe there's no better feeling than seeing something you've created come alive online—and then seeing it spread around the world! </p>
          <a href="#contact">
          <img className='about_newbutton' alt=''  src={NewProjectButton} ></img> 
          </a>
      </div>
      {/* <div className="about_rightcontainer">
      <img className='aboutimage' alt=''   src={AboutImage} ></img>
      </div> */}
    </div>
    </section>
  )
}

export default Aboutus
