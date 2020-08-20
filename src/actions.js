
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("https://api.themoviedb.org/3/search/movie?api_key=00a34788f5928d2f5dc907d4549dc1d3&query=" + titulo)
        .then(response => response.json())
        .then(json => {           
          dispatch({ type: "GET_MOVIES", payload: json });
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
      return fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=00a34788f5928d2f5dc907d4549dc1d3")
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