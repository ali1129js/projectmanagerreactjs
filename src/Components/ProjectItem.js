/**
 * @Author: Ali Ismail
 * @Date:   2018-04-03T13:39:59+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-25T20:43:39+02:00
 */
import React, { Component } from 'react';
class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let color = this.props.project.color;
    return (
      <ul className="list-group" >
        <li className="list-group-item" style={{
          width: 'auto',
          margin: '12px auto',
          padding:'5px',
          border: `3px solid ${color}`,
        }}>
          {this.props.project.title} - {this.props.project.category}
            <button
            href="#"
            className="btn btn-danger"
            onClick={this.deleteProject.bind(this,this.props.project.id)}> X </button>
        </li>

      </ul>
    );
  }
}
export default ProjectItem;
