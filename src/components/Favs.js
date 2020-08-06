import React from "react";
import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux";
import {removeFav} from "../actions";
import {Link} from "react-router-dom"

const FavsStyled = styled.section`
display:flex;
flex-flow:row wrap;
justify-content:center;
margin:5%;
    div{
        flex-basis:30%;
        margin-bottom:2rem;
        h3,h4{
            text-align:center
        }
        button{
            display:block;
            margin:auto;
            padding:1rem;
        }
    }

`

function Favs () {
    const favs = useSelector(state=>state.moviesFav);
    const dispatch = useDispatch();

    function handleClick (movie){
        dispatch(removeFav(movie))
    }
    return (       
        <React.Fragment>
            <h1 style={{textAlign:"center"}}>My favorites movies</h1>
            { favs.length===0 ? <h2 style={{textAlign:"center",color:"#f37121"}}>You still don't have favorites movies!</h2> : 
            <FavsStyled>
                {favs.map(x=>{
                    return (                       
                            <div key={x.imdbID+1}>                               
                                <img src={x.Poster}/>
                                <h3>  <Link to={`movie/${x.imdbID}`}>{x.Title} </Link></h3>
                                <h4>{x.Year}</h4>
                                <button onClick={()=>handleClick(x)}>Remove from favorites</button>                               
                            </div>                      
                    )
                })}
            </FavsStyled>
         }   
          </React.Fragment>  
    )
}

export default Favs