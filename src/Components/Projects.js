/**
 * @Author: Ali Ismail
 * @Date:   2018-04-02T13:27:28+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T13:35:34+02:00
 */
 import React, { Component } from 'react';
 class Projects extends Component {

   render() {
     let projectItems;
     if(this.props.projects) {
       projectItems = this.props.projects.map(project => {
         console.log(project);
       });
     }
     return (
       <div className="Projects">

       </div>
     );
   }
 }

 export default Projects;
