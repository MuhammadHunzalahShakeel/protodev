import React from "react";
// import Typewriter from 'react-ts-typewriter';
import Typewriter from "typewriter-effect"
// import Typewriter from "typewriter-effect";
// import TypeWriterEffect from 'react-typewriter-effect';
import {GrLinkedinOption, GrInstagram, GrFacebookOption} from 'react-icons/gr';
import {BiEnvelope} from 'react-icons/bi';
import img from "/static/media/NewProjectButton.svg";
import img2 from "/static/media/HomeBackground.webp";
import { 
    HeroRow,
    RightColumn,
    Icon,
    LeftColumn,
    Link,
    LinkImage,
    IconImage
} from "./HomeElements";
const HeroSection = () => {
    const data= ["UI UX Designer", "Graphic Designer", "Web Developer", "App Developer", "Content Writer", "SEO Experts", "Social Media Manager"]
    return (
        <div id="#home">
        <HeroRow style={{backgroundImage: `url(${img2})`}}>
            <RightColumn>
                <h1>We Are</h1>
                    <span style={{color: "#5aff15", fontWeight: "bold"}}>
                        <Typewriter
                            options={{
                                strings: data,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
            </RightColumn>
            <LeftColumn>
                <p>Professional and Experience Teams dedicated to creating visually appealing service to meet the demands of your corporate and your customers</p>
                <Link to="#contactus" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                    <LinkImage src={img}></LinkImage>
                </Link><br></br>
                <div style={{width: "60%", display: "flex", justifyContent: "space-between"}}>
                <Icon to="https://www.linkedin.com/company/protodev/" rel='noopener' target='_blank'><IconImage><GrLinkedinOption/></IconImage></Icon>
                <Icon to="https://www.instagram.com/protodev.co/" rel='noopener' target='_blank'><IconImage><GrInstagram/></IconImage></Icon>
                <Icon to="https://www.facebook.com/profile.php?id=100088868936092" rel='noopener' target='_blank'><IconImage><GrFacebookOption/></IconImage></Icon>
                <Icon to="mailto:info@protodev.co" rel='noopener' target='_blank'><IconImage><BiEnvelope/></IconImage></Icon>
                </div>
            </LeftColumn>
        </HeroRow>
        </div>
    );
}
export default HeroSection; 