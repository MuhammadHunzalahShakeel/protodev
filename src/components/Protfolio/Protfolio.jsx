import React from 'react'
import "./Protfolio.css"
// import ProtfolioDesign1 from "../../assets/ProtfolioDesign1.svg"
// import ProtfolioDesign2 from "../../assets/ProtfolioDesign2.svg"
// import ProtfolioDesign3 from "../../assets/ProtfolioDesign3.svg"
// import ProtfolioDesign4 from "../../assets/ProtfolioDesign4.svg"
// import ProtfolioDesign5 from "../../assets/ProtfolioDesign5.svg"
import ProtfolioImage from "../../assets/ProtfolioImage.svg"
// import ProtfolioDesignHover1 from "../../assets/ProtfolioDesignHover1.svg"
// import ProtfolioDesignHover2 from "../../assets/ProtfolioDesignHover2.svg"
// import ProtfolioDesignHover3 from "../../assets/ProtfolioDesignHover3.svg"
// import ProtfolioDesignHover4 from "../../assets/ProtfolioDesignHover4.svg"
// import ProtfolioDesignHover5 from "../../assets/ProtfolioDesignHover5.svg"

const Protfolio = () => {
  return (
  
    <section id='protfolio'>
          <div className="protfolio_container">
        <div className="protfolio_heading">
            <h1 className='protfolio_heading1'>We Create And</h1>
            <h1 className='protfolio_heading2'>Innovate</h1>
        </div>
        <div className="protfolio_para">We design a reflection of your brand and our aim is to help you in engaging your target audience. We design and create online solutions that increase company productivity and resonate with brand image, from web apps to client portals and everything in between.</div>
        <div >
        <img className='protfolio_image' alt=''  src={ProtfolioImage} ></img>
        {/* <img className='protfolio_image2' alt=''  src={ProtfolioImage} ></img> */}
        </div>
        {/* <div className="protfolio_designimages">
            <img className='protfolio_designimages1' alt=''  src={ProtfolioDesign1} ></img>
            <img className='protfolio_designimages2' alt=''  src={ProtfolioDesign2} ></img>
            <img className='protfolio_designimages3' alt=''  src={ProtfolioDesign3} ></img>
            <img className='protfolio_designimages4' alt=''  src={ProtfolioDesign4} ></img>
            <img className='protfolio_designimages5' alt=''  src={ProtfolioDesign5} ></img>
        </div> */}
        {/* <div className="row1">
            <div className="protfolio_column">
            <img className='protfolio_designimages1' alt=''  src={ProtfolioDesignHover1} ></img>
            </div>
            <div className="protfolio_column">
            <img className='protfolio_designimages3' alt=''  src={ProtfolioDesignHover3} ></img>
            </div>
            <div className="protfolio_column">
            <img className='protfolio_designimages4' alt=''  src={ProtfolioDesignHover4} ></img>
            </div>
        </div> */}
        
        
      </div>
        
    </section>
   
  )
}

export default Protfolio
