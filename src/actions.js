
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${titulo}`)
        .then(response => response.json())
        .then(json => {           
          dispatch({ type: "GET_MOVIES", payload: json })     
        });
    };
  }
  export function getMoviesAuto(titulo) {
    return function(dispatch) {
      return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${titulo}`)
        .then(response => response.json())
        .then(json => {          
          dispatch({ type: "GET_MOVIES_AUTOCOMPLETE", payload: json });
        });
    };
  }
export function moviesFav (movie){
      return {
          type: "ADD_TO_FAVORITE",
          payload:movie
      }
  }
export function removeFav (movie){
    return {
        type: "REMOVE_FAVORITE",
        payload:movie
    }
}
export function movieDetail(id) {
    return function(dispatch) {
      return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        .then(response => response.json())
        .then(json => {       
          dispatch({ type: "MOVIE_DETAIL", payload: json });
        });
    };
  }

export function cleanDetail (){
    return {
        type: "CLEAN_DETAIL"        
    }
}
export function cleanAuto (){
  return {
      type: "CLEAN_AUTO_COMPLETE"        
  }
}
export function setError (error){
  return {
      type: "SET_ERROR",
      payload:error              
  }
}
export function cleanError (){
  return {
      type: "CLEAN_ERROR"                
  }
}