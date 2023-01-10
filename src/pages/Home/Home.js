import React from "react";
/* 라이브러리 불러오기 */
import styled  from "styled-components";


/* 컴포넌트 불러오기 */
import Header from '../header/Header'

import Poke from './Poke'
import TodoList from './TodoList'

function Home(){
    return(
        <>
        
        <Container>
            <Header />
            <MainContainer>
                <Poke />
                <TodoList />
            </MainContainer>
        </Container>
        </>

    )
}

export default Home

const Container = styled.div`
padding: 0rem;
margin: 0rem;
`

const MainContainer = styled.div`

display : inline-block;
position: relative;
top : 8vh;


`