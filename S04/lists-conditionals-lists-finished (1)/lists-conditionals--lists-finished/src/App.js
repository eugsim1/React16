import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      // unique identified added to imporve react 
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // function is having an id to postion the element on the list
  //
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // one the previous function is getting the id of the array person element
    // then i m gettting  the person array element details
    // we dont mutate the initial eleement but we create a javascript object
    // ... using this convetion to access the original element
    const person = {
      ...this.state.persons[personIndex]
    };
    // another approach previous is more modern
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // update the object
    person.name = event.target.value;

    // get the array
    const persons = [...this.state.persons];
    // update the position
    persons[personIndex] = person;

    // set the state 
    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // const persons = this.state.persons => this is the first version of the code
    const persons = [...this.state.persons];
    // persons.slice  => remove 1 element from the array
    persons.splice(personIndex, 1);
    // update the array 
    // const persons is modified because as an aaray holds a reference not a new objet !
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;  // treu of false
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    // check to see if varble should be rentred
    // person variable  => to JSX code

    // dynamic rendering a list of elements
    //

    if ( this.state.showPersons ) {
      persons = (
        <div>
        {/*
          curlly braces for javascript scope
          map convert array (javascript)
          this.state.person.map(person => ..)
          person.name person.age, person.id ...
        */}
        { //output a list
          // added the deletePerson
          // added a key property to make react efficient
          // the initial list need an unique id
          // added changed which is executed when the react app changes ...

          this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
        })}
        {/*
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        */}
        </div>
      );
    }

    // return will handle no the persons variable
    // and renter it
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/*
            persons rendre nothing or all 
          */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
