import PropTypes from 'prop-types';
import './styles.scss';
import styled,{css} from 'styled-components'

export const ButtonTest=styled.button`
    position: relative;
    font-weight: bold;
    letter-spacing: 2px;
    display:inline-block;
    margin:10px;
    font-family:inherit;
    border-radius:22px;
    animation: radial-pulse 1s infinite;
    transition: .5s;
    padding: ${props=>props.size==="lg"? "15px 50px":"10px 20px"};
    ${props => (props.primary|props.secondary) && css`
    background: ${props.color};
    color: ${props.color==='white'?"black":"white"};
    border: 0;
    `}
    
    ${props=>props.outline&& css`
        background: inherit;
        color:${props.color};
        border: 2px  solid ${props.color};
        :hover{
            background:${props.color};
            color: ${props.color==='white'?"black":"white"};
        };
    `}
    
    :hover{
        transform: translateY(-10px)
    }
    :focus{
        outline: none;
    }
    @keyframes radial-pulse {
        from {
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
        }
   
        to {
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
    }


`

export function Testbutton({children='add',outline,secondary=false,primary=true,size="lg",color="red"}){
    if(secondary){
        color="grey"
    }
    const props={
        primary,
        secondary,
        outline,
        size,
        color
    }
    return (
        <ButtonTest {...props} >{children}</ButtonTest>
    )
}

Testbutton.propTypes={
    
    primary:PropTypes.bool,
    secondary:PropTypes.bool,
    outline:PropTypes.bool,
    color:PropTypes.string,
    size:PropTypes.string,
    children:PropTypes.element
}