import styled from "styled-components";
import imgDesert from "../../assets/desert.png";
import {StyBtn} from "../../components/Button.styled.tsx";
import {SectionBtn} from "../../components/Button.styled.tsx"
import {Description, Title} from "./TextBlock.styled.tsx";
import {ImgCard} from "./ImgCard.styled.tsx";
import {CardBackground} from "./CardBackground.styled.tsx";

const dataCard = [
    {
        imgCard: imgDesert,
        alt: 'пустыня',
        title: 'Headline',
        description: 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare inn venen',
    },    {
        imgCard: imgDesert,
        alt: 'пустыня',
        title: 'Headline',
        description: 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare inn venen',
    },    {
        imgCard: imgDesert,
        alt: 'пустыня',
        title: 'Headline',
        description: 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare inn venen',
    },    {
        imgCard: imgDesert,
        alt: 'пустыня',
        title: 'Headline',
        description: 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare inn venen',
    },
]

export const Card = () => {
    return (
        <div>
            <Wrapper>
                {dataCard.map((c, index) => {
                    return (
                        <CardBackground key={index}>
                            <ImgCard src={c.imgCard} alt={c.alt}></ImgCard>
                            <Title>{c.title}</Title>
                            <Description>{c.description}</Description>
                            <SectionBtn>
                                <StyBtn btnType={"primary"}>See more</StyBtn>
                                <StyBtn btnType={"outlined"}>Save</StyBtn>
                            </SectionBtn>
                        </CardBackground>
                    )
                })}
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
    flex-wrap: wrap;
`