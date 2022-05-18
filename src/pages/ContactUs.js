import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const ContactUS = () => {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: "white" }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle />
                    <a href="http://www.gmail.com"><h2>Send us an email</h2></a>
                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle />
                    <a href="http://www.instagram.com"><h2>Instagram</h2></a>
                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle />
                    <a href="http://www.linkedin.com"><h2>LinkedIn</h2></a>
                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle />
                    <a href="http://www.twitter.com"><h2>Twitter</h2></a>
                </Social>
            </Hide>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    min-height: 90vh;
    padding: 5rem 10rem;
    color: #353535;
`;
const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`;
const Circle = styled(motion.div)`
    border-radius: 50%;
    background: #353535;
    width: 3rem;
    height: 3rem;
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
    a{
        text-decoration: none;
        color: #353535;
    }
`;

export default ContactUS;