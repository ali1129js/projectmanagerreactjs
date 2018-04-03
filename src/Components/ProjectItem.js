/**
 * @Author: Ali Ismail
 * @Date:   2018-04-03T13:39:59+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T17:33:14+02:00
 */
import React, { Component } from 'react';
class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="theList">
        {this.props.project.title} - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}
export default ProjectItem;
