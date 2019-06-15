import React from 'react';
import classes from './Person.module.css';

/* person is a stateless / Dumb / Presentational component as it has NO internal state management */
const person = (props) => {
  const {name, age, children, click, changed} = props;

  return (
    <div className={classes.Person}>
      <p onClick={click} > I am {name} and I am {age} years old </p>
      <p> {children} </p>
      <input onChange={changed} defaultValue={name} />
    </div>
  )
}

export default person;