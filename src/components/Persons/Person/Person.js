import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classes from './Person.module.css';
import AuthContext from '../../context/auth-context'

/* person is a stateless / Dumb / Presentational component as it has NO internal state management */

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); // React.createRef() = Any Ref Object React gives us
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    const {name, age, children, click, changed} = this.props;

  return (
    <div className={classes.Person}>
      <AuthContext.Consumer>
        {(context) => context.authenticated ? <p>Authenticated</p> :  <p>Please log In</p>}
      </AuthContext.Consumer>
      
      <p onClick={click} > I am {name} and I am {age} years old </p>
      <p> {children} </p>
      <input 
      // ref={(inputEl) => {this.inputElement = inputEl}} // Option 1
      ref = {this.inputElementRef} // Option 2
      type="text" onChange={changed} defaultValue={name} />
    </div>
  )
  }
}


Person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired
};

export default Person;