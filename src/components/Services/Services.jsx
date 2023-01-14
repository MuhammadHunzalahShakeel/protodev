import React,{useState} from 'react'
import "./Services.css"
import ServicesNumber1 from "../../assets/ServicesNumber1.svg"
import ServicesNumber2 from "../../assets/ServicesNumber2.svg"
import ServicesNumber3 from "../../assets/ServicesNumber3.svg"
import ServicesNumber4 from "../../assets/ServicesNumber4.svg"
import ServicesNumber5 from "../../assets/ServicesNumber5.svg"
import ServicesNumber6 from "../../assets/ServicesNumber6.svg"
import ServicesArrowButton from "../../assets/ServicesArrowButton.svg"

const Services = () => {
  const[show1,setShow1]=useState(false);
  const[show2,setShow2]=useState(false);
  const[show3,setShow3]=useState(false);
  const[show4,setShow4]=useState(false);
  const[show5,setShow5]=useState(false);
  const[show6,setShow6]=useState(false);
 
  return (
   
    <section id='services'>
       <div className="services_container">
        <div className="services_heading">What We Do</div>
        <p className="service_paragraph">Finding the best approach for your needs. 
        Then, transform it into a delightfull interface, pleasure experience with impactful message.
        </p>
        <div className="divider"></div>

        {/* SERVICE NO 01 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber1} ></img></div>
        <div className='services1_para'>At Protodev, our UI/UX design services help businesses create user-friendly and visually appealing digital products.</div>
        <div onClick={()=>setShow1(!show1)}><img id='serviceimage1'  className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show1 && <div className='services1_innerpara'>
        <div className='service_mobile'>At Protodev, our UI/UX design services help businesses create user-friendly and visually appealing digital products.</div>
        Our team of experts will work with you to understand your business goals and design an intuitive user interface that enhances the user experience. Our services includes:
          <ul className='services1_innerul'>
            <li>Website Design</li>
            <li>App Design</li>
            <li>Product Design</li>
            <li>Landing Page Design</li>
          </ul>
        </div>
        
          }
        <div className="divider"></div>

        {/* SERVICE NO 02 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber2} ></img></div>
        <div className='services1_para'>Our graphic design services at Protodev are tailored to help your business stand out. 
        We create visually stunning designs that align with your brand and communicate your message effectively. </div>
        <div onClick={()=>setShow2(!show2)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show2 && <div className='services1_innerpara'>Whether you're in need of a new logo, website design, or marketing materials, we deliver high-quality and professional designs to elevate your business. Our services includes: 
          <ul className='services1_innerul'>
            <li>Logo Design</li>
            <li>Brand Identity </li>
            <li>Product Packaging Design</li>
            <li>Marketing materials (brochures, flyers, posters, etc.)</li>
            <li>Product design</li>
            <li>Infographics</li>
          </ul>
        </div>}
        <div className="divider"></div>

        {/* SERVICE NO 03 */}
        <div className="service1">
        <div ><img className='services_number1' alt='' src={ServicesNumber3} ></img></div>
        <div className='services1_para'>Our website and application development services at Protodev are designed to help businesses create high-performing and scalable digital products.
        We specialize in creating responsive websites and mobile applications that are visually appealing, user-friendly, and easy to navigate. </div>
        <div onClick={()=>setShow3(!show3)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show3 && <div className='services1_innerpara'>Whether you're looking to build a new website or mobile app, we can help you turn your ideas into reality. We specialize into the following domain:
          <ul className='services1_innerul'>
            <li>Frontend Development (React Js)</li>
            <li>Backend Development (Node JS, Python, Express JS)</li>
            <li>Mobile Development (React Native, Flutter)</li>
          </ul>
        </div>}
        <div className="divider"></div>

        {/* SERVICE NO 04 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber4} ></img></div>
        <div className='services1_para'>At Protodev, our content writing services help businesses create engaging and compelling content that resonates with their audience. </div>
        <div onClick={()=>setShow4(!show4)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show4 && <div className='services1_innerpara'>Whether you're in need of website copy, blog posts, articles, or any other form of written content, we can deliver high-quality and SEO-friendly content that will help your business succeed. Contact us today to see how we can help you elevate your online presence.
          <ul className='services1_innerul'>
            <li>Website Copywriting</li>
            <li>Blog Post Writing</li>
            <li>Article Writing</li>
            <li>Product Description Writing</li>
            <li>Email Copywriting</li>
            <li>Social Media Copywriting</li>
          </ul>
        </div>}
        <div className="divider"></div>

        {/* SERVICE NO 05 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber5} ></img></div>
        <div className='services1_para'>Our digital marketing services at Protodev help businesses reach their target audience and drive growth through various online channels. Our team of experts will work with you to develop a comprehensive digital marketing strategy that includes SEO, PPC, social media, email marketing, and more. </div>
        <div onClick={()=>setShow5(!show5)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show5 && <div className='services1_innerpara'>We specialize in creating campaigns that are tailored to your business goals and target audience, and we use data-driven insights to optimize and measure the success of your campaign. Whether you're looking to increase brand awareness, drive traffic, or generate leads, we can help you achieve your business objectives. Contact us today to see how we can help you grow your business online.
        </div>}
        <div className="divider"></div>

        {/* SERVICE NO 06 */}
        <div className="service1">
        <div><img className='services_number1' alt='' src={ServicesNumber6} ></img></div>
        <div className='services1_para'>Our social media management services at Protodev help businesses create and execute a comprehensive strategy to increase brand awareness, engage with their audience and drive business growth. </div>
        <div onClick={()=>setShow6(!show6)}><img className='service_arrowbutton' alt='' src={ServicesArrowButton} ></img></div>
        </div>
        {show6 && <div className='services1_innerpara'>Our team of experts will work with you to understand your business and create content that aligns with your brand voice and message. We specialize in managing social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc. and we use data-driven insights to optimize and measure the success of your campaign. 
          <ul className='services1_innerul'>
            <li>Social media account setup and optimization</li>
            <li>Social media content creation and scheduling</li>
            <li>Social media advertising and campaign management</li>
          </ul>
        </div>}
      </div>
    </section>
  )
}

export default Services
