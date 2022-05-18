import React from "react";
import styled from "styled-components";
import { Layout, Description, Image, Hide } from "../styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "../components/useScroll";
// Animations
import { scrollReveal } from "../animation";

const FaqSection = () => {
    const [element, controls] = useScroll({ thresholdValue: 0.5 });
    return (
        <Faq ref={element} variants={scrollReveal} animate={controls} initial="hidden">
            <h2>Any questions? <span>FAQ</span></h2>
            <LayoutGroup>
                <Toggle title="How do I start?">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="What Products do you offer?">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Methods">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </Toggle>
            </LayoutGroup>
        </Faq>
    )
};

const Faq = styled(Layout)`
    display: block;
    @media (max-width:1100px){
        margin-top  : 10rem;
    }
    span{
        display: block;
    }
    h2,h4{
        color: white;
    }
    h2{
        padding-bottom: 1.6rem;
        font-weight: lighter;
    }
    h4{
        font-size: 1.6rem;
        margin-top: 5rem;
    }
    .faq-line{
        background:#cccccc;
        height: 0.2rem;
        width: 100%;
        margin: 2rem 0rem;
    }
    .question{
        padding: 2rem 0rem;
        cursor: pointer;
        font-weight: 100;
    }
    .answer{
        padding: 1rem 0rem;
        p{
            padding: 0.5rem 0rem;
        }
    }
`

export default FaqSection;