/**
 * @Author: Ali Ismail
 * @Date:   2018-04-02T13:27:28+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T13:53:03+02:00
 */
 import React, { Component } from 'react';
 import ProjectItem from './ProjectItem';
 class Projects extends Component {

   render() {
     let projectItems;
     if(this.props.projects) {
       projectItems = this.props.projects.map(project => {
         return (
           <ProjectItem  key={project.title} project={project}/>
         );
       });
     }
     return (
       <div className="Projects">
         {projectItems}
       </div>
     );
   }
 }

 export default Projects;
