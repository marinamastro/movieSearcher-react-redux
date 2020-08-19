const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query=" + titulo)
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
      return fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key="+API_KEY)
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