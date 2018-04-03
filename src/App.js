/**
 * @Author: Ali Ismail
 * @Date:   2018-04-02T08:51:13+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T13:12:16+02:00
 */
import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
            {
            title: 'eat meat',
            category: 'Health and Fitness',
            color: 'blue'
          },
          {
            title: 'read Medium',
            category: 'Coding skills',
            color: 'red'
          }
      ]
    }
  }
  render() {
    return (
      <div className="App">
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
