import React from 'react'

/*
  A Function returning a Function (which is a Functional Component)
*/
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className} >
      <WrappedComponent />
    </div>
  );
}

export default withClass;