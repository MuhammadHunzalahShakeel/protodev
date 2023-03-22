import React, { useState } from "react";
import {BsArrowDownRight, BsArrowDown} from "react-icons/bs";
import { 
    Container,
    Row,
    Column1,
    Column2,
    Column3,
    Para,
    ServicesImage
} from "./ServicesElements";
import img1 from "/static/media/ServicesNumber1.svg";
import img2 from "/static/media/ServicesNumber2.svg";
import img3 from "/static/media/ServicesNumber3.svg";
import img4 from "/static/media/ServicesNumber4.svg";
import img5 from "/static/media/ServicesNumber5.svg";
import img6 from "/static/media/ServicesNumber6.svg";

const Services = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const toggleCheck1 = () => {
      setIsChecked1(!isChecked1);
    }
    const checkbox1 = isChecked1 ?
        <div style={{backgroundColor: "#0E0638",cursor: "pointer"}} onClick={()=>{setState1(!state1); toggleCheck1()}}>
            <BsArrowDown color={"white"}/>
        </div>
    :
        <div style={{backgroundColor: "#EFF7FF", border: "2px solid #0E0638",cursor: "pointer"}} onClick={()=>{setState1(!state1); toggleCheck1()}}>
            <BsArrowDownRight color={"#007AFF"}/>
        </div>;

    const [isChecked2, setIsChecked2] = useState(false);
    const toggleCheck2 = () => {
      setIsChecked2(!isChecked2);
    }
    const checkbox2 = isChecked2 ?
        <div style={{backgroundColor: "#0E0638",cursor: "pointer"}} onClick={()=>{setState2(!state2); toggleCheck2()}}>
            <BsArrowDown color={"white"}/>
        </div>
    :
        <div style={{backgroundColor: "#EFF7FF", border: "2px solid #0E0638",cursor: "pointer"}} onClick={()=>{setState2(!state2); toggleCheck2()}}>
            <BsArrowDownRight color={"#007AFF"}/>
        </div>;

    const [isChecked3, setIsChecked3] = useState(false);
    const toggleCheck3 = () => {
      setIsChecked3(!isChecked3);
    }
    const checkbox3 = isChecked3 ?
        <div style={{backgroundColor: "#0E0638",cursor: "pointer"}} onClick={()=>{setState3(!state3); toggleCheck3()}}>
            <BsArrowDown color={"white"}/>
        </div>
    :
        <div style={{backgroundColor: "#EFF7FF", border: "2px solid #0E0638",cursor: "pointer"}} onClick={()=>{setState3(!state3); toggleCheck3()}}>
            <BsArrowDownRight color={"#007AFF"}/>
        </div>;

    const [isChecked4, setIsChecked4] = useState(false);
    const toggleCheck4 = () => {
      setIsChecked4(!isChecked4);
    }
    const checkbox4 = isChecked4 ?
        <div style={{backgroundColor: "#0E0638",cursor: "pointer"}} onClick={()=>{setState4(!state4); toggleCheck4()}}>
            <BsArrowDown color={"white"}/>
        </div>
    :
        <div style={{backgroundColor: "#EFF7FF", border: "2px solid #0E0638",cursor: "pointer"}} onClick={()=>{setState4(!state4); toggleCheck4()}}>
            <BsArrowDownRight color={"#007AFF"}/>
        </div>;
    
    const [isChecked5, setIsChecked5] = useState(false);
    const toggleCheck5 = () => {
      setIsChecked5(!isChecked5);
    }
    const checkbox5 = isChecked5 ?
        <div style={{backgroundColor: "#0E0638",cursor: "pointer"}} onClick={()=>{setState5(!state5); toggleCheck5()}}>
            <BsArrowDown color={"white"}/>
        </div>
    :
        <div style={{backgroundColor: "#EFF7FF", border: "2px solid #0E0638",cursor: "pointer"}} onClick={()=>{setState5(!state5); toggleCheck5()}}>
            <BsArrowDownRight color={"#007AFF"}/>
        </div>;

    const [isChecked6, setIsChecked6] = useState(false);
    const toggleCheck6 = () => {
      setIsChecked6(!isChecked6);
    }
    const checkbox6 = isChecked6 ?
        <div style={{backgroundColor: "#0E0638",cursor: "pointer"}} onClick={()=>{setState6(!state6); toggleCheck6()}}>
            <BsArrowDown color={"white"}/>
        </div>
    :
        <div style={{backgroundColor: "#EFF7FF", border: "2px solid #0E0638",cursor: "pointer"}} onClick={()=>{setState6(!state6); toggleCheck6()}}>
            <BsArrowDownRight color={"#007AFF"}/>
        </div>;
    
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);
    const [state6, setState6] = useState(false);
    return (
        <>
        <Container id="#services">
            <h1>What We Do</h1>
            <p>Finding the best approach for your needs. Then, transform it into a delightfull interface, pleasure experience with impactful messag</p>
            <hr></hr>
            <Row>
                <Column1>
                    <ServicesImage src={img1}></ServicesImage>
                </Column1>
                <Column2>
                    <p>At Protodev, our UI/UX design services help businesses create user-friendly and visually appealing digital products.</p>
                </Column2>
                <Column3>
                    {checkbox1}
                </Column3>
            </Row>
            {state1 && 
                <Para>
                    <h4>At Protodev, our UI/UX design services help businesses create user-friendly and visually appealing digital products.</h4>
                    <p>Our team of experts will work with you to understand your business goals and design an intuitive user interface that enhances the user experience. Our services includes:</p>
                    <ul>
                        <li>Website Design</li>
                        <li>Product Design</li>
                        <li>App Design</li>
                        <li>Landing Page Design</li>
                    </ul>
                </Para>
            }
            <hr></hr>
            <Row>
                <Column1>
                    <ServicesImage src={img2}></ServicesImage>
                </Column1>
                <Column2>
                    <p>Our graphic design services at Protodev are tailored to help your business stand out.</p>
                </Column2>
                <Column3>
                    {checkbox2}
                </Column3>
            </Row>
            {state2 && 
                <Para>
                    <h4>Our graphic design services at Protodev are tailored to help your business stand out.</h4>
                    <p>We create visually stunning designs that align with your brand and communicate your message effectively. Our services includes:</p>
                    <ul>
                        <li>Logo Design</li>
                        <li>Product Packaging Design</li>
                        <li>Product design</li>
                        <li>Brand Identity</li>
                        <li>Marketing materials (brochures, flyers, posters, etc.)</li>
                        <li>Infographics</li>
                    </ul>
                </Para>
            }
            <hr></hr>
            <Row>
                <Column1>
                    <ServicesImage src={img3}></ServicesImage>
                </Column1>
                <Column2>
                    <p>Our website and application development services at Protodev are designed to help businesses create high-performing and scalable digital products.</p>
                </Column2>
                <Column3>
                    {checkbox3}
                </Column3>
            </Row>
            {state3 && 
                <Para>
                    <h4>Our website and application development services at Protodev are designed to help businesses create high-performing and scalable digital products.</h4>
                    <p>We specialize in creating responsive websites and mobile applications that are visually appealing, user-friendly, and easy to navigate. We specialize into the following domain:</p>
                    <ul>
                        <li>Frontend Development (React Js)</li>
                        <li>Mobile Development (React Native, Flutter)</li>
                        <li>Backend Development (Node JS, Python, Express JS)</li>
                    </ul>
                </Para>
            }
            <hr></hr>
            <Row>
                <Column1>
                    <ServicesImage src={img4}></ServicesImage>
                </Column1>
                <Column2>
                    <p>At Protodev, our content writing services help businesses create engaging and compelling content that resonates with their audience.</p>
                </Column2>
                <Column3>
                    {checkbox4}
                </Column3>
            </Row>
            {state4 && 
                <Para>
                    <h4>At Protodev, our content writing services help businesses create engaging and compelling content that resonates with their audience.</h4>
                    <p>Our team can deliver high-quality and SEO-friendly content that will help your business succeed. Whether you're in need of website copy, blog posts, articles, or any other form of written content. Our services includes:</p>
                    <ul>
                        <li>Website Copywriting</li>
                        <li>Article Writing</li>
                        <li>Email Copywriting</li>
                        <li>Blog Post Writing</li>
                        <li>Product Description Writing</li>
                        <li>Social Media Copywriting</li>
                    </ul>
                </Para>
            }
            <hr></hr>
            <Row>
                <Column1>
                    <ServicesImage src={img5}></ServicesImage>
                </Column1>
                <Column2>
                    <p>Our digital marketing services at Protodev help businesses reach their target audience and drive growth through various online channels.</p>
                </Column2>
                <Column3>
                    {checkbox5}
                </Column3>
            </Row>
            {state5 && 
                <Para>
                    <h4>Our digital marketing services at Protodev help businesses reach their target audience and drive growth through various online channels.</h4>
                    <p>Our team of experts will work with you to develop a comprehensive digital marketing strategy that includes SEO, PPC, social media, email marketing, and more. We specialize in creating campaigns that are tailored to your business goals and target audience, and we use data-driven insights to optimize and measure the success of your campaign.</p>
                </Para>
            }
            <hr></hr>
            <Row>
                <Column1>
                    <ServicesImage src={img6}></ServicesImage>
                </Column1>
                <Column2>
                    <p>Our social media management services at Protodev help businesses create and execute a comprehensive strategy to increase brand awareness, engage with their audience and drive business growth.</p>
                </Column2>
                <Column3>
                    {checkbox6}
                </Column3>
            </Row>
            {state6 && 
                <Para>
                    <h4>Our social media management services at Protodev help businesses create and execute a comprehensive strategy to increase brand awareness, engage with their audience and drive business growth.</h4>
                    <p>Our team of experts will work with you to understand your business and create content that aligns with your brand voice and message. We specialize in managing social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc.</p>
                    <ul>
                        <li>Social media account setup and optimization</li>
                        <li>Social media advertising and campaign management</li>
                        <li>Social media content creation and scheduling</li>
                    </ul>
                </Para>
            }
        </Container>
        </>
    );
}
export default Services;