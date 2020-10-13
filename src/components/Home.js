import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getMovies,moviesFav,setError,cleanError,getMoviesAuto,cleanAuto} from "../redux/actions";
import {Link} from "react-router-dom";
import HomeStyled from "./styled-components/HomeStyled";
import flecha from "../flecha-hacia-abajo.svg";
import AutoComplete from "./AutoComplete";

function Home (){
    const [title,setTitle] = useState("");  
    const listMovies = useSelector(state=>state.moviesListSearch); 
    const moviesAutoComplete = useSelector(state=>state.moviesAutoComplete)  
    const favs = useSelector(state=>state.moviesFav);
    const error = useSelector(state=>state.error.text);
    const dispatch = useDispatch(); 
   

   function handleChange (event){
        setTitle(event.target.value);
        dispatch(cleanError());      
       
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
 
    function scrollDissappear(elemento){          
        let posicionElemento=elemento&&elemento.getBoundingClientRect().top; 
        let pantalla=window.innerHeight/1.3;    
        if(posicionElemento<pantalla){
            elemento&&elemento.classList.add("hid")
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
        return ()=>{
            window.removeEventListener("scroll",scrollDissappear)
        }                
    },[listMovies])

   useEffect(()=>{
        dispatch(getMoviesAuto(title))
        if(title.length===0){
            dispatch(cleanAuto())
        }
    },[title])

    return (
    <HomeStyled>  
        <div className="main">           
            <section className="search">
                <form onSubmit={(e)=>{e.preventDefault();setTitle("")}}>
                    <input type="text" placeholder="Movie name" value={title} onChange={handleChange}/>                   
                    <button onClick={handleClick}>Search</button>                   
                </form>               
               {error && <strong style={{color:"red"}}>{error}</strong>}      
               {moviesAutoComplete&&<AutoComplete setTitle={setTitle}  listMovies = {moviesAutoComplete}/>}       
            </section>          
            </div>       
        <div>
            {listMovies.map(x=>{
                return (                   
                    <div key={x.id}>                        
                        {x.poster_path?<img src={"http://image.tmdb.org/t/p/w500/"+x.poster_path} height="400px" />:<h5>Poster no disponible</h5>}
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