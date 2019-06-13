import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css'

/*
  PROPS
  - Props are passed from parent (wrapping component) to a child (embedded component)
  - when Props changes it will re-render our DOM
  
  STATE
  - State is managed from inside a component
  - state is only available in class based react component
  - when state changes it will re-render our DOM
*/

/*
  List of supported Events: 
  - https://reactjs.org/docs/events.html#supported-events
  - https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8124210#overview


*/
class App extends Component {

  /* App is a Stateful / Smart / Container component as it has an internal state */

  /* state is a reserved word */
  state = {
    persons: [
      {name: 'Kamran', age: 29},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {

    // DONT DO THE FOLLOWING, As React will not recognise this
    // const {persons} = this.state;
    // persons[0].name = "KAMRAN";

    // "persons" is merged to old "persons" object UNLINE in React Hook where it replaces the old object with new one
    this.setState({
      persons: [
        {name: newName, age: 29.5},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Kamran', age: 29.5},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

  togglePersonsHandler = () => {
    const {showPersons} = this.state;
    this.setState({showPersons: !showPersons});
  }

  render() {
    const {persons, showPersons} = this.state;
    const {name, age} = persons[0];
    const name1 = persons[1].name;
    const age1 = persons[1].age;

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let displayPersons = null;

    if (showPersons) {
      displayPersons = (
        <div>
          <Person name={name} age={age}> My Hobbies: Blogging </Person>
          {/* Approach 2: Using Anonymous Arrow Function; This method is INEFFICIENT */} 
          <Person name={name1} age={age1} click={ () => this.switchNameHandler("KAM!")}changed={this.nameChangedHandler}> My Hobbies: Reading </Person>
        </div>
      )
    }

    /* In normal JS it is onClick is onclick */
    return (
      <div className='App'>
        <h1>Hi, I am React App</h1>
        {/* Approach 1: Using Bind */} 
        {/* "style" attribute is made available by JSX */}
        <button 
          style = {style}
          onClick={this.togglePersonsHandler} type="button">Toggle Persons
        </button>  
        {displayPersons}
      </div>
    );
  }
  
}

export default App;
