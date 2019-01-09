import React, { Component } from 'react';
import './App.css';
// import from Person.js file folder Person/Person.js file
import Person from './Person/Person';
// state for components from React
// jacscrp object

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // only one line for console.log is working ok !
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    // this.setState for react to change the object with the exissting data
    // Stephanie age will be changed to 27, newName ... ovewrite
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name:  event.target.value, age: 26 }
      ]
    } )
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '10px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    // this.state.persons[0] to access the property
    // in the code
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
{/*
    this is a comment on JSX

    handling events onClick() swithNameHandler => function to be called

*/}
        <button   
        // style ccs  
          style={style}
         
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name
    
          </button>
        <Person>This is a person</Person>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Name =>Max , clicked on max tab')}
          changed={this.nameChangedHandler}
          />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
        /*             to use the property to Person js    
           click on the second row
           the new name on the first goes Maw ! twisted
                */
          click={this.switchNameHandler.bind(this, 'Maxo malakas you cliecke on Many tag')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          changed={this.nameChangedHandler}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
