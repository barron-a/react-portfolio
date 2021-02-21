import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';

function App() {
  const [navItems] = useState([
    { name: "about", description: "About me section" },
    { name: "portfolio", description: "examples of other coding projects" },
    { name: "contact", description: "Adam's contact information" },
    { name: "resume", description: "Adam's resume"}
  ]);

  const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

  return (
    <div>
      <Nav
        navItems={navItems}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem}
      ></Nav>
      <main>
        <Project></Project>
        <About></About>
      </main>
    </div>
  )
}

export default App;
