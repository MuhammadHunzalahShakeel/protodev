import React from 'react'
import Typewriter from "typewriter-effect"
import {BrowserRouter,Link,Routes,Route, } from "react-router-dom"
import "./Home.css"
import NewProjectButton from "../../assets/NewProjectButton.svg"
import LinkedinIcon from "../../assets/LinkedinIcon.svg"
import BehanceIcon from "../../assets/BehanceIcon.svg"
import FacebookIcon from "../../assets/FacebookIcon.svg"
import InstagramIcon from "../../assets/InstagramIcon.svg"
import EmailIcon from "../../assets/EmailIcon.svg"
import HomeBackground from "../../assets/HomeBackground.svg"

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
    <div className='home_container'>
      <div className="home_leftcontainer">
        <h1 className='home_firstheading'>We Are</h1>
        <h1 className='home_secondheading'><Typewriter
          options={{
            strings: [
              'UI UX Designer',
              'Graphic Designer',
              'Web Developer', 
              'App Developer', 
              'Content Writer',
              'Digital Marketer',
              'SEO',
              'Social Media Manager',
            ],
            autoStart: true,
            loop: true,
          }}/></h1>
      </div>
      <div className="home_rightcontainer">
        <p className='home_para'>Professional and Experience Teams dedicated to creating visually appealing service to meet the demands of your corporate and your customers</p>
          <a href="#contact"><img className='home_newbutton' alt=''  src={NewProjectButton} ></img></a>
          <ul className="home_sociallinks">
            <li><a href="https://www.linkedin.com/company/protodev/" target='_blank'><img className='LinkedinIcon' alt='' id='icon'  src={LinkedinIcon} ></img></a></li>
            {/* <li><a href="https://www.behance.net/protodev" rel='noopener' target='_blank'><img className='BehanceIcon' alt='' id='icon'  src={BehanceIcon} ></img></a></li> */}
            <li><a href="https://instagram.com/protodev.co?igshid=Yzg5MTU1MDY=" rel='noopener' target='_blank'><img className='InstagramIcon' alt='' id='icon'  src={InstagramIcon} ></img></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100088868936092" rel='noopener' target='_blank'><img className='FacebookIcon' alt='' id='icon'  src={FacebookIcon} ></img></a></li>
            <li><a href="mailto:clients@protodev.co" rel='noopener' target='_blank'><img className='EmailIcon' alt='' id='icon'  src={EmailIcon} ></img></a></li>
          </ul>
      </div>
    </div>
    </section>
  )
}

export default Home
