import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const HeaderStyled = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Red+Rose:wght@700&display=swap');
    position:sticky;
    top:0;
    z-index:2;
    background-color:#0C151E;
    display:flex;   
    align-items:center;
    flex-basis:100%;
    border-bottom:2px solid white;

    h1{
        flex-basis:50%;
        font-family: 'Red Rose', cursive;
        color:#f37121;
        margin-left:4rem
    }
    nav{
        flex-basis:50%;
        display:flex;
        justify-content:flex-end;
        margin-right:4rem
    }
    @media (max-width:560px){
        flex-flow:row wrap;
        justify-content:center;
        h1{
            margin-left:0;           
        }
        nav{
            justify-content:center;
            flex-basis:100%;
            margin-right:0
        }
    }
    a{
        margin-right:1rem;
        color:white;
        text-decoration:none;
        font-size:1.2rem
    }
    a:hover{
        color:#f37121
    }

`



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