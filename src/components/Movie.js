import React from "react";
import {Link} from "react-router-dom"
 
function Movie (props){
    return <div key={props.x.id}>                        
            {props.x.poster_path?<img src={"http://image.tmdb.org/t/p/w500/"+props.x.poster_path}
             height="400px" />:<h5>Poster no disponible</h5>}
            <h3><Link to={`movie/${props.x.id}`}>{props.x.title} </Link></h3>
            <h4>{props.x.release_date}</h4>
            <button 
                onClick={()=>props.addToFavorites(props.x)}
                disabled={props.moviesFavSearch(props.x) ? true : false}
                style={props.moviesFavSearch(props.x) ? {"backgroundColor":"gray"} :
                 {"backgroundColor":"#f37121"}}
            >
                {props.moviesFavSearch(props.x) ? "Added" : "Add to favorites"} 
            </button>
        </div>
}

export default Movie