import styled from "styled-components";
const HomeStyled = styled.main`
margin-bottom:2rem;
    div.main{
        margin-top:0;
        min-height:100vh;
        background-image:url("http://www.hdfondos.eu/preview/get_photo/193246/2048/1152");
    }
    img{
        position:relative;
        max-width:100%;         
    }
    section.search{        
        background-color:rgba(255,255,255,0.5);
        padding:5rem;       
        text-align:center;                
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