import React, { Component } from 'react';
import Radium from 'radium';
import classes from './Person.module.css'
import { render } from 'react-dom';
import Aux from '../../../hoc/Auxillary.js';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount() {
        // document.querySelector('input').focus();
        // this.inputEement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        return (
            <Aux>
                
                   { this.context.authenticated ? <p>Authenticated</p> : <p> PLease login</p>}
                

                <p key="i1" onClick={this.props.click}>This is a my name {this.props.name}</p>
                <p key="i2"> {this.props.children}</p>
                <input key="i3"
                    // ref={(inputEl) => {
                    //     this.inputEement = inputEl
                    // }}
                    ref={this.inputElementRef}
                    type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>

        );


    }



}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);