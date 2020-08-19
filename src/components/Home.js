import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getMovies,moviesFav} from "../actions";
import {Link} from "react-router-dom";
import HomeStyled from "./styled-components/HomeStyled";

function Home (){
    const [title,setTitle] = useState("");
    const listMovies = useSelector(state=>state.moviesListSearch);   
    const favs = useSelector(state=>state.moviesFav);
    const dispatch = useDispatch(); 

   function handleChange (event){
        setTitle(event.target.value)
    }

    function handleClick(){
        if(!title){
            alert("You have to enter a name")
        }else{
        dispatch(getMovies(title));
        setTitle("")
        }
    }

    function addToFavorites (movie){
        dispatch(moviesFav(movie))
    }

    function moviesFavSearch (movie){        
        return favs.includes(movie)
    }
  
    return (
    <HomeStyled>  
        <div className="main">           
            <section className="search">
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" placeholder="Movie name" value={title} onChange={handleChange}/>
                    <button onClick={handleClick}>Search</button>
                </form>
            </section>
            </div>       
        <div>
            {listMovies.map(x=>{
                return (
                    <div key={x.id}>
                        <img src={"http://image.tmdb.org/t/p/w500/"+x.poster_path} />
                        <h3><Link to={`movie/${x.id}`}>{x.title} </Link></h3>
                        <h4>{x.release_date}</h4>
                        <button onClick={()=>addToFavorites(x)}
                         disabled={moviesFavSearch(x) ? true : false}
                         style={moviesFavSearch(x) ? {"backgroundColor":"gray"} : {"backgroundColor":"#f37121"}}>
                               {moviesFavSearch(x) ? "Added" : "Add to favorites"} 
                        </button>
                    </div>
                )
            })}
        </div>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt ="logomdb"/>
    </HomeStyled>
  
    )}

export default Home