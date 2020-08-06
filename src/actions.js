export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
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
      return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
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