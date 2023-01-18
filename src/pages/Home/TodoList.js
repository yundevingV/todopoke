import React ,{useState} from "react";
import "../../font/Font.css"

/* 라이브러리 불러오기 */
import styled from "styled-components";
import { useSelector } from "react-redux";

import Modal from "../modals/TodoModal"

export function TodoThings({item}){

    
    return(
        <>
            
                    <TodoThingsWrapper>
                        <ItemWrapper>
                            목표 : {item.target} 
                        </ItemWrapper>
                        
                        <ItemWrapper>
                            경험치 : {item.score} 
                        </ItemWrapper>
                        
                        <ButtonWrapper>
                            <SuccessButton>
                                ✅
                            </SuccessButton>
                            <DeleteButton>
                                ❌
                            </DeleteButton>
                        </ButtonWrapper>
                        

                    </TodoThingsWrapper>
        </>
    )
}

const TodoThingsWrapper = styled.div`
padding: 5px;

box-shadow: 1px 10px 20px rgba(0,0,0,0.10), 0 1px 1px rgba(0,0,0,0.1);

margin: 10px;
`

const ItemWrapper = styled.div`
margin-left: 5px;
display: inline-block;

`
const ButtonWrapper = styled.div`
display: inline-block;
float : right;
`

const DeleteButton = styled.button`
border: 0px solid #FFFFFF;
background: transparent;
`

const SuccessButton = styled.button`
border: 0px solid #FFFFFF;
background: transparent;

`
export default function TodoList(props){
    const list = useSelector((state) => state.todo.list)

    // 모달창 만들기
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const [dateType , setDateType] = useState(false)

    const choiceDateType = (dateType) => {
        setDateType(dateType)
    }

    return(
        <>
            <Container>
                <TitleWrapper>
                    <Title>
                        todoList
                    </Title>
                </TitleWrapper>

                <DailyWrapper>
                    <Daily>
                        Daily
                    </Daily>

                    <DailyPlus 
                        onClick={()=>
                            {openModal()
                            choiceDateType('Daily')}}
                        >
                        <Pensil>
                            📝
                        </Pensil>
                    </DailyPlus>

                    {list
                    .filter((item)=> item.datetype === 'Daily')
                    .map(item => (
                        <TodoThings item={item} key={item.id} />
                    ))}

                </DailyWrapper>

                <WeeklyWrapper>
                    <Weekly>
                        Weekly
                    </Weekly>

                    <WeeklyPlus 
                        onClick={()=>
                            {openModal()
                            choiceDateType('Weekly')}}>
                        <Pensil>
                            📝
                        </Pensil>
                    </WeeklyPlus>

                    {list
                    .filter((item)=> item.datetype === 'Weekly')
                    .map(item => (
                        <TodoThings item={item} key={item.id} />
                    ))}

                </WeeklyWrapper>

                <MonthlyWrapper>
                    <Monthly>
                        Monthly
                    </Monthly>

                    <MonthlyPlus 
                        onClick={()=>
                            {openModal()
                            choiceDateType('Monthly')}}>
                        <Pensil>
                            📝
                        </Pensil>
                        
                    </MonthlyPlus>

                    {modalOpen ? 
                        <Modal 
                            dateType = {dateType}
                            closeModal={() => closeModal()}> 
                        </Modal>
                        : null}

                    {list
                    .filter((item)=> item.datetype === 'Monthly')
                    .map(item => (
                        <TodoThings item={item} key={item.id} />
                    ))}

                </MonthlyWrapper>
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

export const fontsize = {
    titleFontsize: '25px',
    pencilFontSize : '20px'
}

const TitleWrapper = styled.div`
text-align : center;
padding-top: 0.5rem;
width: 40vw;
height : 5vh;

`

const Title = styled.span`

font-family : "todoListFont";
font-size : ${fontsize.titleFontsize};
font-weight : 1000;

`

const DailyWrapper = styled.div`
margin-bottom : 3vh;

width : 40vw;
height : fit-content;
`

const Daily = styled.span`
font-weight : 1000;

`

const DailyPlus = styled.button`

border: 0px;
background: transparent;
float: right;

`

const WeeklyWrapper = styled.div`
margin-bottom : 3vh;

width : 40vw;
height : fit-content;
`

const Weekly = styled.span`
font-weight : 1000;

`

const WeeklyPlus = styled.button`
border: 0px;
background: transparent;
float: right;
`

const MonthlyWrapper = styled.div`
margin-bottom : 3vh;

width : 40vw;
height : fit-content;


`

const Monthly = styled.span`
font-weight : 1000;

`

const MonthlyPlus = styled.button`
border: 0px;
background: transparent;
float: right;

`

const Pensil = styled.span`
font-size : ${fontsize.pencilFontSize};

`