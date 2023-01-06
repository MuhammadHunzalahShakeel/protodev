import React from 'react'
import "./Home.css"
import NewProjectButton from "../../assets/NewProjectButton.svg"
import LinkedinIcon from "../../assets/LinkedinIcon.svg"
import BehanceIcon from "../../assets/BehanceIcon.svg"
import InstagramIcon from "../../assets/InstagramIcon.svg"
import EmailIcon from "../../assets/EmailIcon.svg"
import HomeSectionImage from "../../assets/HomeSectionImage.svg"
import HomeBackground from "../../assets/HomeBackground.svg"
import DroneImage from "../../assets/DroneImage.svg"
import CafeImage from "../../assets/CafeImage.svg"
import EasilyImage from "../../assets/EasilyImage.svg"
import TravelImage from "../../assets/TravelImage.svg"

const Home = () => {
  const myStyle={
      backgroundImage: 
     HomeBackground,
      height:'100vh',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
};

  return (
    <>
    <div className='home_container'  style={myStyle}>
      
      <div className="home_leftcontainer">
        <h1 className='home_firstheading'>We Are</h1>
        <h1 className='home_secondheading'>Copywriters</h1>
      </div>
      <div className="home_rightcontainer">
        <p>Experienced design team passionate to create visual-approaching solutions to solved your bussiness needs and your user. </p>
        <div className="button">
          <img className='NewProjectButton' alt=''  src={NewProjectButton} ></img>
        </div>
        {/* <div className="sociallinks"> */}
          <ul className="home_sociallinks">
            <li><img className='LinkedinIcon' alt='' id='icon'  src={LinkedinIcon} ></img></li>
            <li><img className='BehanceIcon' alt='' id='icon'  src={BehanceIcon} ></img></li>
            <li><img className='InstagramIcon' alt='' id='icon'  src={InstagramIcon} ></img></li>
            <li><img className='EmailIcon' alt='' id='icon'  src={EmailIcon} ></img></li>
          </ul>
        {/* </div> */}
      </div>
    </div>
    <div className="home_protoimg">
    {/* <img className='img' alt='' id='icon'  src={DroneImage} ></img>
    <img className='img' alt='' id='icon'  src={CafeImage} ></img>
    <img className='img' alt='' id='icon'  src={EasilyImage} ></img>
    <img className='img' alt='' id='icon'  src={TravelImage} ></img> */}
    <img className='img' alt='' id='icon'  src={HomeSectionImage} ></img>
    </div>
    </>
  )
}

export default Home
