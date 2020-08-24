import React, { Component } from 'react';
// import Radium,{ StyleRoot } from 'radium';
// import styled from 'styled-components';
import classes from './App.module.css';
// import Person from '../components/Persons/Person/Person.js'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';



class App extends Component {

  constructor(props) {
    super(props);

  }
  state = {
    person: [
      { id: 'a', name: "Robin" },
      { id: 'b', name: "Gracy" },
      { id: 'c', name: "Varghese" }
    ],
    showperson: false,
    showcockpit: true,
    changeCounter: 0,
    authenticated: false
  }


  static getDerivedStateFromProps(props, state) {
    return state;
  }

  // componentWillMount() {

  // }
  componentDidMount() {

  }
  componentDidUpdate() {
    console.log('app js componenetdidupdate');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('app js shouldComponentUpdate');
    if (nextProps.person !== this.state.person) {
      return true;
    } else {
      return false;
    }

  }

  deletepersonHandler = (personindex) => {
    // const persons = this.state.person;
    const persons = [...this.state.person]
    persons.splice(personindex, 1);
    this.setState({
      person: persons
    });
  }

  namechangedHandler = (event, id) => {
    const personindex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.person[personindex] };
    person.name = event.target.value
    const persons = [...this.state.person];
    persons[personindex] = person;


    this.setState({
      person: persons, changedCounter: this.state.changeCounter + 1
    });
  }

  toggleHandler = () => {

    const change = this.state.showperson;
    this.setState({
      showperson: !change
    });
  }


  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let person = null;
    if (this.state.showperson) {
      person = (
        <div>
          <Persons
            persons={this.state.person}
            clicked={this.deletepersonHandler}
            changed={this.namechangedHandler}
            isAuthenticated={this.state.authenticated} />



        </div>

      );


    }
    return (

      <Aux>


        <button onClick={() => { this.setState({ showcockpit: false }) }}>Remove cockpit</button>
        <AuthContext.Provider value={{authenticated:this.state.authenticated,login:this.loginHandler}}>
          {this.state.showcockpit ? (<Cockpit
            // persons={this.state.person}
            personslength={this.state.person.length}
            showpersons={this.state.showperson}
            clicked={this.toggleHandler}
             />) : null}
          {person}
        </AuthContext.Provider>

      </Aux>

    );
  }
}
export default withClass(App, classes.App);
