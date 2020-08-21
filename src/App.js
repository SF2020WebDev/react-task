import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.js'
import Greeter from './components/greeter.js'
import Alert from './components/alert.js'
import Person from './components/person.js'

function App() {
  return (
    <div className="App">
      <Greeter />
      <Counter />
      <Alert />
      <Person />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      
    </div>
  );
}

export default App;
