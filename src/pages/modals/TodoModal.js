import React , {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import {add} from "../../modules/todo"

export default function TodoModal(props) {

const closeModal = () => {
  props.closeModal()
}

let dateType = props.dateType

let scoreList = []

if (dateType === 'Daily'){
  scoreList=['점수',1,2,4,5]
}

if (dateType === 'Weekly'){
  scoreList=['점수',10,20,30,40,50]
}

if (dateType === 'Monthly'){
  scoreList=['점수',100,200,300,400,500]
}

const [selected , setSelected] = useState('')

const handleSelect = (e) =>{
  setSelected(e.target.value)
}

const [target , setTarget] = useState('')

const handleTarget = (e) => {
  setTarget(e.target.value)
}

// 리덕스

const dispatch = useDispatch()

return (
    <ModalWrapper>
        <ModalBody>

          <ModalCloseButton onClick={()=>closeModal()}>
            X
          </ModalCloseButton>

          <DateType>
            {dateType}
          </DateType>

          <ContentWrapper>
            <Title>
              목표를 입력해주세요.
            </Title>
            <Input 
              onChange={handleTarget}
              value={target}>

            </Input>
            
          </ContentWrapper>

          <ScoreWrapper>
            <Title>
              점수를 선택해주세요.
            </Title>

            <Select onChange={handleSelect} value={selected}>  
              {scoreList.map((item) => (
                    <Option value={item} key={item}>
                      {item}
                    </Option>
                  ))}
            </Select>
          </ScoreWrapper>
          
          <SubmitWrapper>
            <SubmitButton
              onClick={()=>{
              dispatch
              (add(target,selected,dateType))
              closeModal()
              
              }}>

              등록하기 
            </SubmitButton>
          </SubmitWrapper>
        </ModalBody>

    </ModalWrapper>
    
  )
}


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBody = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
`

export const fontsize = {
  dateTypeFontsize: '25px',
  titleFontsize : '20px'
  
}

const DateType = styled.span`
font-family : "todoListFont";
font-size : ${fontsize.dateTypeFontsize};
font-weight : 1000;
`

const ContentWrapper = styled.div`
padding: 1rem;
`

const Title = styled.div`
font-family : "todoListFont";
font-size : ${fontsize.titleFontsize};
font-weight : 500;
padding: 10px;

`

const Input = styled.input`
width: 250px;
height: 25px;
`

const ScoreWrapper = styled.div`

`

const Select = styled.select`
width: 50px;
height: 30px;
`
const Option = styled.option`

`

const SubmitWrapper = styled.div`
position: absolute;
top:300px;
left: 115px;


`

const SubmitButton = styled.button`
width: 150px;
height: 30px;

border: 0;
border-radius : 10px;

background: #00a6ff;

color : #FFFFFF;

`