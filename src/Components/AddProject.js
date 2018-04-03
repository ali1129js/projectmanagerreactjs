/**
 * @Author: Ali Ismail
 * @Date:   2018-04-03T14:14:34+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T15:30:04+02:00
 */
import React, { Component } from 'react';
class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  static defaultProps = {
    categories: ['Health and Fitness','Coding Skills','Knowledge Consumption','Entertainment']
  }
  //setState takes a second parameter, a callback function! sending data up wink.
  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value === ''){
    alert('Title is missing');
    } else {
    this.setState({newProject:
      {
        title:this.refs.title.value,
        category: this.refs.category.value
      }
    },function () {
      console.log(this.state);
    });
  }
  }
  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label> Category</label><br />
            <select ref="category">
            {categoryOptions}
          </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddProject;
