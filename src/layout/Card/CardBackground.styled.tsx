import styled from "styled-components";

export const CardBackground = styled.article`
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 300px; //хард коде
    min-height: 350px;
    background-color: #FFFFFF;
    padding: 10px 10px 20px;
    
    @media screen and (max-width: 230px){
        padding: 8px 0;
    }
`