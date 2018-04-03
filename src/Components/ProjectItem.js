/**
 * @Author: Ali Ismail
 * @Date:   2018-04-03T13:39:59+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T13:55:33+02:00
 */
import React, { Component } from 'react';
class ProjectItem extends Component {
  render() {
    return (
      <li className="theList">
        {this.props.project.title} - {this.props.project.category}
      </li>
    );
  }
}
export default ProjectItem;
