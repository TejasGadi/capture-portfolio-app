import React from "react";
import styled from "styled-components";
// Import SVG's and images
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";
// Styles
import { Layout, Description, Image, Hide } from "../styles";
// Animations
import { scrollReveal } from "../animation";
// Scroll Animation
import { useScroll } from "../components/useScroll";


const ServicesSection = () => {
    const [element, controls] = useScroll({ thresholdValue: 0.25 });
    return (
        <Services ref={element} variants={scrollReveal} animate={controls} initial="hidden">
            <Description>
                <h2>High <span>quality</span> service</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>Pro Grade Gear</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="camera" />
            </Image>

        </Services>
    )
};

const Services = styled(Layout)`
    h2{
        padding-bottom: 4rem;
    }
    p{
        width: 70%;
        padding: 1rem 0rem 2rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width:1100px){
        justify-content: center;
    }
`;

const Card = styled.div`
    padding: 1rem;
    .icon{
       display : flex;
       align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`

export default ServicesSection;