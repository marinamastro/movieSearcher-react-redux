import React,{useState} from "react";
import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux";
import {getMovies,moviesFav} from "../actions";
import {Link} from "react-router-dom";

const MainStyled = styled.main`
margin-bottom:2rem;
    div.main{
        margin-top:0;
        min-height:100vh;
        background-image:url("http://www.hdfondos.eu/preview/get_photo/193246/2048/1152");
    }
    img{
        position:relative;
        max-width:100%;         
    }
    section.search{        
        background-color:rgba(255,255,255,0.5);
        padding:5rem;       
        text-align:center;                
    }
    button{
        max-height:50px;
    }
    input,button{
        padding:1rem;      
    }
    div{
        margin-top:4rem;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;   
        align-items:center;    
        div{
            flex-basis:30%;
            display:flex;
            flex-flow:row wrap;
            justify-content:center;
            @media (max-width:560px){
                flex-basis:80%;
            }
            h3{
                flex-basis:100%;
                text-align:center
            }
            h4{
                text-align:center;
                flex-basis:100%
            }
        }
    }
`

function Home (){
    const [title,setTitle] = useState("");
    const listMovies = useSelector(state=>state.moviesListSearch);   
    const favs = useSelector(state=>state.moviesFav);
    const dispatch = useDispatch(); 

   function handleChange (event){
        setTitle(event.target.value)
    }

    function handleClick(){
        dispatch(getMovies(title))
    }

    function addToFavorites (movie){
        dispatch(moviesFav(movie))
    }

    function moviesFavSearch (movie){        
        return favs.includes(movie)
    }
  
    return (
    <MainStyled>  
        <div className="main">           
            <section className="search">
                <input type="text" placeholder="Movie name" onChange={handleChange}/>
                <button onClick={handleClick}>Search</button>
            </section>
            </div>       
        <div>
            {listMovies.map(x=>{
                return (
                    <div key={x.imdbID}>
                        <img src={x.Poster}/>
                        <h3><Link to={`movie/${x.imdbID}`}>{x.Title} </Link></h3>
                        <h4>{x.Year}</h4>
                        <button onClick={()=>addToFavorites(x)}
                         disabled={moviesFavSearch(x) ? true : false}
                         style={moviesFavSearch(x) ? {"backgroundColor":"gray"} : {"backgroundColor":"#f37121"}}>
                               {moviesFavSearch(x) ? "Added" : "Add to favorites"} 
                        </button>
                    </div>
                )
            })}
        </div>
    </MainStyled>
  
    )}

export default Home