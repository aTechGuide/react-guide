import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classes from './Person.module.css';
import AuthContext from '../../context/auth-context'

/* person is a stateless / Dumb / Presentational component as it has NO internal state management */

class Person extends Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); // React.createRef() = Any Ref Object React gives us
  }
  
  componentDidMount() {
    // this.inputElement.focus();
    const {authenticated} = this.context;
    this.inputElementRef.current.focus();
    console.log(authenticated);
  }

  render() {
    const {name, age, children, click, changed} = this.props;
    const {authenticated} = this.context;

  return (
    <div className={classes.Person}>

      {authenticated ? <p>Authenticated</p> :  <p>Please log In</p>}
      
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