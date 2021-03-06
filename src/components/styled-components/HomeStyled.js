import styled from "styled-components";
import fondo from "../../fondo.jpg"

const HomeStyled = styled.main`
.hid{
    display:none
}
@keyframes flecha {
    from{
        transform:translateY(-20px)
    }
    to{
        transform:translateY(0)
    }
}
margin-bottom:2rem;
    div.main{
        margin-top:0;
        min-height:100vh;
        background-image:url(${fondo});
        position:relative;  
        @media (max-width:560px){
                width:100%;
            }     
    }
    img{
        position:relative;
        max-width:100%;         
    }
    img.flecha{
        position:absolute;
        right:1rem;
        bottom:0;
        width:10%;
        animation-name:flecha;
        animation-duration:2s;
        animation-iteration-count:infinite;
    }
    section.search{        
        background-color:rgba(255,255,255,0.5);
        padding:5rem;       
        text-align:center;   
        position: relative;
        @media (max-width:560px){
                width:100%;
            }   
        form {
            display:flex;  
            @media (max-width:560px){
                justify-content:center;
                width:100%;
            }          
        }             
        .auto{
            margin:0
        }
        .hiden{
        display: none;
        }
    }
    button{
        max-height:50px;
    }
    input,button{
        padding:1rem;      
    }
    div{
        margin-top:4rem;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;   
        align-items:center;    
        div{
            flex-basis:30%;
            display:flex;
            flex-flow:row wrap;
            justify-content:center;
            margin-bottom:3rem;
            margin-right:1rem;
            @media (max-width:560px){
                flex-basis:80%;
            }
            h3{
                flex-basis:100%;
                text-align:center
            }
            h4{
                text-align:center;
                flex-basis:100%
            }
        }
    }
`
export default HomeStyled