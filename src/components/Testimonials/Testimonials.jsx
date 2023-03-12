import React,{useState} from 'react'
import "./Testimonials.css"
import testimonialssubBackground from "../../assets/TestimonialsSubBackground.svg"
import testimonialssubBackgroundMobile from "../../assets/TestimonialsSubBackgroundMobile.svg"
import testimonialsQuote from "../../assets/TestimonialsQuoteVector.svg"
import testimonialsForwardButton from "../../assets/TestimonialsForwardButton.svg"
import testimonialsBackwardButton from "../../assets/TestimonialsBackwardButton.svg"

const Testimonials = () => {
  const quotes=["The design solution were increased our website traffic and conversions. The services provided by protodev were instrumental in the success of our brand. - Edeline G.",
                "They take time and after understanding my company, they used that information to create a unique and cohesive brand identity that perfectly represents my business. -Shoaib",
                "The team was also very good in providing timely updates and addressing any issues that came up during the development process. I highly recommend ProtoDev for any Flutter development needs. -Farhan",
                "Their team of writers are extremely skilled and talented, they were able to understand my business goals and create high-quality, engaging content that resonated with my target audience. -Amelia ",
                "The team had a deep understanding of Node.js and Express.js which helped them deliver an efficient and robust server-side solution. -Daniel Garcia",
                "They took the time to understand my business and target audience, and used that information to create a visually stunning and highly effective landing page. -Joseph"
                ];
  
  const [count, setcount]=useState(0);
  const [text, setText]=useState(quotes[count]);

  const incText=()=>{
    if(count<5){
      setcount(count + 1);
      setText(quotes[count+1]);
    }
    else{
      setcount(0);
      setText(quotes[0]);
    }
  };
  const decText=()=>{ 
    if(count>0)
    {
      setcount(count - 1);
      setText(quotes[count-1]);
    }
    else{
      setcount(5);
      setText(quotes[5]);
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
