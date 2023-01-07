import React  from "react";

// 라이브러리
import styled , {css} from "styled-components";
import Axios from "axios";

function Login(){
    return(
        <>
            <Container>
                <TitleWrapper>
                    <Title>
                        TodoPoke
                    </Title>
                </TitleWrapper>

                <InputWrapper>
                    <Input 
                        placeholder='아이디'/>

                    <Input 
                        placeholder='비밀번호'/>
                </InputWrapper>

                <SubmitButtonWrapper>
                    <SubmitButton>
                        <SubmitButtonFont>
                            로그인 하기
                        </SubmitButtonFont>
                    </SubmitButton>   
                </SubmitButtonWrapper>

                <SubWrapper>
                    <Sub>
                        아이디찾기
                    </Sub>
                    <Sub>
                        비밀번호찾기
                    </Sub>
                    <Sub>
                        회원가입
                    </Sub>
                </SubWrapper>

            </Container>
        </>
    )
}

export default Login

const Container = styled.div`
position: relative;
top : 5vh;

height: fit-content;
margin-left : calc(50vw - 225px);

`

const TitleWrapper = styled.div`
margin-left : calc(225px - 80px);
`


const NameFontSize = {
    titleFontsize: '40px'
}
const Title = styled.p`
font-size : ${NameFontSize.titleFontsize};
`

const InputWrapper = styled.div`

`

const Input = styled.input`
display : block;
width : 450px;
height: 40px;
text-align: left;
overflow: hidden;

margin-bottom: 1rem;
::placeholder {
    font-weight : bold;
    font-size : 1rem;
}
`

const SubmitButtonWrapper = styled.div`

`
const SubmitButton = styled.button`
display : block;
width : 458px;
height : 50px;
background : #FFFFFF;
&:hover {
    background : #20a8d8;
    color : #FFFFFF;
    transition: 0.3s;
}
`

const SubmitButtonFont = styled.span`
font-weight : bold;
font-size : 1.5rem;
padding: 1rem;
`

const SubWrapper = styled.div`
margin-top: 0.5rem;
`

const Sub = styled.span`

margin-right: 1.5rem;
`