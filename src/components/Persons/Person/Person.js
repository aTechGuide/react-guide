import React from 'react';
import PropTypes from 'prop-types'
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

person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired
};

export default person;