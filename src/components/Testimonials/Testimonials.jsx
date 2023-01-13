import React,{useState} from 'react'
import "./Testimonials.css"
import testimonialssubBackground from "../../assets/TestimonialsSubBackground.svg"
import testimonialssubBackgroundMobile from "../../assets/TestimonialsSubBackgroundMobile.svg"
import testimonialsQuote from "../../assets/TestimonialsQuoteVector.svg"
import testimonialsForwardButton from "../../assets/TestimonialsForwardButton.svg"
import testimonialsBackwardButton from "../../assets/TestimonialsBackwardButton.svg"

const Testimonials = () => {
  // const quotes = [
  //   {text1: "1 Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message."},
  //   {text2: "2 Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message."},
  //   {text3: "3 Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message."},
  //   {text4: "4 Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message."}
  // ];
  const quotes=["1st Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message.",
                "2nd Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message.",
                "3rd Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message.",
                "4th Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message.",
                "5th Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message.",
                "6th Finding the best approach for your needs. Then, transform it into a delightfull interface, greate experience with impactful message."
                ];
  
  const [count, setcount]=useState(0);
  const [text, setText]=useState(quotes[count]);

  const incText=()=>{
    if(count<5){
      setcount(count + 1);
      setText(quotes[count+1]);
    }
  };
  const decText=()=>{ 
    if(count>0)
    {
      setcount(count - 1);
      setText(quotes[count-1]);
    }
    else{
      setcount(0);
      setText(quotes[0]);
    }
  };
  
  return (
      <section id='testimonials'>
           <div className="testimonials_container">
        <div className="testimonials_heading" >
          <span className="testimonials_firstheading">Client</span>
          <span className="testimonials_secondheading"> testimonials</span>
        </div>
        <div className="testimonials_subcontainer">
          
          <img className='testimonials_subbackground' alt=''  src={testimonialssubBackground} ></img>
          <img className='testimonials_subbackgroundmobile' alt=''  src={testimonialssubBackgroundMobile} ></img>
          <img className='testimonials_quote' alt=''  src={testimonialsQuote} ></img>
            <p className='testimonials_paragraph' >
                {text}
            </p>
          {/* <p className='testimonials_paragraph' >
              Finding the best approach for your needs. Then, transform it into a
              delightfull interface, greate experience with impactful message.
          </p>
          <p className='testimonials_paragraph' >
              Finding the best approach for your needs. Then, transform it into a
              delightfull interface, greate experience with impactful message.
          </p> */}
          {/* <h1>{count}</h1>
          <h1>{text}</h1> */}
          <div onClick={incText}>
          <img  className='testimonials_forwardbutton'  alt=''  src={testimonialsForwardButton} ></img>
          </div>
          <div onClick={decText}>
          <img className='testimonials_backwardbutton' alt=''  src={testimonialsBackwardButton} ></img>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Testimonials
