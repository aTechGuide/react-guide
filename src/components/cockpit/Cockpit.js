import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {

  const {persons, showPersons, clicked} = props;

  const assignedClasses = [];
  let btnClass = '';

  if(showPersons) {
    btnClass = classes.Red;
  }

  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

    return (
      <div className={classes.Cockpit}>
      <h1>Hi, I am React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          {/* "style" attribute is made available by JSX */}
          <button 
            className={btnClass}
            onClick={clicked} type="button">
              Toggle Persons
          </button>  
    </div>
  );
};

export default cockpit;