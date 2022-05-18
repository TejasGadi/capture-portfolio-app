import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <Link to={"/"}>
                <h1>Capture</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    h1{
        color: white;
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding: 0rem 2rem;
        /* For Line Animation*/
        position: relative;
    }
    @media (max-width:1100px){
        flex-direction: column;
        min-height: 15vh;
        a{
            font-size: 1.3rem;
            h1{
                font-size: 2rem;
                padding-bottom: 1.3rem;
            }
        }
        ul{
            justify-content: space-around;
            width: 100%;
        }
        li{
            min-width: 8rem;
        }
    }
`;

export default Nav;