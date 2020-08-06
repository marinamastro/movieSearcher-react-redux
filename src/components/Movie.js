import React,{useEffect} from "react";
import {movieDetail,cleanDetail} from "../actions";
import {useSelector,useDispatch} from "react-redux";
import styled from "styled-components";

const MovieStyled = styled.section`
    display:flex;
    justify-content:center;
    text-align:center;
    margin-top:2rem;
    flex-flow:row wrap;
    align-items:center;
    margin-bottom:2rem;
    div{
        flex-basis:60%;
        padding:1rem;
        background-color:#f37121
    }
    article{      
        flex-basis:60%;
        padding:1rem;
        background-color:#cedebd;
        color:black;
        display:flex;
            img{
                flex-basis:50%
            }
            p{
                margin-left:1rem;
                flex-basis:50%
            }
            @media (max-width:560px){         
            display: flex;
            flex-flow:row wrap;
            justify-content:center;
            img{
                flex-basis:100%
            }
            p{
                flex-basis:100%
            }

        } 
    }
`


function Movie (props) {  
    const id = props.match.match.params.id;
    const dispatch = useDispatch();
    const movie=useSelector(state=>state.movieDetail);

   useEffect(()=>{
    dispatch(movieDetail(id));
    return ()=>{
        dispatch(cleanDetail())
    }
   },[id])

    return (
        <MovieStyled>
            <div>{movie.Title}</div>
            <article>
                <img src={movie.Poster} />              
                <p style={{textAlign:"left"}}> 
                    <strong>Type: </strong>{movie.Type}.<br/>   
                    <strong>Actors: </strong>{movie.Actors}.<br/>
                    <strong>Plot: </strong>{movie.Plot}.<br/>
                    <strong>Director: </strong>{movie.Director}.<br/>
                    <strong>Genre: </strong>{movie.Genre}.<br/>
                    <strong>Released: </strong>{movie.Released}.<br/>
                    <strong>Runtime: </strong>{movie.Runtime}.<br/>
                    <strong>Writer: </strong>{movie.Writer}.<br/>
                    <strong>Production: </strong>{movie.Production}.<br/>
                    <strong>Awards: </strong>{movie.Awards}.<br/>
                </p>
            </article>
        </MovieStyled>
    )
}

export default Movie