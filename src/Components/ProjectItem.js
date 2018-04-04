/**
 * @Author: Ali Ismail
 * @Date:   2018-04-03T13:39:59+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-04T22:06:47+02:00
 */
import React, { Component } from 'react';
class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          {this.props.project.title} - {this.props.project.category}
          <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
        </li>
      </ul>
    );
  }
}
export default ProjectItem;
