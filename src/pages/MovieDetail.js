import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
import Award from "../components/Award";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.pathname;
    // States
    // Movies=>array of objects of individual movie
    const [movies, setMovies] = useState(MovieState);
    // Movie state to store current movie
    const [movie, setMovie] = useState(null);
    // When changes occur in states movies and url the useEffect runs and certain action is executed
    useEffect(() => {
        const currentMovie = movies.filter((eachmovie) => eachmovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);
    return (
        <>
            {(movie && (
                <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                    <Headline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="" />
                    </Headline>
                    <Awards>
                        {
                            movie.awards.map((award) => {
                                return (<Award title={award.title} description={award.description} />)
                            })
                        }
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="secondaryImg" />
                    </ImageDisplay>
                </Details>))}
        </>
    )
};

const Details = styled(motion.div)`
    color: white;
`
const Headline = styled.div`
    min-height: 90vh;
    padding-top:20vh;
    position: relative;
    h2{
        position: absolute;
        top:10%;
        left: 50%;
        transform: translate(-50%,-10%);padding-bottom:2rem;
    }
    img{
        height: 70vh;
        width:100%;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    margin: 5rem 10rem;
    display: flex;
    flex:1 1 30rem; 
    align-items: center;
    justify-content: space-around;
`;

const ImageDisplay = styled.div`
  min-height  : 50vh;
  img{
      width: 100%;
      height: 100vh;
      object-fit: cover;
  }

`;

export default MovieDetail;