import React,{useRef} from "react";
import {useDispatch} from "react-redux";
import AutoCompleteStyled from "./styled-components/AutoCompleteStyled";
import {getMovies} from "../redux/actions";


function AutoComplete(props){
    const dispatch = useDispatch(); 
    const autoc = useRef(null);
    return (
        <AutoCompleteStyled className="auto" ref={autoc}>
           {props.listMovies&&props.listMovies.map(x=>{
           return <p onClick={()=>{
            props.setTitle("")
           autoc.current.classList.add("hiden")
           dispatch(getMovies(x.title))}}>{x.title}</p>})}
            </AutoCompleteStyled>
    )
}

export default AutoComplete