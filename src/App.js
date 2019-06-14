import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
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
      {id: '1', name: 'Kamran', age: 29},
      {id: '2', name: 'Manu', age: 29},
      {id: '3', name: 'Stephanie', age: 27}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const {persons} = this.state;
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });

    const personCopy = {...persons[personIndex]};

    personCopy.name = event.target.value;
    const personsCopy = [...persons];
    personsCopy[personIndex] = personCopy;

    this.setState({
      persons: personsCopy
    })
  }

  deletePersonHandler = (personIndex) => {
    const {persons} = this.state;

    /* As a Good Practice copy the array first before modifying */
    const personsCopy = [...persons];
    personsCopy.splice(personIndex, 1)
    this.setState({persons: personsCopy})
  }

  togglePersonsHandler = () => {
    const {showPersons} = this.state;
    this.setState({showPersons: !showPersons});
  }

  render() {
    const {persons, showPersons} = this.state;

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let displayPersons = null;

    if (showPersons) {
      displayPersons = (
        <div>
          {
            persons.map((person, index) => {
              return <Person 
                name={person.name} 
                age={person.age} 
                click={ () => this.deletePersonHandler(index)} 
                key={person.id} 
                changed={ (event) => this.nameChangedHandler(event, person.id)} /> 
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (persons.length <= 2) {
      classes.push('red');
    }

    if (persons.length <= 1) {
      classes.push('bold');
    }

    /* In normal JS "onClick" is onclick */
    return (
      <StyleRoot>
        <div className='App'>
          <h1>Hi, I am React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          {/* "style" attribute is made available by JSX */}
          <button 
            style = {style}
            onClick={this.togglePersonsHandler} type="button">
              Toggle Persons
          </button>  
          {displayPersons}
        </div>
      </StyleRoot>
    );
  }
  
}

export default Radium(App);
