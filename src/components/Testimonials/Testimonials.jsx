import React from 'react'
import "./Testimonials.css"
import testimonailssubBackground from "../../assets/TestimonialsSubBackground.svg"
import testimonailsQuote from "../../assets/TestimonialsQuoteVector.svg"


const Testimonials = () => {
  return (
    <>
    
    {/* <section className='testimonialsSection'> */}
      <div className="testimonials_container">
        <div className="testimonails_heading" >
          <span className="testimonials_firstheading">Client</span>
          <span className="testimonials_secondheading"> Testimonails</span>
        </div>
        <img className='testimonials_subbackground' alt='' id='icon'  src={testimonailssubBackground} ></img>
        {/* <p className='testimonails_quote'>"</p> */}
        <img className='testimonails_quote' alt='' id='icon'  src={testimonailsQuote} ></img>
        <p className='testimonials_paragraph' >
            Finding the best approach for your needs. Then, transform it into a
            delightfull interface, greate experience with impactful message.
        </p>
      </div>
        {/* <div className='testimonailsBackground'>
        <img className='testimonialsImage' alt="" src={testimonailsBackground}/>
        <div className='testimonailsBackgroundChild' />
      </div> */}
    {/* </section> */}
    </>
  )
}

export default Testimonials
