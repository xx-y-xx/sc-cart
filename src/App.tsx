import './App.css'
import styled from "styled-components";
import imgDesert from "./assets/desert.png";
import {StyBtn} from "./components/Button.styled.tsx";

function App() {

    return (
        <>
            <Box>
                <Card>
                    <ImgCard src={imgDesert}></ImgCard>
                    <Title>Headline</Title>
                    <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in  venen.</Description>
                    <StyBtn btnType={"primary"}>See more</StyBtn>
                    <StyBtn btnType={"outlined"}>Save</StyBtn>
                </Card>
            </Box>
        </>
    )
}
const Title = styled.h2`
    font-size: 16px;
    margin: auto 20px ;
`
const Description = styled.p`
    font-size: 12px;
    color: #ABB3BA;
    line-height: 1.66667;
    margin: 20px 20px auto 20px;
    text-align: start;
`
const ImgCard = styled.img`
    display: block;
    width: 280px;   
    height: 170px;  
    object-fit: cover;
    margin: 10px 10px 20px 10px;
`
const Box = styled.div`// пока временно
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    box-shadow: 20px 20px 40px 0 rgba(81, 91, 117, 0.25);
    border-radius: 10px;
    max-width: 300px; //хард коде
    max-height: 350px;    
`



export default App