import React, {Component, Fragment} from 'react';
import Persons from '../components/Persons/Persons'
import classes from './App.module.css'
import Cockpit from '../components/cockpit/Cockpit'
import withClass from '../components/hof/withClass'
import AuthContext from '../components/context/auth-context'

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

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state = {
      persons: [
        {id: '1', name: 'Kamran', age: 29},
        {id: '2', name: 'Manu', age: 29},
        {id: '3', name: 'Stephanie', age: 27}
      ],
      showPersons: false,
      authenticated: false
    }
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    const {persons, showPersons, authenticated} = this.state;
    const {appTitle} = this.props;

    let displayPersons = null;

    if (showPersons) {
      displayPersons = <Persons 
          persons={persons}
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} />;
    }

    return (
      <Fragment>
        <AuthContext.Provider value={{
            authenticated, login: this.loginHandler}} >
          <Cockpit 
          title={appTitle}
          showPersons={showPersons}
          personsLength={persons.length}
          clicked={this.togglePersonsHandler}/>
          
          {displayPersons}
        </AuthContext.Provider>
      </Fragment>
    );
  }
  
}

export default withClass(App, classes.App);
