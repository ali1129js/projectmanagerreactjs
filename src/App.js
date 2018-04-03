/**
 * @Author: Ali Ismail
 * @Date:   2018-04-02T08:51:13+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T17:11:55+02:00
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
  componentWillMount(){
    this.setState({
                projects:[]});
  }
  addProject(project){
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.addProject}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
