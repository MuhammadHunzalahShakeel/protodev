import React from 'react'
import {BrowserRouter,Link,Routes,Route, } from "react-router-dom"
import "./Home.css"
import NewProjectButton from "../../assets/NewProjectButton.svg"
import LinkedinIcon from "../../assets/LinkedinIcon.svg"
import BehanceIcon from "../../assets/BehanceIcon.svg"
import FacebookIcon from "../../assets/FacebookIcon.svg"
import InstagramIcon from "../../assets/InstagramIcon.svg"
// import EmailIcon from "../../assets/EmailIcon.svg"
// import HomeSectionImage from "../../assets/HomeSectionImage.svg"
import HomeBackground from "../../assets/HomeBackground.svg"
// import DroneImage from "../../assets/DroneImage.svg"
// import CafeImage from "../../assets/CafeImage.svg"
// import EasilyImage from "../../assets/EasilyImage.svg"
// import TravelImage from "../../assets/TravelImage.svg"

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
    
    <section id='home'>
    <div className='home_container'  style={myStyle}>
      
      <div className="home_leftcontainer">
        <h1 className='home_firstheading'>We Are</h1>
        <h1 className='home_secondheading'>Copywriters</h1>
      </div>
      <div className="home_rightcontainer">
        <p className='home_para'>Experienced design team passionate to create visual-approaching solutions to solved your bussiness needs and your user. </p>
        <div className="button">
          <img className='home_newbutton' alt=''  src={NewProjectButton} ></img>
        </div>
        {/* <div className="sociallinks"> */}
          <ul className="home_sociallinks">
            <li><a href="https://www.linkedin.com/company/protodev/" rel='noopener' target='_blank'><img className='LinkedinIcon' alt='' id='icon'  src={LinkedinIcon} ></img></a></li>
            <li><a href="https://www.behance.net/protodev" rel='noopener' target='_blank'><img className='BehanceIcon' alt='' id='icon'  src={BehanceIcon} ></img></a></li>
            <li><a href="https://instagram.com/protodev.co?igshid=Yzg5MTU1MDY=" rel='noopener' target='_blank'><img className='InstagramIcon' alt='' id='icon'  src={InstagramIcon} ></img></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100088868936092" rel='noopener' target='_blank'><img className='EmailIcon' alt='' id='icon'  src={FacebookIcon} ></img></a></li>
          </ul>
        {/* </div> */}
      </div>
    </div>
    {/* <div className="home_protoimg">
    <img className='img' alt='' id='icon'  src={HomeSectionImage} ></img>
    </div> */}
    </section>
    
    
  )
}

export default Home
