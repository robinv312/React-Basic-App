import React, { Component } from 'react';
import logo from './logo.svg';
// import Radium,{ StyleRoot } from 'radium';
import classes from'./App.css';
import Person from './Person/Person.js'

// const StyledButton= styled.button`
// background-color: ${props=>props.alt? 'red':'green'};
// color: white;
// font:inherit;
// padding:8px;
// cursor:pointer;
// border:1px solid blue;
// &:hover{
//   background-color:  ${props=>props.alt? 'salmon':'lightgreen'};
//   color:black;
// }
// `;

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

    const style={
      backgroundColor: 'green',
      color: 'white',
      font:'inherit',
      padding:'8px',
      cursor:'pointer',
      border:'1px solid blue',
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'black'
      }


    };

    let person = null;
    if(this.state.showperson){
      person=(
        <div>
          {this.state.person.map((w,index)=>{
            return<Person
            click= {()=>this.deletepersonHandler(index)}
            name={w.name}
            key={w.id}
            changed= {(event)=>this.namechangedHandler(event,w.id)}/>
          })}
        

        </div>

      );
      // style.backgroundColor='red';
      // style[':hover']={
      //   backgroundColor: 'salmon',
      //   color:'black'
      // }

    }

    let classes = [];
    if(this.state.person.length <=2){
      classes.push('red');
    }

    if(this.state.person.length <=1){
      classes.push('bold');
    }



    return(
      
    
     <div className="App">
       
        <h1>this is my first app</h1>
        <p className={classes.join(' ')}>this is my first paragraph</p>
        <button  onClick={this.toggleHandler}>Click me</button>
       {person}

      
       </div>
      
  
    );
  }
}
export default App;
