import styled, {css} from "styled-components";

export const SectionBtn = styled.div`
    gap: 14px;
    display: flex;    
    margin: auto 10px;
    
    @media screen and (max-width: 230px) {
        flex-direction: column;
        flex-wrap: wrap;
        gap: 4px;     
        align-items: center;
    }
`


type StyleBtnPropsType = {
    btnType: "outlined"|"primary"
}
export const StyBtn = styled.button<StyleBtnPropsType>`
    margin-top: 20px;
        
    font-size: 10px;
    text-align: center;
    border-radius: 5px;
    border: 2px solid #4E71FE;
    width: 86px;
    height: 30px;
    
    
    ${props => props.btnType === "outlined" && css<StyleBtnPropsType>`          
        color: #4E71FE;  
        background-color: transparent;`}

    ${props => props.btnType === "primary"  && css<StyleBtnPropsType>`  
        background-color: #4E71FE;  
        color: #FFFFFF;
        `}

    &:hover {
        color: #1e293b;
        background-color: #f8fafc;
        border: 2px solid #1e293b;
        cursor: pointer;
        transition: all 2s;
        transform: scale(1.1);}

    @media screen and (max-width: 230px){
        margin-top: 6px;
    }
`