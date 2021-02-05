import styled, { css } from 'styled-components'
import { Error } from './Error'
import {Svg} from './Svg'



const InputContainer=styled.div`
    display: flex;
    justify-content: center;
    width:250px;
    height: 35px;
    color: ${props=>props.max}; 
    transition: 1s all;
    ${props=>props.max==="red"&&css`
        :hover{box-shadow:0 0 10px 5px ${props=>props.max}}
        
    `}
    :hover{
        transform: translateY(-5px);
        border: 1px solid ${props=>props.max}
    }
    
`
const InputField=styled.input`
        margin-left:10px;
        letter-spacing: 1px;
        background:inherit;
        color:black;
        border:none;
        
        :focus{
            outline:none;
        };

`
const SvgContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: 1s all;
    background: ${props=>props.max};

`

export const Input = ({maxLength,disabled=false,id,value,onChange,onPressEnter,defaultValue}) => {
            const max=value.length>maxLength?"red":"#4b238c";
    return (
        <>
            <InputContainer max={max} >
                <SvgContainer max={max}>
                    {value.length>maxLength?(<Error fill="white" width={20} height={20} />):(<Svg fill="white" width={20} height={20} />)}
                </SvgContainer>
                <InputField  disabled={disabled?true:false} value={value?value:defaultValue} id={id} onChange={onChange} onKeyPress={onPressEnter}/>
            </InputContainer>
            
            
        </>
    )
}


