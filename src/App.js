import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Education from './components/education'
import Projects from './components/projects'
import Experience from './components/experience'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
            <div id="colorlib-main">
              <Home></Home>
              <About></About>
              <Education></Education>
              <Experience></Experience>
              <Projects></Projects>
            </div>
        </div>
      </div>
    );
  }
}


export default App;
