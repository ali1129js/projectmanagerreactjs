/**
 * @Author: Ali Ismail
 * @Date:   2018-04-02T08:51:13+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-02T13:51:31+02:00
 */
import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
      <Projects />
      </div>
    );
  }
}

export default App;
