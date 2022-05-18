import { motion } from "framer-motion";
import styled from "styled-components";

export const Layout = styled(motion.div)`
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem;
    color: white;
    flex-wrap: wrap;
    flex-basis: 80rem;
    @media (max-width:1100px){
        flex-direction: column;
        text-align: center;
        padding: 3rem;
        button{
            margin: 1rem 0rem 2rem 0rem;
            font-size: 1.4rem;
            padding: 1.2rem;
        }
    }
`;
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    padding-bottom: 5rem;
    @media (max-width:1100px){
        padding: 3rem;
    }
    h2{
        font-weight: lighter;
    }
`;
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
    @media (max-width:1100px){
            width: 100%;
        }
`;

export const Hide = styled.div`
    overflow: hidden;
`;