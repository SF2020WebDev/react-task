import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.js'
import Greeter from './components/greeter.js'
import Alert from './components/alert.js'
import Person from './components/person.js'
import Form from './components/form.js'
import Post from './components/post';
import Boxes from './components/boxes';
import ImagePreview from './components/imagePreview.js'
import Questions from './components/questions';

function App() {
  return (
    <div className="App">
      <Questions />
      <ImagePreview />
      <Boxes />
      <Greeter />
      <Counter />
      <Alert />
      <Person />
      <Form />
      <Post title={'Dover Castle'} 
            image={<img src="https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/dover-castle/old-hero-images/dover-icon-hero-spring.jpg" />}
            content={"A medieval castle in Dover, Kent, often referred to as the 'Key to England' due to its strategic importance."} />
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
