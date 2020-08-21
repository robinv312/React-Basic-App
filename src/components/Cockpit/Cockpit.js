import React from 'react'
import classes from './Cockpit.module.css';
import styled from 'styled-components';
const cockpit = (props) => {
    const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font:inherit;
padding:8px;
cursor:pointer;
border:1px solid blue;
&:hover{
  background-color:  ${props => props.alt ? 'salmon' : 'lightgreen'};
  color:black;
}
`;
    let classesfinal = [];
    if (props.persons.length <= 2) {
        classesfinal.push(classes.red);
    }

    if (props.persons.length <= 1) {
        classesfinal.push(classes.bold);
    }

    return (
        <div >
            <h1>this is my first app</h1>
            <p className={classesfinal.join(' ')}>this is my first paragraph</p>
            <StyledButton alt={props.showpersons} onClick={props.clicked}>Click me</StyledButton>
        </div>
    );
};

export default cockpit