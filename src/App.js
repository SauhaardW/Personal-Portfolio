import React from 'react'

import logo from './logo.svg';
import './App.css';

import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Projects } from './components/Projects.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
