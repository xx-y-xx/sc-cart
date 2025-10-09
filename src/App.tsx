import './App.css'
import styled from "styled-components";
import imgDesert from "./assets/desert.png";
import {StyBtn} from "./components/Button.styled.tsx";
import {SectionBtn} from "./components/Button.styled.tsx"
import {Description, Title} from "./components/TextBlock.styled.tsx"
import {ImgCard} from "./components/ImgCard.styled.tsx";
import {Card} from "./components/Card.styled.tsx"


function App() {

    return (
        <>
            <Box>
                <Card>
                    <ImgCard src={imgDesert} alt="пустыня"></ImgCard>
                    <Title>Headline</Title>
                    <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</Description>
                    <SectionBtn>
                        <StyBtn btnType={"primary"}>See more</StyBtn>
                        <StyBtn btnType={"outlined"}>Save</StyBtn>
                    </SectionBtn>

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
export default App