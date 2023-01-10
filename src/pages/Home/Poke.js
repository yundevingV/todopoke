
import React ,{useEffect, useState} from "react";

/* 라이브러리 불러오기 */
import styled from "styled-components";

import Charizard from '../../img/Charizard.gif'

export default function Poke(){
// 860*900 해상도

    let dp = []

    for (let i = 1 ; i < 101 ; i ++){
        dp[i] = Number(i*i*i)
    }

    let CharizardExp = 10

    const [getExp,setExp] = useState(CharizardExp)
    const [level,setLevel] = useState(1)
    const [mod,setMod] = useState(1)

    
    
    

    useEffect(()=>{
        
        let mod3 = mod*mod*mod

    //     if ((getExp >= mod3) || (getExp <= 1000000 && getExp > 0)){
    //     setExp(getExp => getExp - (mod3))
    //     setLevel(level => level + 1)
    //     setMod(mod => mod + 1)
    // }   
        if ( getExp > mod3){
            setExp(getExp => getExp - (mod3))
            setLevel(level => level + 1)
            setMod(mod => mod + 1)

        }   
        return () =>{
    }

    },[getExp,level,mod])
    
    

    return(
        <>
            <Container>
                <NameWrapper>
                    <Name>
                    Charizard
                    </Name>
                </NameWrapper>

                <BodyWrapper>
                    <Body src={Charizard} alt='x'>

                    </Body>
                </BodyWrapper>

                <StatusWrapper>
                    
                    <Level>
                    레벨 : {level}  
                    </Level>

                    <Level>
                     경험치 : {getExp} {(getExp / mod * 100).toFixed(3) }%
                    </Level>
                </StatusWrapper>

            </Container>
        </>
    )
}

const Container = styled.div`
width: 40vw;
height: 60vh;

display : inline-block;
float : left;
margin-left : 5vw;

vertical-align: middle;
background: #FFFFFF;

border-radius : 2rem;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const NameWrapper = styled.div`

text-align : center;
padding-top: 0.5rem;
width: 40vw;
height : 5vh;

color : black;

border-bottom: 1px dotted black;

`

const NameFontSize = {
    pokeFontsize: '20px'
}
const Name = styled.span`
font-size : ${NameFontSize.pokeFontsize};

`

const BodyWrapper = styled.div`
text-align : center;
padding-top: 0.5rem;
width: 40vw;
height : 5vh;

display: block;
position: absolute;
top : 8vh;
`

const Body = styled.img`
width: calc(350px - 1vw);
height: calc(370px - 5vh);
`

const StatusWrapper = styled.div`
text-align : center;
padding-top: 0.5rem;
width: 40vw;
height : 5vh;

position: absolute;
top : 50vh;
`

const Level = styled.span`
padding : 0.5rem;
`


