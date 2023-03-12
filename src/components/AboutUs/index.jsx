import React from "react";
import { 
    Box,
    Row,
    Link,
    AboutImage
} from "./AboutElements";

const About = () => {
    return (
        <>
        <Box id="#aboutus">
            <Row>
                <span style={{color: "#007aff"}}>Who </span><span>Are We?</span>
                <p>We're a software company that specializes in digital software solutions for your brand, product or services . We're a company that takes pride in our work, and we want to make sure you understand how important it is to us.</p>
                <p>We believe in being straightforward and honest with our customers, whether that means telling them about the things we do well or the things that aren't so great. We want to make sure our clients get what they expect from us—and more!</p>
                <p>We know you're busy, so we'll be as efficient as possible with your project. We'll get back to you quickly so you can move on with your life.</p>
                <p>At Protodev, we believe there's no better feeling than seeing something you've created come alive online—and then seeing it spread around the world!</p>
                <Link to="#contactus" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                    <AboutImage src="/static/media/NewProjectButton.svg"></AboutImage>
                </Link>
            </Row>
        </Box>
        </>
    );
}
export default About;