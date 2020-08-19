import React from "react";
import {Link} from "react-router-dom";
import HeaderStyled from "./styled-components/HeaderStyled"

export default function Header (){
    return (
    <HeaderStyled>
        <h1>moviesearcher</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/favs">Favorites</Link>
        </nav>
    </HeaderStyled>
    )}