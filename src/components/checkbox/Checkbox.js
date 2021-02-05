import React, { useEffect, useState } from 'react'
import styled from 'styled-components';



const CheckContainer=styled.div`
    margin:10px;
    padding: 2px;
    border: 1px solid white;
    width: 50px;
    height: 20px;
    border-radius: 22px;
    --shadowcolor:${props=>props.procent===0?"#00000061":"#0008ff91"};
    box-shadow: 0px 0px 2px 2px var(--shadowcolor);


`
const CheckCircle=styled.div`
    transform: translateX(${props=>props.procent}%);
    transition: 1s;
    width: 45%;
    height: 100%;
    border-radius: 22px;
    background-color: ${props=>props.procent===0?"#00000061":"#0008ff91"}


`

export const Checkbox = ({onlyUnactive,onlyActive,onChange,defaultChecked,disabled,checked=false}) => {
    
    const [procent,setProcent]=useState(defaultChecked?100:0)
    const checkedHandler=()=>{
        setProcent(procent===0?100:0);
        checked=!checked
    }
    useEffect(()=>{
        if(onChange){
            if(onlyActive){
                if(procent===100)onChange()
                
            } else if(onlyUnactive){
                if(procent===0)onChange()
            }else{onChange()}
            
        }
    },[procent])
    defaultChecked?checked=true:checked=false
    return (
        <CheckContainer  procent={procent} onClick={disabled?null:checkedHandler}>
            <CheckCircle procent={procent}></CheckCircle>
        </CheckContainer>
    )
}

