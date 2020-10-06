import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {removeFav} from "../actions";
import {Link} from "react-router-dom";
import FavsStyled from "./styled-components/FavsStyled";


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
                            <div key={x.id+1}>                               
                                <img src={"http://image.tmdb.org/t/p/w500/"+x.poster_path} height="500px"/>
                                <h3>  <Link to={`movie/${x.id}`}>{x.title} </Link></h3>
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