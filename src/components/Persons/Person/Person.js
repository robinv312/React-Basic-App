import React from 'react';
import Radium from 'radium';
import classes from './Person.module.css'

const person = (props) => {


    return (
        <div className={classes.Person}>
            <p onClick={props.click}>This is a my name {props.name}</p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );



}
export default Radium(person);