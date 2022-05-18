import React from "react";
import home1 from "../img/home1.png";
import { Layout, Description, Image, Hide } from "../styles";
// Framer Motion->To add animations to the react components
import { motion } from "framer-motion";
import { titleAnim, fade, zoomOutAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {


    return (
        <Layout animate={{ transition: { when: "afterChildren" } }}>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas. We have professionals with excellent skills</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={zoomOutAnim} src={home1} alt="guy with a camera in hand" />
            </Image>
            <Wave />
        </Layout>
    )
};
// Styled Components
// Are imported from styles.js which contains frequently used styles


export default AboutSection;