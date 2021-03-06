
const initialState = {
    moviesFav: [],
    moviesListSearch:[],
    moviesAutoComplete:[],
    movieDetail:{},
    error:{}
}

function rootReducer (state=initialState,action) {
    switch(action.type){
        case "GET_MOVIES":          
            return {
                ...state,
                moviesListSearch: action.payload.results
            }
        case "GET_MOVIES_AUTOCOMPLETE":
            return {
                ...state,
                moviesAutoComplete:action.payload.results
            }
        case "CLEAN_AUTO_COMPLETE":
            return {
                ...state,
                moviesAutoComplete:[]
            }
        case "ADD_TO_FAVORITE":            
            return {
                ...state,
                moviesFav:[...state.moviesFav,action.payload]
            }
        case "REMOVE_FAVORITE":             
            const filter = state.moviesFav.filter(x=>x!==action.payload)         
            return {
                ...state,
                moviesFav:filter
            }
        case "MOVIE_DETAIL":
            console.log(action.payload)
            return {
                ...state,
                movieDetail:action.payload
            }
        case "CLEAN_DETAIL":
            return {
                ...state,
                movieDetail:{}
            }     
        case "SET_ERROR":         
            return {
                ...state,
                error:action.payload
            }
        case "CLEAN_ERROR":
            return {
                ...state,
                error:{}
            }
    default: return state
    }

}

export default rootReducer