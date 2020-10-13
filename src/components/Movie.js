import React,{useEffect} from "react";
import {movieDetail,cleanDetail} from "../redux/actions";
import {useSelector,useDispatch} from "react-redux";
import MovieStyled from "./styled-components/MovieStyled"


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
            <div>{movie.title}</div>
            <article>               
                { movie.backdrop_path? 
                <img src={"http://image.tmdb.org/t/p/w500/"+movie.backdrop_path}/>:
                <img src={"http://image.tmdb.org/t/p/w500/"+movie.poster_path}/>}                         
                <p style={{textAlign:"left"}}>    
                    <strong>Plot: </strong>{movie.overview}.<br/>
                    <strong>Popularity: </strong>{movie.popularity}.<br/>
                    <strong>Genres: </strong>
                    {movie.genres && movie.genres.map(x=>{
                        return <span>{x.name}. </span>
                    })}
                    <br/>
                    <strong>Released: </strong>{movie.release_date}.<br/>
                    <strong>Runtime: </strong>{movie.runtime} m.<br/>
                    <strong>Vote Average: </strong>{movie.vote_average}.<br/>
                    <strong>Production: </strong>
                    <span>
                    {movie.production_companies && movie.production_companies.map(x=>{
                        return(
                         <p style={{"marginBlockStart": 0}}>
                            {x.logo_path ? <img src={"http://image.tmdb.org/t/p/w45/"+x.logo_path} alt="logo"/>:  <span>  {x.name}. </span> }                             
                        </p>
                        )
                    })}
                    </span>                  
                </p>
            </article>
        </MovieStyled>
    )
}

export default Movie