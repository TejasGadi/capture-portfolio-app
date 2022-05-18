import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (min-width:1701px) {
            font-size: 95%;
        }
        @media (max-width:1350px) {
            font-size: 80%;
        }
    }
    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }
    span{
        color: #23d997;
        font-weight: bold;
    }
    a{
        font-size: 1.1rem;
    }
    button{
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 0.6rem 1.2rem;
        border: 2px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.3s ease-in;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h1{
        font-size: 3.3rem;
        font-weight: 300;
    }
    h2{
        font-size: 3.2rem;
        font-weight: lighter;
    } 
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    p{
        color: #ccc;
        font-size: 1.2rem;
        padding: 1rem 0rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;