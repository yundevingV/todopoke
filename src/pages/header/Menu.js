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



`

const IconWrapper = styled.div`


`

const Icon = styled.span`
font-size : 1.5rem;
padding : 0.5rem;

`