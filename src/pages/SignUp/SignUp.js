import React , {useState , useCallback} from "react";

// 라이브러리
import styled , {css} from "styled-components";
import Axios from "axios";


const ContainerWrapper = styled.div`
height: 100vh;
`
const Container = styled.div`
width : 40vh;
height : fit-content;
margin : 0 auto;
margin-top : 2rem ;
background : #FFFFFF;
border : 3px solid #00a6ff;
`

const Title = styled.div`
font-weight : bold;
text-align : center;
font-size : 3rem;
padding-bottom: 2rem;
`

const Input = styled.input`
color : block;
height: 40px;
width: 90%;

margin: 0 auto;
::placeholder {
    font-weight : bold;
    font-size : 1rem;
}
`
const Wrapper = styled.div`
display: inline-block;
padding: 1rem;
width: 100%;
margin-bottom : ${(props) => props.marginBottom};

${(props) =>
    props.Success &&
    css`
    padding: 0rem;
    `}

${(props) =>
    props.Button &&
    css`
    padding: 0rem;
    width: 50%;
    display:inline-block;
    `}

`

const Button = styled.button`
margin: 0 auto;
color : block;
height : 3rem;
width : 70%;
font-weight : bold;


${(props) =>
    props.Success &&
    css`
    width: 100%;
    color: #000000;
    background: #FFFFFF;
    border : 0.1px 0px 0px 0px solid #000000;
    
    

    &:hover{
        color: #FFFFFF;
        background: #000000;
        transition: 0.3s;
    }
    `}

`
const Message = styled.span`

color: ${props => props.color ? '#ff2727' : '#8f8c8b'};

`

function SignUp(){

    //비밀번호
    const [password,setPassword] = useState('')
    //비밀번호 오류메시지 저장
    const [passwordMessage, setPasswordMessage] = useState('')

    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    //메시지 색깔
    const [messageColor,setMessageColor] = useState('false')
    const [messageConfirmColor,setMessageConfirmColor] = useState('false')

    // 비밀번호
    const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
        setMessageColor(true)

    } else {
        setPasswordMessage('안전한 비밀번호입니다.')
        setMessageColor(false)

    }
    }, [])

      // 비밀번호 확인
    const onChangePasswordConfirm = useCallback((e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호가 일치합니다.')
            setMessageConfirmColor(false)

        } else {
            setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요.')
            setMessageConfirmColor(true)

    }
    },
    [password])
    Axios.defaults.withCredentials = true; // withCredentials 전역 설정

    const submit = () => {
        Axios.get("http://localhost:8000/", {}).then(() => {
            alert("등록 완료!")
        },
        
        );
    };

    return(
    <>
    <ContainerWrapper>
        <Container>
            <Title>
                회원가입
            </Title>

            <Wrapper>
                <Input 
                    placeholder='아이디를 입력하세요.'
                /> 
            </Wrapper>

            <Wrapper >
                <Input
                    placeholder='비밀번호' 
                    onChange={onChangePassword}
                    passwordText='비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상'
                    />
            <br />
            {password.length > 0 && (
                <Message color={messageColor}>{passwordMessage}</Message>
            )}
            </Wrapper>
            
            <Wrapper>
                <Input
                    placeholder='비밀번호 확인' 
                    onChange={onChangePasswordConfirm}
                    passwordText=' '
                    />
            <br />
            {passwordConfirm.length > 0 && (
                <Message color={messageConfirmColor}>{passwordConfirmMessage}</Message>
            )}
            </Wrapper>

            <Wrapper >
                <Input placeholder='이름을 입력하세요.' />
            </Wrapper>

            <Wrapper>
                <Input placeholder='전화번호를 입력하세요.' />
            </Wrapper>

            <Wrapper Success>
                <Button 
                    Success
                    onClick={()=>submit()}> 회원가입하기 </Button>
            </Wrapper>

        </Container>
    </ContainerWrapper>    


    </>
    )
}

export default SignUp