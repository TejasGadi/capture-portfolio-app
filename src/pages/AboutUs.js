import React from "react";
// Import Page Components
import AboutSection from "../components/AboutSection.js";
import ServicesSection from "../components/ServicesSection.js";
import FaqSection from "../components/FaqSection.js";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollToTop from "../components/ScrollToTop.js";

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
            <ScrollToTop/>
        </motion.div>
    )
};

export default AboutUs;