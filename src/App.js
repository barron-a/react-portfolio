import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Project></Project>
        <About></About>
      </main>
    </div>
  )
}

export default App;
