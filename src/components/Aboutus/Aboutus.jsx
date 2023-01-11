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
        <p className='about_para'>Finding the best approach for your needs. Then, transform it into a delightfull interface, pleasure experience with impactful message.</p>
        <p className='about_para'>Sed nec at tortor. quis tincidunt adipiscing venenatis Sed nisl. porta eget libero, quis nec est. diam turpis nec at, urna.  Sed nec at tortor. quis tincidunt adipiscing venenatis Sed nisl. porta eget libero, quis nec est. diam turpis nec at, urna.</p>
        <p className='about_para'>Sed nec at tortor. quis tincidunt adipiscing venenatis Sed nisl. porta eget libero, quis nec est. diam turpis nec at, urna.  Sed nec at tortor. quis tincidunt adipiscing venenatis Sed nisl. porta eget libero, quis nec est. diam turpis nec at, urna.</p>
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
