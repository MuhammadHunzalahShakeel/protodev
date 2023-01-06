import React from 'react'
import "./Aboutus.css"
import NewProjectButton from "../../assets/NewProjectButton.svg"
import AboutImage from "../../assets/AboutImage.svg"


const Aboutus = () => {
  return (
    <>
    <div className='container'>
      <div className="leftcontainer">
      <span className='firstheading'>Who </span>
      <span className='secondheading'>Are We?</span>
        <p>Finding the best approach for your needs. Then, transform it into a delightfull interface, pleasure experience with impactful message.</p>
        <p>Sed nec at tortor. quis tincidunt adipiscing venenatis Sed nisl. porta eget libero, quis nec est. diam turpis nec at, urna.  Sed nec at tortor. quis tincidunt adipiscing venenatis Sed nisl. porta eget libero, quis nec est. diam turpis nec at, urna.</p>
        <p>Sed nec at tortor. quis tincidunt adipiscing venenatis Sed nisl. porta eget libero, quis nec est. diam turpis nec at, urna.  Sed nec at tortor. quis tincidunt adipiscing venenatis Sed nisl. porta eget libero, quis nec est. diam turpis nec at, urna.</p>
        <div className="button">
          <img className='NewProjectButton' alt=''  src={NewProjectButton} ></img>
        </div>
        
      </div>
      <div className="rightcontainer">
      <img className='aboutimage' alt='' id='icon'  src={AboutImage} ></img>
      </div>
    </div>
    {/* <div className="protoimg">
    <img className='img' alt='' id='icon'  src={AboutImage} ></img>
    </div> */}
    </>
  )
}

export default Aboutus
