import styled from "styled-components";


const MovieStyled = styled.section`
    display:flex;
    justify-content:center;
    text-align:center;
    margin-top:2rem;
    flex-flow:row wrap;
    align-items:center;
    margin-bottom:2rem;
    div{
        flex-basis:60%;
        padding:1rem;
        background-color:#f37121
    }
    article{      
        flex-basis:60%;
        padding:1rem;
        background-color:#cedebd;
        color:black;
        display:flex;
            img{
                flex-basis:50%
            }
            p{
                margin-left:1rem;
                flex-basis:50%
            }
            @media (max-width:560px){         
            display: flex;
            flex-flow:row wrap;
            justify-content:center;
            img{
                flex-basis:100%
            }
            p{
                flex-basis:100%
            }

        } 
    }
`

export default MovieStyled