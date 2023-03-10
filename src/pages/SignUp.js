import React , {useState , useCallback} from "react";
import styled , {css} from "styled-components";

const ContainerWrapper = styled.div`
height: 100vh;
`
const Container = styled.div`
width : 40%;
height : 70%;
margin : 0 auto;
margin-top : 2rem ;
background : #FFFFFF;
border : 3px solid #146132;
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
    props.Submit &&
    css`
    padding: 0rem;
    width: 90%;
    display:flex;
    padding: 1rem;
    `}

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
    props.OverLap &&
    css`
    color: #9ED6C0;
    background: #FFFFFF;
    border: 4px solid #9ED6C0;
    width: 25%;
    &:hover{
        color: #FFFFFF;
        background: #9ED6C0;
        border: 1px solid #FFFFFF;
        transition: 0.3s;
    }
    `}

${(props) =>
    props.Submit &&
    css`
    color: #9ED6C0;
    background: #FFFFFF;
    border: 4px solid #9ED6C0;
    width: 25%;

    &:hover{
        color: #FFFFFF;
        background: #9ED6C0;
        border: 1px solid #FFFFFF;
        transition: 0.3s;
    }
    `}

${(props) =>
    props.Success &&
    css`
    width: 100%;
    color: #9ED6C0;
    background: #FFFFFF;
    border: 4px solid #9ED6C0;
    

    &:hover{
        color: #FFFFFF;
        background: #9ED6C0;
        border: 1px solid #FFFFFF;
        transition: 0.3s;
    }
    `}

`
const Message = styled.span`

color: ${props => props.color ? '#ff2727' : '#8f8c8b'};

`

function SignUp(){

    //????????????
    const [password,setPassword] = useState('')
    //???????????? ??????????????? ??????
    const [passwordMessage, setPasswordMessage] = useState('')

    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    //????????? ??????
    const [messageColor,setMessageColor] = useState('false')
    const [messageConfirmColor,setMessageConfirmColor] = useState('false')

    // ????????????
    const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage('??????+?????????+???????????? ???????????? 8?????? ?????? ??????????????????!')
        setMessageColor(true)

    } else {
        setPasswordMessage('????????? ?????????????????????.')
        setMessageColor(false)

    }
    }, [])

      // ???????????? ??????
    const onChangePasswordConfirm = useCallback((e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('??????????????? ???????????????.')
            setMessageConfirmColor(false)

        } else {
            setPasswordConfirmMessage('??????????????? ?????????. ?????? ??????????????????.')
            setMessageConfirmColor(true)

    }
    },
    [password])


    return(
    <>
    <ContainerWrapper>
        <Container>
            <Title>
                ????????????
            </Title>

            <Wrapper>
                <Input 
                    placeholder='???????????? ???????????????.'
                /> 
            </Wrapper>

            <Wrapper >
                <Input
                    placeholder='????????????' 
                    onChange={onChangePassword}
                    passwordText='???????????? (??????+?????????+???????????? ???????????? 8?????? ??????'
                    />
            <br />
            {password.length > 0 && (
                <Message color={messageColor}>{passwordMessage}</Message>
            )}
            </Wrapper>
            
            <Wrapper>
                <Input
                    placeholder='???????????? ??????' 
                    onChange={onChangePasswordConfirm}
                    passwordText=' '
                    />
            <br />
            {passwordConfirm.length > 0 && (
                <Message color={messageConfirmColor}>{passwordConfirmMessage}</Message>
            )}
            </Wrapper>

            <Wrapper >
                <Input placeholder='????????? ???????????????.' />
            </Wrapper>

            <Wrapper Submit>
                <Input placeholder='??????????????? ???????????????.' />
            </Wrapper>

            <Wrapper Success>
                <Button Success> ?????????????????? </Button>
            </Wrapper>

        </Container>
    </ContainerWrapper>    


    </>
    )
}

export default SignUp