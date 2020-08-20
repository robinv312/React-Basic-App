import React from 'react';
import Radium from 'radium';
import styled from 'styled-components'

const StyledDiv = styled.div`

    width:60%;
    margin:auto;
    border:1px solid #eee;
    box-shadow: 0px 2px 3px #ccc;
    padding:16px;
    text-align: center;

    '@media (min-width:500px)':{
        width:'450px'

    }



`;

const person = (props) =>{

return (
<StyledDiv>
    <p onClick={props.click}>This is a my name {props.name}</p>
    <p> {props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
);



}
export default Radium(person);