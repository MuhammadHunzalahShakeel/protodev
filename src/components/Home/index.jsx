import React from "react";
// import Typewriter from 'react-ts-typewriter';
import Typewriter from "typewriter-effect"
// import Typewriter from "typewriter-effect";
// import TypeWriterEffect from 'react-typewriter-effect';
import {GrLinkedinOption, GrInstagram, GrFacebookOption} from 'react-icons/gr';
import {BiEnvelope} from 'react-icons/bi';
import img from "/static/media/NavBackground.svg";
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
    const data= ["Content Writer", "Digital Marketer", "Web Developer", "App Developer", "Graphic Designer", "UI UX Designer", "Social Media Manager", "SEO"]
    return (
        <div id="#home">
        <HeroRow>
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
                <Icon to="https://www.linkedin.com/company/protodev/" rel='noopener' target='_blank'><IconImage><GrLinkedinOption/></IconImage></Icon>
                <Icon to="https://www.instagram.com/protodev.co/" rel='noopener' target='_blank'><IconImage><GrInstagram/></IconImage></Icon>
                <Icon to="https://www.facebook.com/profile.php?id=100088868936092" rel='noopener' target='_blank'><IconImage><GrFacebookOption/></IconImage></Icon>
                <Icon to="mailto:info@protodev.co" rel='noopener' target='_blank'><IconImage><BiEnvelope/></IconImage></Icon>
            </LeftColumn>
        </HeroRow>
        </div>
    );
}
export default HeroSection; 