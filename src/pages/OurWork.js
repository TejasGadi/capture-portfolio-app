import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, zoomOutAnim, fade, lineAnim, sliderTransition, sliderContainer } from "../animation";
// useScroll
import { useScroll } from "../components/useScroll";
// ScrollToTop
import ScrollToTop from "../components/ScrollToTop";

const OurWork = () => {
    const [element, controls] = useScroll({ thresholdValue: 0.5 });
    const [element1, controls1] = useScroll({ thresholdValue: 0.5 });
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: "white" }}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={sliderTransition}></Frame1>
                <Frame2 variants={sliderTransition}></Frame2>
                <Frame3 variants={sliderTransition}></Frame3>
                <Frame4 variants={sliderTransition}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={zoomOutAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <motion.img variants={zoomOutAnim} src={theracer} alt="theracer" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element1} variants={fade} animate={controls1} initial="hidden">
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <motion.img variants={zoomOutAnim} src={goodtimes} alt="goodtimes" />
                    </Hide>
                </Link>
            </Movie>
            <ScrollToTop/>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    padding: 5rem 10rem;
    @media (max-width:1100px){
        padding: 3rem 3rem;
    }
    /* Added overflow:hidden because we may animate it and it should not overflow */
    overflow: hidden;
    /* background: white; */
    h2{
        padding: 1rem 0rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        height: 70vh;
        width: 100%;
        object-fit: cover;
    }
`;

const Hide = styled.div`
  overflow : hidden;
`;

const Frame1 = styled(motion.div)`
  position  : fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;