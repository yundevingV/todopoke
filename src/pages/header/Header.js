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

            <ButtonWrapper>

                <LoginButton>
                    <LoginButtonLink to='/Login' >
                        <LoginSpan>
                            Login
                        </LoginSpan>
                    </LoginButtonLink>
                </LoginButton>

                <SignUpButton>
                    <SignUpButtonLink to='/SignUp' >
                        <SignUpSpan>
                            Sign Up
                        </SignUpSpan>
                        
                    </SignUpButtonLink>
                </SignUpButton>


            </ButtonWrapper>

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

const ButtonWrapper = styled.div`
float: right;
`
const SignUpButton = styled.button`
width : 90px;
height: 30px;

background: transparent;

margin : 10px;
float : right;

border: 0px;

`

const SignUpButtonLink = styled(Link)`
color: black;
text-decoration : none;

`

const LoginButton = styled.button`
width : 90px;
height: 30px;

background: #00a6ff;
color : #FFFFFF;
border : 1px solid black;
border-radius : 15px;
margin : 10px;

float : right;
&:hover{
        color: #000000;
        background: #FFFFFF;
        transition: 0.5s;
    }

`
const LoginButtonLink = styled(Link)`
color: black;
text-decoration : none;

`
const SignUpSpan = styled.span`

&:hover{
        color: #FFFFFF;
    }
`

const LoginSpan = styled.span`


`

const MenuContainer = styled.div`

position : absolute;
top : 15vh;
right : 1.5vw;

`