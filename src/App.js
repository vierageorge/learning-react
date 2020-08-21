import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! This is the new React App</h1>
        <p>This is really working!</p>
        <Person name="Jorge" age="33" />
        <Person name="Irina" age="30">My Hobbies: Yoga</Person>
        <Person name="Arturo" age="28" />
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App
