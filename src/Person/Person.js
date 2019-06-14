import React from 'react';
import Radium from 'radium';
import './Person.css';

/* person is a stateless / Dumb / Presentational component as it has NO internal state management */
const person = (props) => {
  const {name, age, children, click, changed} = props;

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={click} > I am {name} and I am {age} years old </p>
      <p> {children} </p>
      <input onChange={changed} defaultValue={name} />
    </div>
  )
}

export default Radium(person);