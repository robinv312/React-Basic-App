import React, { Component } from 'react';
// import Radium,{ StyleRoot } from 'radium';
// import styled from 'styled-components';
import './App.css';
// import Person from '../components/Persons/Person/Person.js'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'



class App extends Component{
  state = {
    person : [
      {id:'a',name:"Robin"},
      {id:'b',name:"Gracy"},
      {id:'c',name:"Varghese"}
    ],
    showperson:false
  }

deletepersonHandler= (personindex)=>{
  // const persons = this.state.person;
  const persons=[...this.state.person]
  persons.splice(personindex,1);
  this.setState({
    person:persons
  });
}

namechangedHandler = (event,id)=>{
  const personindex = this.state.person.findIndex(p=>{
    return p.id===id;
  });
  const person = {...this.state.person[personindex]};
  person.name= event.target.value
  const persons = [...this.state.person];
  persons[personindex] = person;


    this.setState({
      person:persons
    });
  }

  toggleHandler=()=>{

    const change =this.state.showperson;
    this.setState({
      showperson : !change
});
  }
 
  render(){

    // const style={
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font:'inherit',
    //   padding:'8px',
    //   cursor:'pointer',
    //   border:'1px solid blue',
    //   ':hover':{
    //     backgroundColor: 'lightgreen',
    //     color:'black'
    //   }


    // };

    let person = null;
    if(this.state.showperson){
      person=(
        <div>
          <Persons
           persons={this.state.person}
           clicked={this.deletepersonHandler}
           changed={this.namechangedHandler}/>

        

        </div>

      );


    }
return(
      
     <div className="App">
       
        <Cockpit  
        persons={this.state.person}
        showpersons={this.state.showperson}
        clicked={this.toggleHandler}/>
       {person}

       </div>
    
    );
  }
}
export default App;
