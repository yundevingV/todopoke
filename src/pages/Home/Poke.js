
import React from "react";

/* 라이브러리 불러오기 */
import styled from "styled-components";


export default function Poke(){
    return(
        <>
            <Container>
                <NameWrapper>
                    <Name>
                        포켓몬이름
                    </Name>
                </NameWrapper>
                
            </Container>
        </>
    )
}

const Container = styled.div`
width: 40vw;
height: 60vh;

display : inline-block;
float : left;
margin-left : 5vw;

vertical-align: middle;
background: #ffd7e2;

border-radius : 2rem;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const NameWrapper = styled.div`

text-align : center;
padding-top: 0.5rem;
width: 40vw;
height : 5vh;

color : black;

border-bottom: 1px dotted black;

`

const NameFontSize = {
    pokeFontsize: '20px'
}
const Name = styled.span`
font-size : ${NameFontSize.pokeFontsize};

`

