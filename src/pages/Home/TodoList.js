import React ,{useState} from "react";
import "../../font/Font.css"

/* 라이브러리 불러오기 */
import styled from "styled-components";

import Modal from "../modals/TodoModal"

export default function TodoList(props){

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
                        +
                    </DailyPlus>
                </DailyWrapper>

                <WeeklyWrapper>
                    <Weekly>
                        Weekly
                    </Weekly>

                    <WeeklyPlus 
                        onClick={()=>
                            {openModal()
                            choiceDateType('Weekly')}}>
                        +
                    </WeeklyPlus>
                </WeeklyWrapper>

                <MonthlyWrapper>
                    <Monthly>
                        Monthly
                    </Monthly>

                    <MonthlyPlus 
                        onClick={()=>
                            {openModal()
                            choiceDateType('Monthly')}}>
                        +
                    </MonthlyPlus>

                    {modalOpen ? 
                        <Modal 
                            dateType = {dateType}
                            closeModal={() => closeModal()}> 
                        </Modal>
                        : null}

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
background: #ff7047;
border-radius : 12px;

float : right;
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
background: #ff7047;
border-radius : 12px;

float : right;
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
background: #ff7047;
border-radius : 12px;

float : right;

`