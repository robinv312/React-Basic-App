import React, { useEffect, useRef,useContext } from 'react'
import classes from './Cockpit.module.css';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context'
const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext=useContext(AuthContext);

    useEffect(() => {
        console.log('cockpit useEffect');
        // setTimeout(() => {
        //     alert();
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('cockpit.js cleanup works in useEffect')
        };
    }, []);
    useEffect(() => {
        console.log('cockpit 2nd useEffect');
        return () => {
            console.log('cockpit cleanup work in the second useEffect');
        };
    });
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
    if (props.personslength <= 2) {
        classesfinal.push(classes.red);
    }
    if (props.personslength <= 1) {
        classesfinal.push(classes.bold);
    } return (
        <div >
            <h1>this is my first app</h1>
            <p className={classesfinal.join(' ')}>this is my first paragraph</p>
            <StyledButton ref={toggleBtnRef} alt={props.showpersons} onClick={props.clicked}>Click me</StyledButton>
            
            <StyledButton onClick={authContext.login}>log in</StyledButton>
          

        </div>
    );
};
export default React.memo(Cockpit);