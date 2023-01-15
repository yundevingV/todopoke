import React from "react";
import "../../font/Font.css"
// 라이브러리
import {Link} from "react-router-dom"
import styled from "styled-components";

// 컴포넌트
import Menu from "./Menu"

export default function Header(){
    return(
        <HeaderContainer>
            <Title>
                Todo Poke !
            </Title>
            <SignUpButton>
                <SignUpButtonLink to='/SignUp' >
                    Sign Up
                </SignUpButtonLink>
            </SignUpButton>

            <LoginButton>
                <LoginButtonLink to='/Login' >
                    Login
                </LoginButtonLink>
            </LoginButton>

        <MenuContainer>
            <Menu />
        </MenuContainer>

        </HeaderContainer>

    )
}



export const fontsize = {
    titleFontsize: '40px',
    
}

const Title = styled.span`

font-family : "todopokeFont";
font-size : ${fontsize.titleFontsize};
font-weight : 1000;
`

const HeaderContainer = styled.div`
    width: 95vw;
    height : 7vh;
    background : #00a6ff;

    padding : 2rem;

    position : relative;
    //특정 높이나 넓이 넘으면 정적 사이즈로 변경
`

const SignUpButton = styled.button`
width : 7vh;
height: 5vh;

background: #FFFFFF;
color : #00a6ff;
border : 1px dashed black;

margin : 1vh;
margin-right : 3vh;

float : right;

&:hover{
        color: #FFFFFF;
        background: #00a6ff;
        border : 3px dashed black;
        transition: 0.5s;
    }
`

const SignUpButtonLink = styled(Link)`
color: black;
text-decoration : none;

`

const LoginButton = styled.button`
width : 7vh;
height: 5vh;

background: #FFFFFF;
color : #00a6ff;
border : 1px dashed black;

margin : 1vh;

float : right;
&:hover{
        color: #FFFFFF;
        background: #00a6ff;
        border : 3px dashed black;
        transition: 0.5s;
    }

`
const LoginButtonLink = styled(Link)`
color: black;
text-decoration : none;

`

const MenuContainer = styled.div`

position : absolute;
top : 15vh;
right : 1.5vw;

`