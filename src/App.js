/**
 * @Author: Ali Ismail
 * @Date:   2018-04-02T08:51:13+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T14:20:27+02:00
 */
import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
    this.setState({
                projects:[
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
  ]});
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
