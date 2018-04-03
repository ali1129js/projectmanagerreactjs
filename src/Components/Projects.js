/**
 * @Author: Ali Ismail
 * @Date:   2018-04-02T13:27:28+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T17:52:47+02:00
 */
 import React, { Component } from 'react';
 import ProjectItem from './ProjectItem';
 class Projects extends Component {
   deleteProject(id){
     this.props.onDelete(id);
   }
   render() {
     let projectItems;
     if(this.props.projects) {
       projectItems = this.props.projects.map(project => {
         return (
           <ProjectItem
             key={project.id}
             project={project}
             onDelete={this.deleteProject.bind(this)}
           />
         );
       });
     }
     return (
       <div className="Projects">
         <h3>Latest Projects</h3>
         {projectItems}
       </div>
     );
   }
 }

 export default Projects;
