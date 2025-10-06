import './App.css'
import styled from "styled-components";
import imgDesert from "./assets/desert.png";

function App() {

    return (
        <>
            <Box>
                <Card>
                    <img src={imgDesert} alt="пустыня"/>
                    <h2>Headline</h2>
                    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                    <StyBtn>See more</StyBtn>
                    <StyBtn>Save</StyBtn>
                </Card>
            </Box>
        </>
    )
}

const Box = styled.div`// пока временно
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    box-shadow: 5px 5px 20px
    
`
const StyBtn = styled.button`
    margin: 12px;
    color: #FFFFFF;
    background-color: #4E71FE;
    font-size: 10px;
    text-align: center;
    border-radius: 5px;
    border: 2px solid #4E71FE;
    width: 86px; //хард код исправь
    height: 30px;

    &:hover {
        color: #1e293b;
        background-color: #f8fafc;
        border: 2px solid #1e293b;
        cursor: pointer;
`


export default App