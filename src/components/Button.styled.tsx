import styled, {css} from "styled-components";

export const SectionBtn = styled.section`
    gap: 13px;
    display: flex;
    margin: auto 20px;
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
    width: 86px; //хард код исправь
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
`