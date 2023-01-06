import React from 'react'
import "./Home.css"
import NewProjectButton from "../../assets/NewProjectButton.svg"
import LinkedinIcon from "../../assets/LinkedinIcon.svg"
import BehanceIcon from "../../assets/BehanceIcon.svg"
import InstagramIcon from "../../assets/InstagramIcon.svg"
import EmailIcon from "../../assets/EmailIcon.svg"
import HomeSectionImage from "../../assets/HomeSectionImage.svg"
import DroneImage from "../../assets/DroneImage.svg"
import CafeImage from "../../assets/CafeImage.svg"
import EasilyImage from "../../assets/EasilyImage.svg"
import TravelImage from "../../assets/TravelImage.svg"

const Aboutus = () => {
  return (
    <>
    <div className='container'>
      <div className="leftcontainer">
        <h1 className='firstheading'>We Are</h1>
        <h1 className='secondheading'>Copywriters</h1>
      </div>
      <div className="rightcontainer">
        <p>Experienced design team passionate to create visual-approaching solutions to solved your bussiness needs and your user. </p>
        <div className="button">
          <img className='NewProjectButton' alt=''  src={NewProjectButton} ></img>
        </div>
        {/* <div className="sociallinks"> */}
          <ul className="sociallinks">
            <li><img className='LinkedinIcon' alt='' id='icon'  src={LinkedinIcon} ></img></li>
            <li><img className='BehanceIcon' alt='' id='icon'  src={BehanceIcon} ></img></li>
            <li><img className='InstagramIcon' alt='' id='icon'  src={InstagramIcon} ></img></li>
            <li><img className='EmailIcon' alt='' id='icon'  src={EmailIcon} ></img></li>
          </ul>
        {/* </div> */}
      </div>
    </div>
    <div className="protoimg">
    {/* <img className='img' alt='' id='icon'  src={DroneImage} ></img>
    <img className='img' alt='' id='icon'  src={CafeImage} ></img>
    <img className='img' alt='' id='icon'  src={EasilyImage} ></img>
    <img className='img' alt='' id='icon'  src={TravelImage} ></img> */}
    <img className='img' alt='' id='icon'  src={HomeSectionImage} ></img>
    </div>
    </>
  )
}

export default Aboutus
