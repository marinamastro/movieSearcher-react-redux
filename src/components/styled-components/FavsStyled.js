import styled from "styled-components";

const FavsStyled = styled.section`
display:flex;
flex-flow:row wrap;
justify-content:center;
margin:5%;
    div{
        margin-right:2rem;
        flex-basis:30%;
        margin-bottom:2rem;
        h3,h4{
            text-align:center
        }
        button{
            display:block;
            margin:auto;
            padding:1rem;
        }
    }

`
export default FavsStyled