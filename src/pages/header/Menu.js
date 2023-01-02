import React from "react";

import styled from "styled-components";

export default function Menu(){
    return(
        <>
        <MenuCotainer>
            <IconWrapper>
                <Icon>
                    👜
                </Icon>
                <Icon>
                    🏆
                </Icon>
                <Icon>
                    📃
                </Icon>
                <Icon>
                    📆  
                </Icon>
            </IconWrapper>
            
        </MenuCotainer>
        </>
    )
}

const MenuCotainer = styled.div`
background: #FFFFFF;

float : right;
`

const IconWrapper = styled.div`
display : inline-block;


`

const Icon = styled.span`
font-size : 1.5rem;
padding : 0.5rem;

`