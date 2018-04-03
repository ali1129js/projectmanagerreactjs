/**
 * @Author: Ali Ismail
 * @Date:   2018-04-02T08:51:13+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T17:39:09+02:00
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
    this.addProject = this.addProject.bind(this);
  }
/*
componentWillMount(){
  this.setState({projects:[]});
}
*/
  addProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  deleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.addProject} />
      <Projects projects={this.state.projects} onDelete={this.deleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
