import React from 'react';

/* person is a stateless / Dumb / Presentational component as it has NO internal state management */
const person = (props) => {
  const {name, age, children, click} = props;
  return (
    <div>
      <p onClick={click} > I am {name} and I am {age} years old </p>
      <p> {children} </p>
    </div>
  )
}

export default person;