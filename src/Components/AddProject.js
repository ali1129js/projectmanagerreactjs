/**
 * @Author: Ali Ismail
 * @Date:   2018-04-03T14:14:34+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T14:42:22+02:00
 */
import React, { Component } from 'react';
class AddProject extends Component {
  static defaultProps = {
    categories: ['Health and Fitness','Coding Skills','Knowledge Consumption','Entertainment']
  }
  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    });
    return(
      <div>
        <form>
          <div>
            <label> Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label> Category</label><br />
            <select ref="Category">
            {categoryOptions}
          </select>
          </div>
        </form>
      </div>
    );
  }
}
export default AddProject;
