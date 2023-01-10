import React from "react";

/* 라이브러리 불러오기 */
import styled from "styled-components";

export default function TodoList(){
    return(
        <>
            <Container>
                todoList
            </Container>
        </>
    )
}

const Container = styled.div`
width: 40vw;
height: 60vh;

display : inline-block;

float:right;
margin-left: 10vw;

background: #FFFFFF;

border-radius : 2rem;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`