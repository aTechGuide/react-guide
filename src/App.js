import React from 'react';
import Person from './Person/Person'
import './App.css'


function App() {
  return (
    <div className='App'>
      <h1>Hi, I am React App</h1>
      <Person name="Kamran" age="29"> My Hobbies: Blogging </Person>
    </div>
  );
}

export default App;
