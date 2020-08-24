import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.js'
import Greeter from './components/greeter.js'
import Alert from './components/alert.js'
import Person from './components/person.js'
import Form from './components/form.js'
import Post from './components/post';

function App() {
  return (
    <div className="App">
      <Greeter />
      <Counter />
      <Alert />
      <Person />
      <Form />
      <Post />
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
