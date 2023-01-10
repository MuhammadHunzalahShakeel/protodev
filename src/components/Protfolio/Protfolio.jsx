import React from 'react'
import "./Protfolio.css"
import ProtfolioDesign1 from "../../assets/ProtfolioDesign1.svg"
import ProtfolioDesign2 from "../../assets/ProtfolioDesign2.svg"
import ProtfolioDesign3 from "../../assets/ProtfolioDesign3.svg"
import ProtfolioDesign4 from "../../assets/ProtfolioDesign4.svg"
import ProtfolioDesign5 from "../../assets/ProtfolioDesign5.svg"

const Protfolio = () => {
  return (
  
    <section id='protfolio'>
          <div className="protfolio_container">
        <div className="protfolio_heading">
            <h1 className='protfolio_heading1'>We Create And</h1>
            <h1 className='protfolio_heading2'>Innovate</h1>
        </div>
        {/* <div className="protfolio_designimages">
            <img className='protfolio_designimages1' alt=''  src={ProtfolioDesign1} ></img>
            <img className='protfolio_designimages2' alt=''  src={ProtfolioDesign2} ></img>
            <img className='protfolio_designimages3' alt=''  src={ProtfolioDesign3} ></img>
            <img className='protfolio_designimages4' alt=''  src={ProtfolioDesign4} ></img>
            <img className='protfolio_designimages5' alt=''  src={ProtfolioDesign5} ></img>
        </div> */}
        <div className="row1">
            <div className="column1">
            <img className='protfolio_designimages1' alt=''  src={ProtfolioDesign1} ></img>
            </div>
            <div className="column1">
            <img className='protfolio_designimages3' alt=''  src={ProtfolioDesign3} ></img>
            </div>
            <div className="column1">
            <img className='protfolio_designimages4' alt=''  src={ProtfolioDesign4} ></img>
            </div>
        </div>
        {/* <div className="row2">
            <div className="column2">
            <img className='protfolio_designimages2' alt=''  src={ProtfolioDesign2} ></img>
            </div>
            <div className="column2">
            <img className='protfolio_designimages5' alt=''  src={ProtfolioDesign5} ></img>
            </div>
        </div> */}
      </div>
        
    </section>
   
  )
}

export default Protfolio
