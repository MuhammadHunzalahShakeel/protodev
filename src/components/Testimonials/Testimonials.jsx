import React,{useState} from 'react'
import "./Testimonials.css"
import testimonialssubBackground from "../../assets/TestimonialsSubBackground.svg"
import testimonialssubBackgroundMobile from "../../assets/TestimonialsSubBackgroundMobile.svg"
import testimonialsQuote from "../../assets/TestimonialsQuoteVector.svg"
import testimonialsForwardButton from "../../assets/TestimonialsForwardButton.svg"
import testimonialsBackwardButton from "../../assets/TestimonialsBackwardButton.svg"

// const Testimonials = () => {
//   const[review1,setReview1]=useState(true);
//   const[review2,setReview2]=useState(true);
//   // const[review3,setReview3]=useState(false);
//   // const[review4,setReview4]=useState(false);
//   // const[review5,setReview5]=useState(false);
//   const[showtab,setShowtab]=useState(1);
//   const handleReview=(e)=>{
//     setShowtab(e);
//   }
//   return (
 
//       <section id='testimonials'>
//            <div className="testimonials_container">
//         <div className="testimonials_heading" >
//           <span className="testimonials_firstheading">Client</span>
//           <span className="testimonials_secondheading"> testimonials</span>
//         </div>
//         <div className="testimonials_subcontainer">
          
//           <img className='testimonials_subbackground' alt=''  src={testimonialssubBackground} ></img>
//           <img className='testimonials_subbackgroundmobile' alt=''  src={testimonialssubBackgroundMobile} ></img>
//           <img className='testimonials_quote' alt=''  src={testimonialsQuote} ></img>
//           <div className={showtab===1?"testimonials_paragraph active":"testimonials_paragraph"}>
//             <p className='testimonials_paragraph' >
//                 Finding the best approach for your needs. Then, transform it into a
//                 delightfull interface, greate experience with impactful message.
//                 Review 1
//             </p>
//           </div>
//           <div className={showtab===2?"testimonials_paragraph active":"testimonials_paragraph"}>
//             <p className='testimonials_paragraph' >
//                 Finding the best approach for your needs. Then, transform it into a
//                 delightfull interface, greate experience with impactful message.
//                 Review 2
//             </p>
//           </div>
          
          
//           {/* <p className='testimonials_paragraph' >
//               Finding the best approach for your needs. Then, transform it into a
//               delightfull interface, greate experience with impactful message.
//           </p>
//           <p className='testimonials_paragraph' >
//               Finding the best approach for your needs. Then, transform it into a
//               delightfull interface, greate experience with impactful message.
//           </p> */}
//           <div onClick={()=>handleReview(1)}>
//           <img  className='testimonials_forwardbutton' alt=''  src={testimonialsForwardButton} ></img>
//           </div>
//           <div onClick={()=>handleReview(2)}>
//           <img className='testimonials_backwardbutton' alt=''  src={testimonialsBackwardButton} ></img>

//           </div>
//         </div>
        
//       </div>
//       </section>

//   )
// }

// export default Testimonials


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
          <img className='testimonials_subbackgroundmobile' alt=''  src={testimonialssubBackgroundMobile} ></img>
          <img className='testimonials_quote' alt=''  src={testimonialsQuote} ></img>
            <p className='testimonials_paragraph' >
                Finding the best approach for your needs. Then, transform it into a
                delightfull interface, greate experience with impactful message.
                
            </p>
          
          {/* <p className='testimonials_paragraph' >
              Finding the best approach for your needs. Then, transform it into a
              delightfull interface, greate experience with impactful message.
          </p>
          <p className='testimonials_paragraph' >
              Finding the best approach for your needs. Then, transform it into a
              delightfull interface, greate experience with impactful message.
          </p> */}
          
          <img  className='testimonials_forwardbutton' alt=''  src={testimonialsForwardButton} ></img>
        
          <img className='testimonials_backwardbutton' alt=''  src={testimonialsBackwardButton} ></img>

        </div>
        
      </div>
      </section>

  )
}

export default Testimonials
