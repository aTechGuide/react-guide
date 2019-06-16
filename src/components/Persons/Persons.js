import React, {PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {

  render() {
    console.log('[Persons.js] is rendering');
    const {persons, clicked, changed} = this.props;

    return (
      persons.map((person, index) => {
        return <Person 
          name={person.name} 
          age={person.age} 
          click={ () => clicked(index)} 
          key={person.id} 
          changed={ (event) => changed(event, person.id)} /> 
      })
    )
  }
}



export default Persons;
