import React from "react";

// 라이브러리
import {Link} from "react-router-dom"
import styled from "styled-components";

// 컴포넌트
import Menu from "./Menu"

export default function Header(){
    return(
        <HeaderContainer>
            Todo Poke !

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

const MenuContainer = styled.div`

position : absolute;
top : 15vh;
right : 5vh;

`

const HeaderContainer = styled.div`
    width: 100%;
    height : 10vh;
    background : #00a6ff;

    padding : 2vh;

    position : relative;
    
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