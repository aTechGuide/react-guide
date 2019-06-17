import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.module.css'
import AuthContext from '../context/auth-context'

const Cockpit = (props) => {

  console.log('[cockpit.js] is rendered'); 

  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[cockpit.js] useEffect is called'); 
    toggleButtonRef.current.click();
  }, []); 
  

  const {personsLength, showPersons, clicked, title} = props;

  const assignedClasses = [];
  let btnClass = '';

  if(showPersons) {
    btnClass = classes.Reddish;
  }

  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

    return (
      <div className={classes.Cockpit}>
      <h1>{title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          {/* "style" attribute is made available by JSX */}
          <button 
            ref = {toggleButtonRef}
            className={btnClass}
            onClick={clicked} type="button">
              Toggle Persons
          </button> 
          <AuthContext.Consumer>
            {(context) => <button onClick={context.login} type="button"> Log In</button> }
          </AuthContext.Consumer> 
          
    </div>
  );
};

export default React.memo(Cockpit);