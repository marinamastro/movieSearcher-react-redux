import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getMovies,moviesFav,setError,cleanError} from "../actions";
import {Link} from "react-router-dom";
import HomeStyled from "./styled-components/HomeStyled";
import flecha from "../flecha-hacia-abajo.svg"

function Home (){
    const [title,setTitle] = useState("");  
    const listMovies = useSelector(state=>state.moviesListSearch);   
    const favs = useSelector(state=>state.moviesFav);
    const error = useSelector(state=>state.error.text);
    const dispatch = useDispatch(); 
   

   function handleChange (event){
        setTitle(event.target.value)
    }

    function handleClick(){
        if(!title){
            dispatch(setError({text:"You have to enter a name"}))
        }     
        else{    
        dispatch(cleanError());   
        dispatch(getMovies(title));
        setTitle("");         
        }
    }

    function addToFavorites (movie){
        dispatch(moviesFav(movie))
    }

    function moviesFavSearch (movie){        
        return favs.includes(movie)
    }
 
    function scrollDissappear(elementoAanimar){          
        let posicionElemento=elementoAanimar&&elementoAanimar.getBoundingClientRect().top; 
        let pantalla=window.innerHeight/1.3;    
        if(posicionElemento<pantalla){
            elementoAanimar&&elementoAanimar.classList.add("hid")
        }   
    }
  
    useEffect(()=>{       
         window.addEventListener("scroll",()=>{scrollDissappear(document.querySelector(".flecha"))});       
         if(listMovies.length===0){
         document.querySelector(".flecha").classList.add("hid");                 
        }       
         else{
            document.querySelector(".flecha").classList.remove("hid");                     
        }                    
    },[listMovies])

 

    return (
    <HomeStyled>  
        <div className="main">           
            <section className="search">
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" placeholder="Movie name" value={title} onChange={handleChange}/>
                    <button onClick={handleClick}>Search</button>
                </form>
               {error && <strong style={{color:"red"}}>{error}</strong>}
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
        <img src={flecha} alt="" className="flecha hid"/>
    </HomeStyled>
  
    )}

export default Home