import styled from "styled-components";

const AutoCompleteStyled = styled.div`
    background-color:white;
    color:black;  
    border-bottom:1px solid gray;
    width:60%;
    position:absolute;
    top:130px;
    z-index:2;
    p{
        padding: 0.7rem 0;
        margin:0;
        width:100%;
        &:hover{
        cursor: pointer;
        background-color:rgb(215,215,215);
    }
    }
    
`

export default AutoCompleteStyled