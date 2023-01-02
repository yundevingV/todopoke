import React from "react";
/* 라이브러리 불러오기 */
import styled , {css} from "styled-components";

import {Link} from "react-router-dom";

/* 컴포넌트 불러오기 */
import Header from '../header/Header'


function Home(){
    return(
        <>
        <Link to='/SignUp' >
                
        SignUp(회원가입) 페이지로 이동
        </Link>
        
        <Container>
            <Header />
            
        </Container>
        </>

    )
}

export default Home

const Container = styled.div`

`