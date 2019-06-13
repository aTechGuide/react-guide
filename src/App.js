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

  /* state is a reserved word */
  state = {
    persons: [
      {name: 'Kamran', age: 29},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]
  }

  switchNameHandler = () => {

    // DONT DO THE FOLLOWING, As React will not recognise this
    // const {persons} = this.state;
    // persons[0].name = "KAMRAN";

    this.setState({
      persons: [
        {name: 'KAMRAN', age: 29.5},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

  render() {
    const {persons} = this.state;
    const {name, age} = persons[0];

    /* In normal JS it is onClick is onclick */
    return (
      <div className='App'>
        <h1>Hi, I am React App</h1>
        <button onClick={this.switchNameHandler} type="button">Change State</button>  
        <Person name={name} age={age}> My Hobbies: Blogging </Person>
      </div>
    );
  }
  
}

export default App;
