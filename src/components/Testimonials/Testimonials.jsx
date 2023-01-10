import React from 'react'
import "./Testimonials.css"
import testimonialssubBackground from "../../assets/TestimonialsSubBackground.svg"
import testimonialsQuote from "../../assets/TestimonialsQuoteVector.svg"
import testimonialsForwardButton from "../../assets/TestimonialsForwardButton.svg"
import testimonialsBackwardButton from "../../assets/TestimonialsBackwardButton.svg"

const Testimonials = () => {
  return (
 
      <section id='testimonials'>
           <div className="testimonials_container">
        <div className="testimonials_heading" >
          <span className="testimonials_firstheading">Client</span>
          <span className="testimonials_secondheading"> testimonials</span>
        </div>
        <div className="testimonials_subcontainer">
          <img className='testimonials_subbackground' alt=''  src={testimonialssubBackground} ></img>
          <img className='testimonials_quote' alt=''  src={testimonialsQuote} ></img>
          <p className='testimonials_paragraph' >
              Finding the best approach for your needs. Then, transform it into a
              delightfull interface, greate experience with impactful message.
          </p>
          <img className='testimonials_forwardbutton' alt=''  src={testimonialsForwardButton} ></img>
          <img className='testimonials_backwardbutton' alt=''  src={testimonialsBackwardButton} ></img>
        </div>
        
      </div>
      </section>

  )
}

export default Testimonials
